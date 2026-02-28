import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MIZUKI BOT",
  description: "MIZUKI BOT",
  base: "/mzkbot_web/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指令帮助', link: '/help' },
      { text: '在线状态', link: '/status' }

    ],

    sidebar: [
      {
        text: '使用指南',
        items: [
          { text: '如何使用', link: '/how2use' },
          { text: '指令帮助', link: '/help' }
        ]
      },
      {
        text: '关于与规范',
        items: [
          { text: '关于', link: '/about' },
          { text: '开发者&鸣谢', link: '/thank' },
          { text: '使用BOT的规范', link: '/guize' },
          { text: '在线状态', link: '/status' },
          { text: '赞助', link: '/money' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yonglanws/mzkbot_web' }
    ]
  },
  footer:{
    copyright: "© Copyright 2026 慵懒午睡"
  }
})
