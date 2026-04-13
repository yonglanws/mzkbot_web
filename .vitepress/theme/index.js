import { h, watch, onMounted, nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import nprogress from 'nprogress'
import { useRoute, withBase } from 'vitepress'
import './style.css'
import './style/rainbow.css'
import './style/blur.css'
import './style/hidden.css'

let homePageStyle = null
let chatStyleEl = null

const chatCSS = `
.vp-doc .chat-container{max-width:800px;margin:20px auto;padding:16px;background:#f5f5f7;border-radius:16px}
.vp-doc .chat-message{display:flex!important;margin-bottom:16px;align-items:flex-start}
.vp-doc .chat-message.user{justify-content:flex-end!important}
.vp-doc .chat-message.bot{justify-content:flex-start!important}
.vp-doc .chat-avatar{width:40px;height:40px;border-radius:50%;flex-shrink:0;margin-left:12px;background-size:cover;background-position:center;background-repeat:no-repeat}
.vp-doc .chat-message.bot .chat-avatar{margin-left:0;margin-right:12px}
.vp-doc .user-avatar{background-image:var(--chat-user-avatar)}
.vp-doc .bot-avatar{background-image:var(--chat-bot-avatar)}
.vp-doc .chat-content{max-width:70%}
.vp-doc .chat-header{display:flex;align-items:center;margin-bottom:4px;font-size:12px;color:#8e8e93}
.vp-doc .chat-message.user .chat-header{justify-content:flex-end}
.vp-doc .chat-name{font-weight:600;margin-right:8px}
.vp-doc .chat-message.user .chat-name{margin-right:0;margin-left:8px}
.vp-doc .chat-time{font-size:11px}
.vp-doc .chat-bubble{padding:12px 16px;border-radius:18px;font-size:14px;line-height:1.5;word-wrap:break-word;background:#007aff;color:white;border-bottom-left-radius:18px;border-bottom-right-radius:4px}
.vp-doc .chat-message.bot .chat-bubble{background:white;color:#1c1c1e;border-bottom-left-radius:4px;border-bottom-right-radius:18px;box-shadow:0 1px 2px rgba(0,0,0,0.08)}
.vp-doc .chat-bubble img{max-width:100%;border-radius:8px;margin-top:8px}
.vp-doc .chat-bubble code{background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:4px;font-family:'SF Mono',Monaco,monospace;font-size:13px}
`

function injectChatStyle() {
  if (chatStyleEl) return
  chatStyleEl = document.createElement('style')
  chatStyleEl.setAttribute('data-chat-style', '')
  chatStyleEl.textContent = chatCSS
  document.head.appendChild(chatStyleEl)
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      injectChatStyle()

      document.documentElement.style.setProperty(
        '--chat-user-avatar',
        `url('${withBase('/image/talk/mzk.png')}')`
      )
      document.documentElement.style.setProperty(
        '--chat-bot-avatar',
        `url('${withBase('/image/talk/user.jpg')}')`
      )

      nprogress.configure({ showSpinner: false })

      router.onBeforeRouteChange = () => {
        nprogress.start()
      }

      router.onAfterRouteChanged = () => {
        nprogress.done()
      }

      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/' || location.pathname === '/mzkbot_web/'),
        { immediate: true }
      )
    }
  },
  setup() {
    const route = useRoute()

    const initZoom = () => {
      mediumZoom('.main img', {
        background: 'var(--vp-c-bg)',
        margin: 24
      })
    }

    onMounted(() => {
      initZoom()
    })

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}

function updateHomePageStyle(value) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }
    `
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = null
  }
}
