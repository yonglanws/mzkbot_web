# 网易云点歌 <Badge type="tip" text="推荐" />

## 📖 功能简介

智能点歌系统，支持通过**关键词搜索**或**自然语言描述**来播放网易云音乐上的歌曲，让群聊更有氛围感！

::: info ✨ 核心特性
- 🎵 **海量曲库** — 接入网易云音乐，拥有数百万首歌曲
- 🔍 **智能搜索** — 支持歌名、歌手、专辑等多维度搜索
- 🗣️ **自然语言** — 可用日常语言描述想听的歌曲
- 📻 **语音播放** — 直接在群内播放高质量音频
:::

## 🎯 使用方法

### 方式一：标准点歌

```bash
@mzkbot 点歌 + 歌名
```

#### 使用示例

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-time">16:30</span>
        <span class="chat-name">用户</span>
      </div>
      <div class="chat-bubble">
        @mzkbot 点歌 千本樱
      </div>
    </div>
    <div class="chat-avatar user-avatar"></div>
  </div>
  <div class="chat-message bot">
    <div class="chat-avatar bot-avatar"></div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">mzkbot</span>
        <span class="chat-time">16:30</span>
      </div>
      <div class="chat-bubble">
        【网易云音乐】<br>
        1. 千本桜 - 黒うさP、初音ミク<br>
        2. 千本桜 - 黒うさP、初音ミク<br>
        3. 千本桜 - 黒うさP、初音ミク、鏡音リン、鏡音レン、巡音ルカ、KAITO、MEIKO<br>
        4. Senbonzakura - Lizz Robinett、黒うさP<br>
        5. 千本桜 -F edition- - 黒うさP、初音ミク<br>
        6. 紅一葉 - 黒うさP、巡音ルカ<br>
        7. 千本桜 - 初音ミク、黒うさP
      </div>
    </div>
  </div>
  <div class="chat-message user">
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-time">16:30</span>
        <span class="chat-name">用户</span>
      </div>
      <div class="chat-bubble">
        1
      </div>
    </div>
    <div class="chat-avatar user-avatar"></div>
  </div>
  <div class="chat-message bot">
    <div class="chat-avatar bot-avatar"></div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">mzkbot</span>
        <span class="chat-time">16:30</span>
      </div>
      <div class="chat-bubble">
        [语音] 4'12'' 
      </div>
    </div>
  </div>
</div>

### 方式二：自然语言点歌

```bash
@mzkbot + 自然语言描述
```

#### 使用示例

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-time">16:35</span>
        <span class="chat-name">用户</span>
      </div>
      <div class="chat-bubble">
        @mzkbot 我想听胃弱的...
      </div>
    </div>
    <div class="chat-avatar user-avatar"></div>
  </div>
  <div class="chat-message bot">
    <div class="chat-avatar bot-avatar"></div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">mzkbot</span>
        <span class="chat-time">16:30</span>
      </div>
      <div class="chat-bubble">
        [语音] 4'12'' 
      </div>
    </div>
  </div>
</div>

<div class="chat-container">
  <div class="chat-message user">
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-time">16:40</span>
        <span class="chat-name">用户</span>
      </div>
      <div class="chat-bubble">
        @mzkbot r-906 的歌超好听！mzk 能给我推荐几首吗
      </div>
    </div>
    <div class="chat-avatar user-avatar"></div>
  </div>
  <div class="chat-message bot">
    <div class="chat-avatar bot-avatar"></div>
    <div class="chat-content">
      <div class="chat-header">
        <span class="chat-name">mzkbot</span>
        <span class="chat-time">16:30</span>
      </div>
      <div class="chat-bubble">
        [语音] 4'12'' 
      </div>
    </div>
  </div>
</div>

## 📋 功能对比

| 点歌方式 | 指令格式 | 适用场景 | 示例 |
| :--- | :--- | :--- | :--- |
| 标准点歌 | `@mzkbot 点歌 歌名` | 明确知道歌名 | `@mzkbot 点歌 千本樱` |
| 自然语言 | `@mzkbot + 描述` | 模糊搜索/推荐 | `@mzkbot 我想听悲伤的歌` |

## 💡 使用技巧

::: tip 🎯 点歌小贴士
- **精确搜索**：使用完整歌名可获得更准确的结果
- **歌手筛选**：可以加上歌手名字缩小范围
- **模糊匹配**：不确定歌名时可以用部分歌词或风格描述
- **多选一**：系统会返回多个结果，选择编号即可播放
:::
