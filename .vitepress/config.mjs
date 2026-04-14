import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mzkbot帮助文档",
  description: "mzkbot帮助文档",
  base: "/mzkbot_web/",
  head: [["link", { rel: "icon", href: "https://bot-assets.xszq.xyz/meme/pjsk/Mizuki/Mizuki_03.webp" }]],
  cleanUrls: true,
  appearance: true,
  rewrites: {
    'doc/:page': ':page',
    'doc/help/:category/:page': 'help/:category/:page',
    'doc/help/:page': 'help/:page',
    'doc/help/haruki-neo/:page': 'help/haruki-neo/:page',
    'doc/help/haruki/:page': 'help/haruki/:page'
  },
  themeConfig: {
    logo: "https://bot-assets.xszq.xyz/meme/pjsk/Mizuki/Mizuki_03.webp",
    outlineTitle: "目录",
    outline: [2, 3],
    
    // Navigation with dropdown menus
    nav: [
      { 
        text: '📖 使用帮助', 
        link: '/help/',
        items: [
          { text: '基础对话', link: '/help/basic/chat' },
          { text: '每日签到', link: '/help/basic/signin' },
          { text: 'PJSK猜歌', link: '/help/entertainment/guess-song' },
          { text: '网易云点歌', link: '/help/entertainment/music' },
          { text: 'HarukiBot NEO', link: '/help/haruki-neo/' },
          { text: 'HarukiBOT', link: '/help/haruki/' }
        ]
      },
      { 
        text: '📋 其他页面',
        items: [
          { text: '关于', link: '/thank' },
          { text: '使用规范', link: '/guize' },
          { text: '开源', link: '/kaiyuan' },
          { text: '交流群', link: '/how2use' },
          { text: '赞助', link: '/money' }
        ]
      }
    ],
    
    footer:{
      copyright: "© Copyright 2026 慵懒午睡"
    },
    
    // Unified sidebar - All navigation in one place for all pages
    sidebar: [
      {
        text: '📖 指令帮助',
        link: '/help/',
        items: [
          {
            text: '基础功能',
            collapsed: true,
            items: [
              { text: '基础对话', link: '/help/basic/chat' },
              { text: '每日签到', link: '/help/basic/signin' }
            ]
          },
          {
            text: '娱乐互动',
            collapsed: true,
            items: [
              { text: 'PJSK猜歌', link: '/help/entertainment/guess-song' },
              { text: 'PJSK猜卡面', link: '/help/entertainment/guess-card' },
              { text: 'PJSK猜曲绘', link: '/help/entertainment/guess-jacket' },
              { text: 'PJSK歌词猜曲', link: '/help/entertainment/guess-lyrics' },
              { text: '网易云点歌', link: '/help/entertainment/music' }
            ]
          },
          {
            text: '其他功能',
            collapsed: true,
            items: [
              { text: '流媒体解析', link: '/help/other/video' },
              { text: '入群/退群提示', link: '/help/other/group' },
              { text: '服务器状态监控', link: '/help/other/status' }
            ]
          },
          {
            text: 'HarukiBot NEO 专项',
            collapsed: true,
            items: [
              { text: '使用指南', link: '/help/haruki-neo/' }
            ]
          },
          {
            text: 'HarukiBOT 专项',
            collapsed: true,
            items: [
              { text: '使用指南', link: '/help/haruki/' }
            ]
          }
          
        ]
      },
      {
        text: '📋 其他页面',
        items: [
          { text: '关于', link: '/thank' },
          { text: '使用规范', link: '/guize' },
          { text: '开源', link: '/kaiyuan' },
          { text: '交流群', link: '/how2use' },
          { text: '赞助', link: '/money' }
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
