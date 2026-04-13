# 基础对话

## 使用方法

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-avatar">用户</div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">用户</span>
        <span class="chat-time">09:30</span>
      </div>
      <div class="chat-bubble">
        @mzkbot 你好
      </div>
    </div>
  </div>
</div>

**使用方法：** 在群聊中 `@mzkbot` 后接内容即可进行对话

## 功能说明

接入 AI 模型，为您提供真实的情绪价值与陪伴。

## 注意事项

::: tip 注意
在使用高峰期，对话功能可能会出现较为严重的延迟，请耐心等待。
:::


<style>
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

.chat-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #34c759;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
  margin-right: 12px;
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

.chat-name {
  font-weight: 600;
  margin-right: 8px;
}

.chat-time {
  font-size: 11px;
}

.chat-message.user {
  justify-content: flex-start;
}

.chat-bubble {
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  background: #007aff;
  color: white;
  border-bottom-left-radius: 4px;
}

.chat-bubble code {
  background: rgba(255,255,255,0.2);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, monospace;
  font-size: 13px;
}
</style>
