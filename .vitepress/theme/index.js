import { h, watch, onMounted, nextTick } from 'vue'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import nprogress from 'nprogress'
import { useRoute } from 'vitepress'
import './style.css'
import './style/rainbow.css'
import './style/blur.css'
import './style/hidden.css'

let homePageStyle = null
let chatStyleEl = null

const chatCSS = `
.vp-doc .chat-container{max-width:800px;margin:20px auto;padding:16px;background:#f5f5f7;border-radius:16px;box-sizing:border-box}
.vp-doc .chat-message{display:flex!important;margin-bottom:16px!important;align-items:flex-start!important;flex-direction:row!important}
.vp-doc .chat-message.user{flex-direction:row-reverse!important}
.vp-doc .chat-avatar{display:none!important}
.vp-doc .chat-content{max-width:100%!important;min-width:0!important;box-sizing:border-box!important}
.vp-doc .chat-header{display:flex!important;align-items:center!important;margin-bottom:4px!important;font-size:12px!important;color:#8e8e93!important;line-height:1!important}
.vp-doc .chat-message.user .chat-header{flex-direction:row-reverse!important;justify-content:flex-start!important}
.vp-doc .chat-name{font-weight:600!important;margin-right:8px!important;white-space:nowrap!important}
.vp-doc .chat-message.user .chat-name{margin-right:0!important;margin-left:8px!important}
.vp-doc .chat-time{font-size:11px!important;white-space:nowrap!important}
.vp-doc .chat-bubble{padding:12px 16px!important;border-radius:18px!important;font-size:14px!important;line-height:1.5!important;word-wrap:break-word!important;background:#007aff!important;color:white!important;border-bottom-left-radius:18px!important;border-bottom-right-radius:4px!important;display:inline-block!important;box-sizing:border-box!important}
.vp-doc .chat-message.bot .chat-bubble{background:white!important;color:#1c1c1e!important;border-bottom-left-radius:4px!important;border-bottom-right-radius:18px!important;box-shadow:0 1px 2px rgba(0,0,0,0.08)!important}
.vp-doc .chat-bubble img{max-width:200px!important;height:auto!important;border-radius:8px!important;margin-top:8px!important;display:block!important}
.vp-doc .chat-bubble code{background:rgba(255,255,255,0.2)!important;padding:2px 6px!important;border-radius:4px!important;font-family:'SF Mono',Monaco,monospace!important;font-size:13px!important}
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
