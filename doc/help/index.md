# 指令帮助

欢迎使用 mzkbot！以下是详细的功能指令指南。

对于手机端的用户，你可以随时点击左上角的Menu按钮切换界面。

::: tip 注意
- 大部分指令需要在群聊中 `@mzkbot` 后输入
- HarukiBot 专项功能 **不需要** `@mzkbot` 前缀
- 高峰期可能出现延迟，请耐心等待
:::

## 功能分类

### 基础功能

- [基础对话](./basic/chat) — AI 智能对话功能
- [每日签到](./basic/signin) — 每日签到获取奖励

### 娱乐互动

- [PJSK 猜歌](./entertainment/guess-song) — 根据音频猜歌曲
- [PJSK 猜卡面](./entertainment/guess-card) — 根据卡面局部猜角色
- [PJSK 猜曲绘](./entertainment/guess-jacket) — 根据曲绘局部猜歌曲
- [PJSK 歌词猜曲](./entertainment/guess-lyrics) — 根据歌词猜歌曲
- [网易云点歌](./entertainment/music) — 智能点歌系统

::: warning 娱乐功能限制
由于部分群聊使用频率过大导致 bot 经常被风控，现已限制其他群聊的娱乐功能使用，请移步至 mzkbot 的娱乐功能专群 **1098198311** 游玩。
:::

### 其他功能

- [流媒体解析](./other/video) — 支持 B 站、抖音、小红书等平台
- [入群/退群提示](./other/group) — 自动欢迎和送别
- [服务器状态监控](./other/status) — 系统运行状态

### HarukiBot 专项功能

::: info 使用须知
- 运行以下 HarukiBot 指令时，**不需要**添加 `@mzkbot` 前缀，直接发送指令即可
- **多服支持**：涉及用户数据的指令，可添加 `en`/`tw`/`kr`/`cn` 前缀来触发国际服/台服/韩服/国服专属功能（默认为日服）
:::

- [使用指南](./haruki/) — HarukiBot 完整使用指南

### HarukiBot NEO 专项功能

::: info 使用须知
- **必须带前缀**：从 HarukiBot NEO 版本起，所有指令必须以 `/` 开头（例如 `/绑定`）
- **公测阶段**：Bot 可能存在 Bug，如有问题请联系 HarukiBot 分布式 Bot 主反馈
:::

- [使用指南](./haruki-neo/) — HarukiBot NEO 完整使用指南

## 快速开始

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-avatar">用户</div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">用户</span>
        <span class="chat-time">10:30</span>
      </div>
      <div class="chat-bubble">
        @mzkbot 你好
      </div>
    </div>
  </div>
  <div class="chat-message bot">
    <div class="chat-avatar">Bot</div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">mzkbot</span>
        <span class="chat-time">10:30</span>
      </div>
      <div class="chat-bubble">
        呀吼～已经快 24 点了还没睡呀，难道是还在努力敲代码？正好我也准备在 Nightcord 上最后修一下视频呢，一起加油嘛～♪
      </div>
    </div>
  </div>
</div>

1. **新手入门** — 了解 [基础对话](./basic/chat) 和 [每日签到](./basic/signin)
2. **娱乐功能** — 体验 [PJSK 猜歌](./entertainment/guess-song) 等小游戏
3. **游戏助手** — 使用 HarukiBot 专项功能查询游戏数据

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
