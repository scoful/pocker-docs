const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  images: {
    domains: ['scoful-picgo.oss-ap-southeast-1.aliyuncs.com']
  }
})
