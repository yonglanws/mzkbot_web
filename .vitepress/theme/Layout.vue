<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { toggleDark } from './composables/Dark.js'

const { isDark } = useData()

// 初始化暗黑模式切换动画
toggleDark(isDark)
</script>

<template>
  <DefaultTheme.Layout>
    <!-- 使用默认插槽，保持 VitePress 原有布局 -->
  </DefaultTheme.Layout>
</template>
