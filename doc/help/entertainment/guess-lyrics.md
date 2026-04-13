# PJSK 歌词猜曲

## 使用方法

### 开始歌词猜曲

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-avatar">用户</div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">用户</span>
        <span class="chat-time">22:00</span>
      </div>
      <div class="chat-bubble">
        @mzkbot 歌词猜曲
      </div>
    </div>
  </div>
  <div class="chat-message user">
    <div class="chat-avatar">用户</div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">用户</span>
        <span class="chat-time">22:02</span>
      </div>
      <div class="chat-bubble">
        (用户回答) 1
      </div>
    </div>
  </div>
</div>

### 查看分数

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-avatar">用户</div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">用户</span>
        <span class="chat-time">22:10</span>
      </div>
      <div class="chat-bubble">
        @mzkbot 歌词猜曲分数
      </div>
    </div>
  </div>
</div>

### 查看排行榜

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-avatar">用户</div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">用户</span>
        <span class="chat-time">22:12</span>
      </div>
      <div class="chat-bubble">
        @mzkbot 歌词猜曲排行榜
      </div>
    </div>
  </div>
</div>

### 自定义排行榜名称

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-avatar">用户</div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">用户</span>
        <span class="chat-time">22:15</span>
      </div>
      <div class="chat-bubble">
        @mzkbot 歌词猜曲自定义名称 歌词王
      </div>
    </div>
  </div>
</div>

## 注意事项

::: warning 限制说明
由于部分群聊使用频率过大导致 bot 经常被风控，现已限制其他群聊的娱乐功能使用，请移步至 mzkbot 的娱乐功能专群 **1098198311** 游玩。
:::

## 演示

<img src="/image/gccq.jpg" alt="歌词猜曲演示" style="max-width: 60%; border-radius: 12px; margin-top: 16px;">

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
