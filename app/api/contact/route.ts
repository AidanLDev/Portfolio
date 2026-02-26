import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { emailRegex } from '@/lib/validation'

const sesClient = new SESClient({ region: 'us-east-1' })

const MAX_NAME_LENGTH = 100
const MAX_MESSAGE_LENGTH = 5000
const MY_EMAIL = 'dev@aidanlowson.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Name, email, and message are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return new Response(JSON.stringify({ message: 'Invalid field types' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (trimmedName.length === 0 || trimmedEmail.length === 0 || trimmedMessage.length === 0) {
      return new Response(JSON.stringify({ message: 'Fields cannot be empty' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (trimmedName.length > MAX_NAME_LENGTH) {
      return new Response(
        JSON.stringify({ message: `Name must be ${MAX_NAME_LENGTH} characters or less` }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      )
    }

    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      return new Response(
        JSON.stringify({ message: `Message must be ${MAX_MESSAGE_LENGTH} characters or less` }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      )
    }

    if (!emailRegex.test(trimmedEmail)) {
      return new Response(JSON.stringify({ message: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const sendCommand = new SendEmailCommand({
      Source: MY_EMAIL,
      Destination: {
        ToAddresses: [MY_EMAIL],
      },
      ReplyToAddresses: [trimmedEmail],
      Message: {
        Subject: {
          Data: `Portfolio Contact: ${trimmedName}`,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
            Charset: 'UTF-8',
          },
        },
      },
    })

    await sesClient.send(sendCommand)

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Error during send message operation:', err)

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
