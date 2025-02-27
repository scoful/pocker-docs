import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Pocker 使用文档</span>,
  project: {
    link: 'https://github.com/scoful/pocker',
  },
  docsRepositoryBase: 'https://github.com/scoful/pocker-docs/blob/main',
  footer: {
    text: 'Pocker - 让每个人都有自己的 Docker 私服，Make Docker Great Again -  ❤ by scoful',
  },
}

export default config
