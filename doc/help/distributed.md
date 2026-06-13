# 分布式BOT指令帮助 <Badge type="info" text="v2.1" />

欢迎使用 mzkbot 分布式！以下是详细的功能指令指南。

> 💡 小提示：对于手机端用户，你可以随时点击左上角的 `Menu` 按钮调出侧边栏快速切换界面。

::: info 📌 使用前必读

- 本教程是**分布式BOT的使用教程**，即BOT的发送消息的前缀为**[mzkbot分布式]**，主BOT的使用教程请参考 [主BOT使用教程](/help/)
- 大部分指令需要在群聊中 `#` 后输入
- 高峰期可能出现延迟，请耐心等待

:::

## 详细使用说明

### 基础对话 {#基础对话}

| 功能 | 指令 | 说明 |
| :--- | :--- | :--- |
| 基础对话 | `#+内容` | AI 智能对话 |
| 人格切换 | `#人格切换` | 切换对话人格 |

### 每日签到 {#每日签到}

| 方式 | 指令 |
| :--- | :--- |
| @机器人 | `#签到` |
| 直接发送 | `签到` |

### PJSK 人格测试 {#pjsk-人格测试}

| 方式 | 指令 |
| :--- | :--- |
| @机器人 | `#人格测试` |

### PJSK 表情包制作 {#pjsk-表情包制作}

| 方式 | 指令 |
| :--- | :--- |
| 表情包制作 | `#pjsk/pjsk表情/表情` |
| 随机表情 | `#随机表情+文字` |

### 漂流瓶 {#漂流瓶}

| 功能 | 指令 | 说明 |
| :--- | :--- | :--- |
| 扔漂流瓶 | `#扔漂流瓶` | BOT提示输入内容后发送 |
| 捡漂流瓶 | `#捡漂流瓶` | 随机返回漂流瓶内容 |

::: warning 🔒 内容规范
- 漂流瓶内容需通过 AI 审核
- 禁止发布违规、敏感或广告内容
:::

### 国服车站查询 {#国服车站}

| 功能 | 指令 |
| :--- | :--- |
| 推送最近4min内的房间号 | `#ycm/车站` |

你也可以直接发送 `ycm/车站` 来获取最近4min内的房间号

mzkbot也支持自动识别群内的房间号上传至国服车站

### 舞萌DX状态查询 {#舞萌dx状态查询}

| 功能 | 指令 |
| :--- | :--- |
| 查询状态 | `#舞萌状态` |


## 🚀 快速开始

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-time">10:30</span>
        <span class="chat-name">用户</span>
      </div>
      <div class="chat-bubble">
        # 你好
      </div>
    </div>
    <div class="chat-avatar user-avatar"></div>
  </div>
  <div class="chat-message bot">
    <div class="chat-avatar bot-avatar"></div>
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

### 📋 新手入门路线

1. 🎯 基础入门 — 了解 [基础对话](#基础对话) 和 [每日签到](#每日签到)
2. 🎮 娱乐体验 — 体验 [PJSK 猜歌](#pjsk-猜歌) 等小游戏
3. 🎵 游戏助手 — 使用 [HarukiBot NEO 专项功能](#harukibot-neo-专项功能)
