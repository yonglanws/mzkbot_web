# 🤖 mzkbot 使用帮助

欢迎使用 mzkbot！以下是详细的功能指令指南。

## 💬 基础对话

- **指令**：`@mzkbot` 后接内容即可进行对话
  - 示例：`@mzkbot 你好`
- **当前人格**：`晓山瑞希` (未来将开放人格切换功能)

> ⚠️ **注意**：在使用高峰期，对话功能可能会出现轻微延迟。

<div align="center">
  <img src="/image/talk.png" alt="对话功能演示" width="60%" style="border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"/>
</div>


## 📅 每日签到

- **指令**：`@mzkbot 签到` 或直接发送 `签到`

> ⚠️ **注意**：高峰期可能出现延迟，请耐心等待。

<div align="center">
  <img src="/image/signin.png" alt="签到功能演示" width="60%" style="border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"/>
</div>

## 🎵 娱乐互动

### 🎶 世界计划猜歌 (PJSK)
- **普通猜歌**：`@mzkbot pjsk猜歌`
- **2倍速猜歌**：`@mzkbot pjsk猜歌1`

<div align="center">
  <img src="/image/pjskgs.png" alt="猜歌演示" width="45%" style="margin: 5px; border-radius: 8px;"/>
  <img src="/image/gshelp.png" alt="猜歌帮助" width="45%" style="margin: 5px; border-radius: 8px;"/>
</div>

### 🎧 网易云点歌
- **标准点歌**：`@mzkbot 点歌 歌名`
- **自然语言点歌**：直接描述你想听的歌（如“我想听那首很火的...”）

<div align="center">
  <img src="/image/song1.png" alt="点歌演示1" width="45%" style="margin: 5px; border-radius: 8px;"/>
  <img src="/image/song2.png" alt="点歌演示2" width="55%" style="margin: 5px; border-radius: 8px;"/>
</div>

### 👍 赞我
- **指令**：`@mzkbot 赞我` 或直接发送 `赞我`

<div align="center">
  <img src="/image/zan.png" alt="赞我功能" width="60%" style="border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"/>
</div>

### 🗣️ 说话 (⚠️ 即将弃用)
- **用法**：`@mzkbot 说话 [内容]`
- **限制**：
  - 仅支持中文。
  - 内容**不可包含空格或换行**（否则会被截断）。

<div align="center">
  <img src="/image/talk2.png" alt="说话功能" width="60%" style="border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"/>
</div>

### 😂 表情包生成
- **直接触发**：无需 `@mzkbot`，直接发送关键词即可（如：`滚 `、`亲 `、` 原神启动`）。
- **查看列表**：`@mzkbot 表情列表`

<div align="center">
  <img src="/image/meme.png" alt="表情包功能" width="60%" style="border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"/>
</div>

## 🌸 SakuraBOT 专项功能 (Project Sekai)

> 💡 **提示**：运行以下 SakuraBOT 指令时，**不需要**添加 `@mzkbot` 前缀，直接发送指令即可。
>
> 🌏 **多服支持**：涉及用户数据的指令，可添加 `tw` 或 `cn` 前缀来触发台服/国服专属功能（默认为日服）。

### 📊 用户数据管理

| 指令 | 说明 | 备注 |
| :--- | :--- | :--- |
| `绑定 ID` | 绑定游戏账号 ID | ID 可在游戏个人信息页查看 |
| `给看` / `不给看` | 开放/关闭他人 `@` 查询你的权限 | 默认为「不给看」模式 |
| `pjskprofile` | 获取个人基本信息卡片 | 类似旧版 Profile |
| `视奸` | 查看当前队伍综合力及构成 | 需对方开启「给看」 |
| `逮捕` | 查询 Expert/Master FC/AP 进度 | **需先上传数据** |

