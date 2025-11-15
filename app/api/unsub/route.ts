// app/api/unsub/route.ts
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb'

const dynamoClient = new DynamoDBClient({
  region: 'us-east-1',
})
const docClient = DynamoDBDocumentClient.from(dynamoClient)

export async function POST(request: Request) {
  try {
    // Extract the email from the request body
    const { email } = await request.json()

    console.log(`Received unsubscribe request for email: ${email}`)

    if (!email) {
      return new Response(JSON.stringify({ message: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ message: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const updateInput: UpdateCommandInput = {
      TableName: 'NewsLetterSubscribers',
      Key: { Email: email },
      UpdateExpression: 'SET Subscribed = :isSubbed',
      ConditionExpression: 'attribute_exists(Email) AND Subscribed = :wasSubbed',
      ExpressionAttributeValues: {
        ':isSubbed': false,
        ':wasSubbed': true,
      },
      ReturnValues: 'NONE',
    }

    const updateCommand = new UpdateCommand(updateInput)

    const unSubResponse = await docClient.send(updateCommand)

    if (unSubResponse.$metadata.httpStatusCode === 200) {
      return new Response(JSON.stringify({ message: `Unsubscribed ${email} successfully` }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    } else {
      return new Response(JSON.stringify({ message: 'Bad response from the dynamo call' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  } catch (err) {
    console.error('Error during un-subscribe operation:', err)
    const e: any = err
    if (e && e.name === 'ConditionalCheckFailedException') {
      return new Response(JSON.stringify({ message: 'Email not found or already unsubscribed' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(
      JSON.stringify({ message: 'Failed to un-subscribe, error from the update command' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
// Handle unsupported methods
export async function GET() {
  return new Response('Method not allowed', { status: 405 })
}

export async function PUT() {
  return new Response('Method not allowed', { status: 405 })
}

export async function DELETE() {
  return new Response('Method not allowed', { status: 405 })
}
