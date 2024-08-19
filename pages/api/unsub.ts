import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import {
  DynamoDBDocumentClient,
  UpdateCommand,
  UpdateCommandInput,
} from '@aws-sdk/lib-dynamodb'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

const dynamoClient = new DynamoDBClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY!,
  },
})
const docClient = DynamoDBDocumentClient.from(dynamoClient)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { email } = req.body // Extract the email from the request body

    console.log(`Received unsubscribe request for email: ${email}`)

    if (!email) {
      return res.status(400).json({ message: 'Email is required' })
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

    try {
      const unSubResponse = await docClient.send(updateCommand)
      if (unSubResponse.$metadata.httpStatusCode === 200) {
        res.status(200).json({ message: `Unsubscribed ${email} successfully` })
        return
      } else {
        res.status(500).json({ message: 'Bad response from the dynamo call' })
      }
    } catch (err) {
      res.status(500).json({
        message: 'Failed to un-subscribe, error from the update command',
      })
      return
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