#### ⚠️ 数据上传重要说明
以下高阶功能（如 `rk`, `b39`, `进度` 等）**必须上传游戏数据**才能使用。
1. 请访问数据上传页面：[👉 点我进入上传页面](http://go.mikuware.top/)
2. **日服玩家特权**：可直接复制游戏内的“引继信息”发送给 Bot 自动完成上传（需注意引继码一次性失效，请谨慎操作或重新引继）。

### 📈 高阶数据分析 (需上传数据)

| 指令 | 功能说明 |
| :--- | :--- |
| `rk` | 获取玩家当前排位信息 |
| `b39` | 获取 Rating 最高的 39 首歌曲及总分 (参考用) |
| `pjsk b30` | 获取 Rating 最高的 30 首歌曲及平均分 (算法不同) |
| `pjsk进度ex` | 查询 **Expert** 难度歌曲完成情况 (AP/FC/Clear) |
| `pjsk进度apd` | 查询 **Append** 难度歌曲完成情况 |
| `pjskdetail` | 获取详细信息 (金币/水晶/家具/每日挑战等) <br> *介意隐私者可私聊查询* |
| `pjskcard` | 获取个人卡牌图鉴 <br> *支持 `pjskcard+角色名` 查单角色* |
| `pjskevent` | 获取个人历史最高活动排名记录 (近10次) |


### 🃏 智能卡组推荐

| 指令 | 用法示例 | 说明 |
| :--- | :--- | :--- |
| `组卡` | `组卡 ln 橙` | 指定箱活最佳卡组 Top7 <br> 参数：`[队名] [属性]` |
| `活动组卡` | `活动组卡 龙 hard` | 当前活动最佳卡组 Top7 <br> 默认歌曲：独りんぼエンヴィー |
| `挑战组卡` | `挑战组卡 ick 10th master` | 每日挑战最佳卡组 Top7 <br> 参数：`[角色] [歌曲] [难度]` |
| `最强组卡` | `最强组卡` | 同色同队理论最高分卡组 Top7 <br> 默认歌曲：Expert 独りんぼエンヴィー |

> **队名缩写参考**：`ln` (Leo/need), `mmj` (MORE MORE JUMP!), `vbs` (Vivid BAD SQUAD), `ws` (Wonderlands×Showtime), `25` (25时), `vs` (Virtual Singer)
> **属性参考**：`绿`, `粉`, `橙`, `蓝`, `紫`

### 🔍 查询与工具箱 (无需上传数据)

#### 🏆 活动与排名
- `sk` / `分数线` / `sk线`：查询活动排名或指定档线分数 (WL活动支持加角色名查单榜)。
- `ss`：计算当前档线时速 (20分钟速度 × 3)。
- `wlss`：计算角色单榜档线时速 (日服限定)。
- `查房`：查看本人或目标档线最近1小时活动情况。
- `活动`：查看当前活动信息 (加编号查历史，如 `活动86`)。
- `findevent`：高级活动查询 (`findevent help` 查看用法)。
- `5v5 胜率` / `5v5 分数`：5v5 活动双方胜率及结算分数。
- `tf启动`：5v5 活动中赠送无偿火 (功能维护中)。

#### 🎵 歌曲与谱面
- `pinfo`：查询歌曲信息 (支持花名)。
  - *设置花名*：`pset 新昵称 to 旧昵称`
  - *删除花名*：`pdel 昵称`
- `难度排行`：`难度排行 10 紫` (支持 `fc`/`ap` 前缀)。
- `谱面预览`：`[歌曲名] 谱面预览` (默认 Master，支持 `ex`/`apd` 后缀)。
- `技能预览`：`[歌曲名] 技能预览` (支持 `ex`/`apd` 后缀)。
- `查bpm`：查询指定 BPM 范围的歌曲。
- `查物量`：查询指定物量的歌曲及难度。
- `随个`：`随个 [组合] [level]` (随机指定 Level 歌曲)。
- `葱什么`：随机返回一首歌曲信息。

#### 🃏 卡牌查询
- `findcard` / `查卡`：多条件筛选卡牌 (最多3个参数：队名/角色/稀有度/属性)。
- `card`：`card [编号]` (查看卡面图)。
- `cardinfo`：`cardinfo [编号]` (查看卡牌基础信息)。
- `看`：`看 [角色名]` (随机返回该角色卡图)。

#### 🎮 小游戏
- `pjsk听歌识曲`：随机播放片段，40秒内回答。 (`结束猜曲` 中断)
- `pjsk猜卡面`：随机截取卡面局部，40秒内回答。 (`结束猜卡面` 中断)
- `pjsk抽卡`：
  - `pjsk抽卡` (默认10连图片)
  - `pjskXX连` (文字结果)
  - `pjsk反抽卡` (反转概率，需指定卡池)
- `pjsk表情制作`：`pjsk -h` 查看详细说明。

#### ℹ️ 其他
- `id`：查看当前 QQ 绑定的游戏 ID。
- `charinfo`：查询角色所有花名 (`charset`/`chardel` 可修改)。

> 📢 **自动推送**：每日 **10:00** 自动检测更新并推送至订阅群，活动期间推送结活 Live 通知。