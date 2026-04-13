---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "mzkbot"
  text: "多功能的世界计划\nQQ BOT"
  image:
    src: https://bot-assets.xszq.xyz/meme/pjsk/Mizuki/Mizuki_03.webp
    alt: 背景图
  actions:
    - theme: brand
      text: 如何使用
      link: /help
    - theme: alt
      text: 使用规范
      link: /guize
    - theme: alt
      text: 交流群
      link: /how2use

features:
  - title: 交流互动💬
    details: 接入AI模型，为您提供真实的情绪价值与陪伴
  - title: 音游功能🎵
    details: PJSK实时查分查榜、查卡面等，一站式音游助手
  - title: 内置小游戏🤖
    details: 包含PJSK猜歌、猜卡面等，以后再也不怕冷群啦！
---

<style>
/* 对话框样式 - 简约现代 */
.chat-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 16px;
  background: #f5f5f7;
  border-radius: 16px;
}

.chat-message {
  display: flex;
  margin-bottom: 16px;
  align-items: flex-start;
}

.chat-message.user {
  flex-direction: row-reverse;
}

.chat-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #007aff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
  margin: 0 12px;
}

.chat-message.user .chat-avatar {
  background: #34c759;
}

.chat-content {
  max-width: 70%;
}

.chat-header {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  font-size: 12px;
  color: #8e8e93;
}

.chat-message.user .chat-header {
  flex-direction: row-reverse;
}

.chat-name {
  font-weight: 600;
  margin-right: 8px;
}

.chat-message.user .chat-name {
  margin-right: 0;
  margin-left: 8px;
}

.chat-time {
  font-size: 11px;
}

.chat-bubble {
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
}

.chat-message.bot .chat-bubble {
  background: white;
  color: #1c1c1e;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.08);
}

.chat-message.user .chat-bubble {
  background: #007aff;
  color: white;
  border-bottom-right-radius: 4px;
}

.chat-bubble img {
  max-width: 100%;
  border-radius: 8px;
  margin-top: 8px;
}

.chat-bubble code {
  background: rgba(0,0,0,0.06);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, monospace;
  font-size: 13px;
}

.chat-message.user .chat-bubble code {
  background: rgba(255,255,255,0.2);
}

/* 指令标签样式 */
.cmd-tag {
  display: inline-block;
  background: #007aff;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 500;
  font-family: 'SF Mono', Monaco, monospace;
  margin: 4px 0;
}

/* 提示框样式 */
.info-box {
  background: #f5f5f7;
  border-left: 4px solid #007aff;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
}

.warning-box {
  background: #fff3cd;
  border-left: 4px solid #ff9500;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
}
</style>
