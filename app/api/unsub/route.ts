// app/api/unsub/route.ts
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import {
  DynamoDBDocumentClient,
  UpdateCommand,
  UpdateCommandInput,
} from '@aws-sdk/lib-dynamodb'
import { NextResponse } from 'next/server'

const dynamoClient = new DynamoDBClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY!,
  },
})
const docClient = DynamoDBDocumentClient.from(dynamoClient)

export async function POST(request: Request) {
  try {
    // Extract the email from the request body
    const { email } = await request.json()

    console.log(`Received unsubscribe request for email: ${email}`)

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    // TODO: Add email validation here

    const updateInput: UpdateCommandInput = {
      TableName: 'NewsLetterSubscribers',
      Key: { Email: email },
      UpdateExpression: 'set Subscribed = :isSubbed',
      ExpressionAttributeValues: {
        ':isSubbed': false,
      },
    }

    const updateCommand = new UpdateCommand(updateInput)

    const unSubResponse = await docClient.send(updateCommand)

    if (unSubResponse.$metadata.httpStatusCode === 200) {
      return NextResponse.json(
        { message: `Unsubscribed ${email} successfully` },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { message: 'Bad response from the dynamo call' },
        { status: 500 }
      )
    }
  } catch (err) {
    return NextResponse.json(
      { message: 'Failed to un-subscribe, error from the update command' },
      { status: 500 }
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
