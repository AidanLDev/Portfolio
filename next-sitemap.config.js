/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.BASE_URL || 'https://aidanlowson.com',
  generateRobotsTxt: true,
  exclude: ['/unsubscribe', '/manifest.webmanifest', '/apple-icon*', '/icon*'],
  changefreq: 'monthly',
  priority: 0.5,
  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: path === '/' ? 1.0 : config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  }),
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/monitoring'] }],
  },
}
