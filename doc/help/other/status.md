# 服务器状态监控

## 功能说明

实时展示服务器运行状态和 BOT 性能指标。

> 我也不知道有什么用（？）

## 使用方法

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-avatar">用户</div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">用户</span>
        <span class="chat-time">12:00</span>
      </div>
      <div class="chat-bubble">
        @mzkbot 状态
      </div>
    </div>
  </div>
</div>

## 演示

<img src="/image/status.jpg" alt="服务器状态监控演示" style="max-width: 60%; border-radius: 12px; margin-top: 16px;">

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
</style>
