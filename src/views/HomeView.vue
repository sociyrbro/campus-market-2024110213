<template>
  <main class="home-page">
    <section class="hero">
      <div class="hero-content">
        <h1>校园轻集市</h1>
        <p>轻量、可信、面向校园生活</p>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-value">1000+</span>
            <span class="stat-label">活跃用户</span>
          </div>
          <div class="stat">
            <span class="stat-value">5000+</span>
            <span class="stat-label">交易信息</span>
          </div>
          <div class="stat">
            <span class="stat-value">98%</span>
            <span class="stat-label">好评率</span>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20campus%20life%20illustration%20with%20students%20exchanging%20goods%20green%20fresh%20style%20minimalist%20flat%20design&image_size=landscape_16_9" alt="校园生活" />
      </div>
    </section>

    <section class="features">
      <h2>四大核心功能</h2>
      <div class="feature-grid">
        <RouterLink to="/trade" class="feature-card">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <h3>二手交易</h3>
          <p>发布闲置物品，发现校园好物，环保又实惠</p>
        </RouterLink>

        <RouterLink to="/lost-found" class="feature-card">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h3>失物招领</h3>
          <p>发布寻物启事或失物信息，帮助同学找回遗失物品</p>
        </RouterLink>

        <RouterLink to="/group-buy" class="feature-card">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>拼单搭子</h3>
          <p>发起或加入团购，与同学一起享受优惠折扣</p>
        </RouterLink>

        <RouterLink to="/errand" class="feature-card">
          <div class="feature-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16v-2"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h3>跑腿委托</h3>
          <p>发布或接取跑腿任务，互帮互助便捷校园生活</p>
        </RouterLink>
      </div>
    </section>

    <section class="quick-actions">
      <h2>快捷入口</h2>
      <div class="action-grid">
        <div class="action-card" @click="$router.push('/publish')">
          <div class="action-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <span>发布信息</span>
        </div>
        <div class="action-card" @click="$router.push('/user')">
          <div class="action-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <span>个人中心</span>
        </div>
        <div class="action-card" @click="$router.push('/trade')">
          <div class="action-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="16 21l-5-5-4 4-3-3-4 4"></line>
              <circle cx="16" cy="5" r="1"></circle>
            </svg>
          </div>
          <span>全部商品</span>
        </div>
        <div class="action-card" @click="$router.push('/message')">
          <div class="action-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <span>消息中心</span>
        </div>
      </div>
    </section>

    <section class="tips">
      <div class="tip-card">
        <h3>💡 温馨提示</h3>
        <ul>
          <li>交易时请选择校园内公共场所，确保人身财产安全</li>
          <li>建议当面验货，确认商品状态后再进行交易</li>
          <li>如发现违规信息，请及时举报</li>
        </ul>
      </div>
    </section>

    <footer class="footer">
      <p>校园轻集市 © 2024 - 让校园生活更便捷</p>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 40px;
  border-radius: 20px;
  background: linear-gradient(135deg, #e8f5e9 0%, #fff 100%);
  align-items: center;
}

.hero-content h1 {
  margin: 0 0 12px;
  font-size: 36px;
  font-weight: 700;
}

.hero-content p {
  margin: 0 0 24px;
  color: #6b7280;
  font-size: 18px;
}

.hero-stats {
  display: flex;
  gap: 32px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
  color: #4caf50;
}

.stat-label {
  font-size: 14px;
  color: #6b7280;
}

.hero-image img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 12px;
}

.features h2 {
  margin: 0 0 20px;
  font-size: 24px;
  text-align: center;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #e5e7eb;
  text-decoration: none;
  transition: all 0.2s;
}

.feature-card:hover {
  border-color: #4caf50;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.1);
}

.feature-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: #e8f5e9;
  color: #4caf50;
}

.feature-card h3 {
  margin: 0;
  font-size: 18px;
}

.feature-card p {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.6;
}

.quick-actions h2 {
  margin: 0 0 20px;
  font-size: 24px;
  text-align: center;
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.action-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.2s;
}

.action-card:hover {
  border-color: #4caf50;
  background: #e8f5e9;
}

.action-icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  color: #4caf50;
}

.action-card span {
  font-size: 14px;
  color: #374151;
}

.tips {
  padding: 0;
}

.tip-card {
  padding: 24px;
  border-radius: 16px;
  background: #f3f4f6;
}

.tip-card h3 {
  margin: 0 0 12px;
  font-size: 18px;
}

.tip-card ul {
  margin: 0;
  padding-left: 20px;
}

.tip-card li {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.8;
}

.footer {
  padding: 24px;
  text-align: center;
  color: #6b7280;
  font-size: 14px;
}
</style>
