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
        aliases: ['www.aidanlowson.com'],
        cert: 'arn:aws:acm:us-east-1:136597286325:certificate/7634b5c3-5a42-46e4-9e83-c1ee57b6f1c2',
      },
      environment: {
        NEXT_PUBLIC_SENTRY_DNS: process.env.NEXT_PUBLIC_SENTRY_DNS!,
        SENTRY_DNS: process.env.SENTRY_DNS!,
      },
      permissions: [
        {
          actions: ['dynamodb:UpdateItem'],
          resources: ['arn:aws:dynamodb:us-east-1:136597286325:table/NewsLetterSubscribers'],
        },
      ],
    })
  },
})
