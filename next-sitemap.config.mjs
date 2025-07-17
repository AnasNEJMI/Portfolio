/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://anasnejmi.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
}

export default config