import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mzkbot帮助文档",
  description: "mzkbot帮助文档",
  base: "/mzkbot_web/",
  head: [["link", { rel: "icon", href: "https://bot-assets.xszq.xyz/meme/pjsk/Mizuki/Mizuki_03.webp" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用帮助', link: '/help' },
      { text: '交流群', link: '/how2use' }

    ],
    footer:{
      copyright: "© Copyright 2026 慵懒午睡"
    },
    sidebar: [
      {
        text: '使用指南',
        items: [
          { text: '指令帮助', link: '/help' },
          { text: '使用BOT的规范', link: '/guize' }
        ]
      },
      {
        text: '关于',
        items: [
          { text: '开发者&鸣谢', link: '/thank' },
          { text: '交流群', link: '/how2use' },
          { text: '赞助', link: '/money' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yonglanws/mzkbot_web' }
    ]
  }
  
})
