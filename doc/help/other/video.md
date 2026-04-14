# 流媒体解析 <Badge type="info" text="实用" />

## 📖 功能简介

自动识别并解析主流平台的**视频/音频链接**，直接在群聊中播放或下载，无需跳转外部应用。

::: info ✨ 支持平台
覆盖国内外主流社交媒体和视频平台，满足多样化需求。
:::

## 🎯 支持平台列表

| 平台 | 类型 | 支持状态 |
| :--- | :--- | :--- |
| B 站 (bilibili) | 视频 | ✅ 完美支持 |
| 抖音 | 短视频 | ✅ 完美支持 |
| 快手 | 短视频 | ✅ 完美支持 |
| 小红书 | 图文/视频 | ✅ 完美支持 |
| 微博 | 视频 | ✅ 完美支持 |
| 小黑盒 | 游戏 | ✅ 完美支持 |
| 推特 (Twitter) | 视频 | ⚠️ 可能被墙 |

## 💡 使用方法

### 基本操作

```bash
# 直接发送链接即可自动解析
https://b23.tv/xxxxx 这个视频太好笑了

# 或单独发送链接
https://www.douyin.com/video/xxxxx
```

> **无需** `@mzkbot`，BOT 会自动识别消息中的链接并解析！

## 🎮 使用演示

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-time">14:20</span>
        <span class="chat-name">用户</span>
      </div>
      <div class="chat-bubble">
        https://b23.tv/xxxxx 这个视频太好笑了
      </div>
    </div>
    <div class="chat-avatar user-avatar"></div>
  </div>
  <div class="chat-message bot">
    <div class="chat-avatar bot-avatar"></div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">mzkbot</span>
        <span class="chat-time">14:20</span>
      </div>
      <div class="chat-bubble">
        📺 视频解析成功<br>
        标题: [视频标题]<br>
        UP主: [UP主名称]<br>
        时长: 3:45
      </div>
    </div>
  </div>
</div>

## ⚙️ 功能特性

| 特性 | 说明 |
| :--- | :--- |
| 自动识别 | 智能检测消息中的链接 |
| 多格式支持 | 支持短视频、长视频、音频等 |
| 无需指令 | 发送即解析，零学习成本 |
| 高成功率 | 主流平台解析率 > 95% |

## ⚠️ 注意事项

::: warning ⏰ 解析时间
- 短视频通常 **1-3秒** 内完成解析
- 长视频可能需要 **5-10秒**
- 部分特殊链接可能失败，建议使用原链接
:::

::: tip 💡 使用建议
- 推荐使用**原链接**而非短链（如 b23.tv）
- 如遇解析失败，可尝试**重新发送**
- 部分平台可能有**地区限制**
:::
