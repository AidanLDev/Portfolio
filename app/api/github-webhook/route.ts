import { createHmac, timingSafeEqual } from 'node:crypto'

type WebhookTrigger = 'ping' | 'workflow_run'

function isValidSignature(signature: string, expected: string): boolean {
  const signatureBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expected)

  if (signatureBuffer.length !== expectedBuffer.length) {
    console.error('Signature and expected signature are different lengths')
    return false
  }

  return timingSafeEqual(signatureBuffer, expectedBuffer)
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
    console.log('running')
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
