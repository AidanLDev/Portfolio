/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'portfolio',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    }
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
      domain: {
        name: 'aidanlowson.com',
        cert: 'arn:aws:acm:us-east-1:136597286325:certificate/7634b5c3-5a42-46e4-9e83-c1ee57b6f1c2',
      },
      environment: {
        MY_AWS_ACCESS_KEY_ID: process.env.MY_AWS_ACCESS_KEY_ID!,
        MY_AWS_SECRET_ACCESS_KEY: process.env.MY_AWS_SECRET_ACCESS_KEY!,
      },
    })
  },
})
