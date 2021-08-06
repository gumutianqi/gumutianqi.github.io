import type { DefaultThemeOptions } from 'vuepress'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '古拉里 学架构',
  description: 'Just Do IT',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],

  themeConfig: {
    logo: '/images/logo.png',
    sidebarDepth: 0,
    sidebar: [
      {
        text: '目录',
        link: '/SUMMARY.md'
      },
      {
        text: '前言',
        children: [
          '/introduction/about-me.md'
        ],
      },
      {
        text: '读书笔记',
        children: [
          "/reading/about-reading.md"
        ]
      },
      {
        text: '云原生',
        children: [
          "/cloud-native/abount-cloud-native.md"
        ]
      },
      {
        text: '最佳实践',
        children: [
          {
            text: '微服务',
            children: [
              "/best-practice/microservice/about-microservice.md"
            ]
          },
          {
            text: 'Serverless',
            children: [
              "/best-practice/serverless/about-serverless.md"
            ]
          },
          {
            text: 'RFC 日常',
          }
        ]
      },
      {
        text: '随笔',
        children: [
          '/tricks/about-life.md',
          '/tricks/hhkb-pro2-types-show.md'
        ]
      },
    ],
  },
  plugins: [
    [
      '@vuepress/docsearch',
      {
        apiKey: '<API_KEY>',
        indexName: '<INDEX_NAME>',
        locales: {
          '/': {
            placeholder: 'Search Documentation',
          },
          '/zh/': {
            placeholder: '搜索文档',
          },
        },
      },
    ],
    [
      '@vuepress/pwa',
      {
        skipWaiting: true,
      },
    ],
  ]
})