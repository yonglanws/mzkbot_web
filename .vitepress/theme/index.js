// https://vitepress.dev/guide/custom-theme
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

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
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
