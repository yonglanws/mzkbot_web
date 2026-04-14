# 👨‍💻 开发者 & 🙏 鸣谢

<style>
.thank-page-container {
  --thank-bg-primary: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  --thank-bg-card: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  --thank-text-title: #333;
  --thank-text-desc: #666;
  --thank-border: #eaeaea;
  --thank-avatar-border: white;
  --thank-shadow: rgba(0,0,0,0.1);
  --thank-card-shadow: rgba(0,0,0,0.02);
}

.dark .thank-page-container,
[data-theme="dark"] .thank-page-container {
  --thank-bg-primary: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  --thank-bg-card: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  --thank-text-title: #e2e8f0;
  --thank-text-desc: #a0aec0;
  --thank-border: #4a5568;
  --thank-avatar-border: #4a5568;
  --thank-shadow: rgba(0,0,0,0.3);
  --thank-card-shadow: rgba(0,0,0,0.2);
}

@media (prefers-color-scheme: dark) {
  .thank-page-container {
    --thank-bg-primary: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
    --thank-bg-card: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
    --thank-text-title: #e2e8f0;
    --thank-text-desc: #a0aec0;
    --thank-border: #4a5568;
    --thank-avatar-border: #4a5568;
    --thank-shadow: rgba(0,0,0,0.3);
    --thank-card-shadow: rgba(0,0,0,0.2);
  }
}
</style>

### 核心开发
<div class="thank-page-container">
<div style="display: flex; align-items: center; background: var(--thank-bg-primary); padding: 20px; border-radius: 12px; margin: 20px 0; box-shadow: 0 4px 15px var(--thank-shadow);">
  <!-- 如果有头像，可以把 src 换成你的头像链接，例如 https://github.com/yonglanws.png -->
  <img src="/image/ylws.jpg" alt="Avatar" style="width: 64px; height: 64px; border-radius: 50%; margin-right: 20px; border: 3px solid var(--thank-avatar-border); box-shadow: 0 2px 5px var(--thank-shadow);">
  
  <div>
    <h3 style="margin: 0 0 5px 0; color: var(--thank-text-title); font-size: 1.2rem;">慵懒午睡</h3>
    <p style="margin: 0; color: var(--thank-text-desc); font-size: 0.9rem;">
      🛠️ BOT 维护者 | 🎨 网站编写 | 🔧 插件设计
    </p>
    <a href="https://github.com/yonglanws" style="color: var(--vp-c-brand); text-decoration: none; font-size: 0.85rem; margin-top: 5px; display: inline-block;">
      Visit GitHub Profile →
    </a>
  </div>
</div>

---

### 特别鸣谢
本项目离不开以下优秀开源项目与社区的支持：

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-top: 20px;">

  <!-- Napcat -->
  <div style="background: var(--thank-bg-card); border: 1px solid var(--thank-border); border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px var(--thank-card-shadow); transition: transform 0.2s ease, box-shadow 0.2s ease;">
    <div style="display: flex; align-items: center; margin-bottom: 12px;">
      <span style="font-size: 24px; margin-right: 12px;">💻</span>
      <h3 style="margin: 0; font-size: 1.25rem; color: var(--thank-text-title);">Napcat</h3>
    </div>
    <p style="color: var(--thank-text-desc); line-height: 1.6; margin: 0; font-size: 0.95rem;">
      高性能、轻量级的 QQ 机器人框架，为本 Bot 提供了稳定的底层连接支持。
    </p>
    <a href="https://github.com/NapNeko/NapCatQQ" target="_blank" style="display: inline-block; margin-top: 12px; text-decoration: none; color: #6a11cb; font-weight: 500; font-size: 0.9rem;">查看项目 →</a>
  </div>

  <!-- Astrbot -->
  <div style="background: var(--thank-bg-card); border: 1px solid var(--thank-border); border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px var(--thank-card-shadow); transition: transform 0.2s ease, box-shadow 0.2s ease;">
    <div style="display: flex; align-items: center; margin-bottom: 12px;">
      <span style="font-size: 24px; margin-right: 12px;">🧠</span>
      <h3 style="margin: 0; font-size: 1.25rem; color: var(--thank-text-title);">Astrbot</h3>
    </div>
    <p style="color: var(--thank-text-desc); line-height: 1.6; margin: 0; font-size: 0.95rem;">
      强大的 Agentic AI 助手平台。感谢 Astrbot 核心团队及所有插件开发者构建的活跃生态。
    </p>
    <a href="https://github.com/Soulter/AstrBot" target="_blank" style="display: inline-block; margin-top: 12px; text-decoration: none; color: #2575fc; font-weight: 500; font-size: 0.9rem;">查看项目 →</a>
  </div>

  <!-- Reference Bots -->
  <div style="background: var(--thank-bg-card); border: 1px solid var(--thank-border); border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px var(--thank-card-shadow); transition: transform 0.2s ease, box-shadow 0.2s ease;">
    <div style="display: flex; align-items: center; margin-bottom: 12px;">
      <span style="font-size: 24px; margin-right: 12px;">🎵</span>
      <h3 style="margin: 0; font-size: 1.25rem; color: var(--thank-text-title);">HarukiBot</h3>
    </div>
    <p style="color: var(--thank-text-desc); line-height: 1.6; margin: 0; font-size: 0.95rem;">
      优秀的《世界计划 多彩舞台》查询服务BOT
    </p>
    <a href="https://github.com/Team-Haruki" target="_blank" style="display: inline-block; margin-top: 12px; text-decoration: none; color: #fc25d5; font-weight: 500; font-size: 0.9rem;">查看项目 →</a>
  </div>

  <div style="background: var(--thank-bg-card); border: 1px solid var(--thank-border); border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px var(--thank-card-shadow); transition: transform 0.2s ease, box-shadow 0.2s ease;">
    <div style="display: flex; align-items: center; margin-bottom: 12px;">
      <span style="font-size: 24px; margin-right: 12px;">🎨</span>
      <h3 style="margin: 0; font-size: 1.25rem; color: var(--thank-text-title);">HarukiBot NEO</h3>
    </div>
    <p style="color: var(--thank-text-desc); line-height: 1.6; margin: 0; font-size: 0.95rem;">
      优秀的《世界计划 多彩舞台》查询服务BOT
    </p>
    <a href="https://github.com/Team-Haruki" target="_blank" style="display: inline-block; margin-top: 12px; text-decoration: none; color: #25fc98ff; font-weight: 500; font-size: 0.9rem;">查看项目 →</a>
  </div>

</div>
</div>