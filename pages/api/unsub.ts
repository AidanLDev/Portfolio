import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { email } = req.body // Extract the email from the request body

    if (!email) {
      return res.status(400).json({ message: 'Email is required' })
    }

    console.log(`Received unsubscribe request for email: ${email}`)

    // Perform any necessary operations, such as removing the email from a mailing list

    res.status(200).json({ message: `Unsubscribed ${email} successfully` })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
