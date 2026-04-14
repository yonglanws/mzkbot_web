import { nextTick, provide } from 'vue'

/**
 * 检测是否支持视图过渡动画
 * @returns {boolean}
 */
const enableTransitions = () => {
  return 'startViewTransition' in document && 
         window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

/**
 * 获取 VitePress 外观切换按钮的中心坐标
 * VitePress v2 使用 .VPSwitchAppearance 作为外观切换按钮的类名
 * @returns {{x: number, y: number}}
 */
const getAppearanceButtonCenter = () => {
  // VitePress v2 外观切换按钮的选择器（优先级从高到低）
  const buttonSelectors = [
    '.VPSwitchAppearance',
    '.VPNavBarAppearance button',
    '.VPNavBarExtra button[aria-label*="外观"]',
    'button.VPSwitchAppearance',
    '[class*="SwitchAppearance"]',
    '.VPNavScreenAppearance button'
  ]
  
  let button = null
  
  // 尝试通过选择器找到按钮
  for (const selector of buttonSelectors) {
    try {
      button = document.querySelector(selector)
      if (button) {
        console.log('[Dark Mode] Found button with selector:', selector)
        break
      }
    } catch (e) {
      // 忽略无效选择器错误
    }
  }
  
  // 如果找不到，尝试通过 aria-label 或 title 属性查找
  if (!button) {
    const allButtons = document.querySelectorAll('button')
    for (const btn of allButtons) {
      const ariaLabel = (btn.getAttribute('aria-label') || '').toLowerCase()
      const title = (btn.getAttribute('title') || '').toLowerCase()
      const className = (btn.className || '').toLowerCase()
      
      if (ariaLabel.includes('外观') || ariaLabel.includes('theme') || 
          ariaLabel.includes('dark') || ariaLabel.includes('light') ||
          title.includes('外观') || title.includes('theme') ||
          className.includes('appearance') || className.includes('switch')) {
        button = btn
        console.log('[Dark Mode] Found button by attributes:', ariaLabel || title || className)
        break
      }
    }
  }
  
  // 如果还是找不到，返回视口右上角作为 fallback（导航栏通常位置）
  if (!button) {
    console.log('[Dark Mode] Button not found, using fallback position')
    return {
      x: window.innerWidth - 60,
      y: 60
    }
  }
  
  // 获取按钮的位置信息
  const rect = button.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  console.log('[Dark Mode] Button center:', { x: centerX, y: centerY, rect })
  
  return {
    x: centerX,
    y: centerY
  }
}

/**
 * 切换暗黑模式并应用丝滑动画
 * @param {Ref<boolean>} isDark - VitePress 的暗黑模式状态
 */
export const toggleDark = (isDark) => {
  provide('toggle-appearance', async (event) => {
    // 如果不支持动画或用户偏好减少动画，直接切换
    if (!enableTransitions()) {
      isDark.value = !isDark.value
      return
    }
    
    // 获取按钮中心点坐标
    const center = getAppearanceButtonCenter()
    
    // 设置动画起始点（按钮中心）
    document.documentElement.style.setProperty('--darkX', `${center.x}px`)
    document.documentElement.style.setProperty('--darkY', `${center.y}px`)
    
    console.log('[Dark Mode] Starting transition from:', center)
    
    // 使用原生视图转换 API 实现丝滑动画
    const transition = document.startViewTransition(async () => {
      isDark.value = !isDark.value
      await nextTick()
    })
    
    await transition.ready
  })
}

/**
 * 自动检测系统主题偏好
 * @returns {boolean}
 */
export const detectSystemTheme = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * 监听系统主题变化
 * @param {Function} callback
 */
export const watchSystemTheme = (callback) => {
  if (typeof window === 'undefined') return
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    callback(e.matches)
  })
}
