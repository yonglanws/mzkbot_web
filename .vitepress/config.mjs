import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mzkbot帮助文档",
  description: "mzkbot帮助文档",
  base: "/mzkbot_web/",
  head: [["link", { rel: "icon", href: "/mzkbot_web/image/mizuki3.webp" }]],
  cleanUrls: true,
  appearance: true,
  rewrites: {
    'doc/:page': ':page',
    'doc/help/:category/:page': 'help/:category/:page',
    'doc/help/:page': 'help/:page',
    'doc/help/haruki-neo/:page': 'help/haruki-neo/:page',
    'doc/help/haruki/:page': 'help/haruki/:page',
    'doc/help/haruki/bot-help/:page': 'help/haruki/bot-help/:page'
  },
  themeConfig: {
    logo: "/image/mizuki3.webp",
    outlineTitle: "目录",
    outline: [2, 3],
    
    // Navigation with dropdown menus
    nav: [
      {
        text: '📖 使用帮助',
        link: '/help/',
        items: [
          { text: 'HarukiBot NEO 使用入门', link: '/help/haruki/bot-help/' }
        ]
      }
    ],
    
    footer:{
      copyright: "© Copyright 2026 慵懒午睡"
    },
    
    // Unified sidebar - All navigation in one place for all pages
    sidebar: [
      {
        text: '📖 mzkbot',
        items: [
          { text: '使用教程', link: '/help/' },
          { text: '关于&鸣谢', link: '/help/thank' },
          { text: '使用规范', link: '/help/guize' },
          { text: '开源', link: '/help/kaiyuan' },
          { text: '交流群', link: '/help/how2use' },
          { text: '赞助', link: '/help/money' }
        ]
      },
      {
        text: '🎮 HarukiBot',
        items: [

          {
            text: 'HarukiBot NEO 帮助',
            collapsed: false,
            items: [
              { text: '使用入门', link: '/help/haruki/bot-help/' },
              { text: '如何使用工具箱', link: '/help/haruki/bot-help/toolbox_guide' },
              { text: '个人资料与账号', link: '/help/haruki/bot-help/account' },
              { text: '卡牌查询', link: '/help/haruki/bot-help/card' },
              { text: '音乐与乐曲', link: '/help/haruki/bot-help/music' },
              { text: '活动查询', link: '/help/haruki/bot-help/event' },
              { text: '榜线与SK', link: '/help/haruki/bot-help/sk' },
              { text: '组卡', link: '/help/haruki/bot-help/recommend' },
              { text: '养成查询', link: '/help/haruki/bot-help/cultivation' },
              { text: 'MySekai查询', link: '/help/haruki/bot-help/mysekai' },
              { text: '昵称与别名', link: '/help/haruki/bot-help/alias' },
              { text: '杂项命令', link: '/help/haruki/bot-help/misc' }
            ]
          }
        ]
      }
    ],
    
    // Search configuration
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yonglanws/mzkbot_web' }
    ]
  }
})
