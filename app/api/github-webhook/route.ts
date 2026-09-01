import { createHmac, timingSafeEqual } from 'node:crypto'

type WebhookTrigger = 'ping' | 'workflow_run'

type WorkflowConclusion =
  | 'success'
  | 'failure'
  | 'cancelled'
  | 'skipped'
  | 'timed_out'
  | 'action_required'
  | 'neutral'
  | 'stale'

type WorkflowRunPayload =
  | {
      action: 'requested' | 'in_progress'
      workflow_run: { id: number; name: string; conclusion: null }
    }
  | {
      action: 'completed'
      workflow_run: { id: number; name: string; conclusion: WorkflowConclusion }
    }

function isValidSignature(signature: string, expected: string): boolean {
  const signatureBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expected)

  if (signatureBuffer.length !== expectedBuffer.length) {
    console.error('Signature and expected signature are different lengths')
    return false
  }

  return timingSafeEqual(signatureBuffer, expectedBuffer)
}

type NotificationState = 'started' | WorkflowConclusion

const NOTIFICATION_STYLE: Record<NotificationState, { color: number; title: string }> = {
  started: { color: 3447003, title: 'Build started' },
  success: { color: 3066993, title: 'Build succeeded' },
  failure: { color: 15158332, title: 'Build failed' },
  cancelled: { color: 9807270, title: 'Build cancelled' },
  skipped: { color: 12370112, title: 'Build skipped' },
  timed_out: { color: 15105570, title: 'Build timed out' },
  action_required: { color: 16776960, title: 'Build needs action' },
  neutral: { color: 9807270, title: 'Build finished (neutral)' },
  stale: { color: 9807270, title: 'Build marked stale' },
}

async function sendDiscordNotification(workflowName: string, state: NotificationState) {
  if (!process.env.DISCORD_WEBHOOK_URL) {
    console.error('No discord webhook url found...')
    return
  }

  const { color, title } = NOTIFICATION_STYLE[state]

  const discordMessageBody = JSON.stringify({
    username: 'GitHub Actions',
    embeds: [
      {
        title,
        color,
        fields: [{ name: 'Workflow', value: workflowName, inline: true }],
        timestamp: new Date().toISOString(),
      },
    ],
  })

  try {
    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: discordMessageBody,
    })
  } catch (err) {
    console.error(`Failed to send notification to discord: ${err}`)
  }
}

export async function POST(request: Request) {
  const secret = process.env.GH_WEBHOOK_SECRET
  const signature = request.headers.get('x-hub-signature-256')
  const rawBody = await request.text()

  if (!secret || !signature) {
    console.error('Missing secret or signature...')
    return new Response('Failed to send message because missing secret/signature', { status: 403 })
  }

  const expected = `sha256=${createHmac('sha256', secret).update(rawBody).digest('hex')}`

  if (!isValidSignature(signature, expected)) {
    console.error('Signature is invalid...')
    return new Response('Invalid Signature', { status: 401 })
  }

  try {
    const githubEvent = request.headers.get('X-GitHub-Event') as WebhookTrigger
    if (githubEvent === 'ping') {
      console.info('GH Ping event')
      return new Response('Got the ping', { status: 200 })
    }
    if (githubEvent !== 'workflow_run') {
      console.error('Unexpected event... ', githubEvent)
      return new Response('Unexpected event', { status: 500 })
    }

    const payload = JSON.parse(rawBody) as WorkflowRunPayload

    switch (payload.action) {
      case 'requested': {
        console.log('Workflow run requested', payload.workflow_run.id)
        await sendDiscordNotification(payload.workflow_run.name, 'started')
        break
      }
      case 'in_progress': {
        console.log('Workflow run in progress', payload.workflow_run.id)
        break
      }
      case 'completed': {
        console.log(
          'Workflow run completed',
          payload.workflow_run.id,
          payload.workflow_run.conclusion,
        )
        await sendDiscordNotification(payload.workflow_run.name, payload.workflow_run.conclusion)
        break
      }
    }

    return new Response('OK', { status: 200 })
  } catch (err) {
    console.error(`Error in the github webhook function ${err}`)
    return new Response(
      JSON.stringify({
        message: 'Failed to send message, internal server error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}

export async function GET() {
  return new Response('Method not allowed', { status: 405 })
}

export async function PUT() {
  return new Response('Method not allowed', { status: 405 })
}

export async function DELETE() {
  return new Response('Method not allowed', { status: 405 })
}
