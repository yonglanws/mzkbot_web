# 📂 开源项目 <Badge type="info" text="GPLv3" />

本 Bot 的部分核心功能模块已基于 **GPLv3 协议** 开源。欢迎开发者查阅源码、二次开发或集成至自己的项目中。

::: tip ⚠️ 开源协议须知
在使用或修改代码时，请务必保留原作者的版权信息及声明。
:::

## 🌐 前端

| 项目名称                                                     | 功能说明          | 技术栈              |
| :------------------------------------------------------- | :------------ | :--------------- |
| [mzkbot 官方网站](https://github.com/yonglanws/mzkbot_web) | Bot 配套的前端展示页面 | VitePress + Vue3 |

## 🤖 后端

| 项目名称                                                     | 功能说明          | 技术栈              |
| :------------------------------------------------------- | :------------ | :--------------- |
| [MySekaiStoryteller-API](https://github.com/yonglanws/MySekaiStoryteller-API) | Project SEKAI 风格无头 Live2D 剧情视频渲染API框架 | TypeScript + Node.js |


## 🧩 插件

| 项目名称                                                                       | 功能说明                      | 技术栈    |
| :------------------------------------------------------------------------- | :------------------------ | :----- |
| [PJSK 猜歌](https://github.com/yonglanws/astrbot_plugin_pjsk_guess_song)    | Project SEKAI 猜歌游戏 | Python |
| [PJSK 猜卡面](https://github.com/yonglanws/astrbot_plugin_pjsk_guess_card)    | Project SEKAI 角色卡片识别与猜测游戏 | Python |
| [PJSK 猜曲绘](https://github.com/yonglanws/astrbot_plugin_pjsk_guess_jacket)  | 根据歌曲封面猜测曲目                | Python |
| [PJSK 歌词猜曲](https://github.com/yonglanws/astrbot_plugin_pjsk_guess_lyrics) | 通过歌词片段互动猜歌                | Python |
| [AI 智能问答](https://github.com/yonglanws/astrbot_plugin_askyou)              | 基于模式匹配的 AI 问答插件           | Python |
| [每日签到](https://github.com/yonglanws/astrbot_plugin_signin)                 | 用户签到系统                    | Python |
| [PJSK人格测试](https://github.com/yonglanws/astrbot_plugin_pjsk_role_test)                 | 人格测试插件                    | Python |
| [PJSK Wordle 猜曲](https://github.com/yonglanws/astrbot_plugin_pjsk_wordle) | 世界计划猜曲 Wordle 游戏 | Python |
| [MSST 视频生成](https://github.com/yonglanws/astrbot_plugin_msst) | 配合 MySekaiStoryteller-API，AI 生成剧本并渲染 Live2D 剧情视频发送到群聊 | Python |
| [防重复响应](https://github.com/yonglanws/astrbot_plugin_block_duplicate_messages) | 多 Bot 同群时防止重复响应同一指令，避免刷屏 | Python |
| [表情图库](https://github.com/yonglanws/astrbot_plugin_gallery) | 群聊表情图库分享插件（移植自 Lunabot） | Python |
| [自动改群名](https://github.com/yonglanws/astrbot_plugin_change_group_name) | 识别消息中的五位数，自动将其作为白名单群聊的群名 ID 前缀 | Python |
| [超长回复重试](https://github.com/yonglanws/astrbot_plugin_error_restart_chat) | 限制 LLM 回复长度，超限时自动按原配置重新生成，避免异常回复污染对话记录 | Python |

## 快速开始

```bash
# 克隆项目
git clone https://github.com/yonglanws/astrbot_plugin_pjsk_guess_card.git

# 安装依赖
pip install -r requirements.txt

# 配置并运行
# 请参考各项目的 README 文档
```

## 📄 许可证

本项目采用 **GNU General Public License v3.0** 许可证。

- ✅ 商业使用
- ✅ 修改和分发
- ✅ 私人使用
- ⚠️ 必须包含版权声明
- ⚠️ 必须披露修改源码
- ⚠️ 相同许可证分发

