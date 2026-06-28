<template>
  <div class="board-container">
    <h1>数据看板</h1>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📦</div>
        <div class="stat-info">
          <div class="stat-value">128</div>
          <div class="stat-label">在售商品</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-info">
          <div class="stat-value">1,234</div>
          <div class="stat-label">注册用户</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">💰</div>
        <div class="stat-info">
          <div class="stat-value">¥52,680</div>
          <div class="stat-label">交易总额</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-info">
          <div class="stat-value">89</div>
          <div class="stat-label">成交订单</div>
        </div>
      </div>
    </div>

    <div class="recent-activity">
      <h2>最近动态</h2>
      <ul class="activity-list">
        <li class="activity-item">
          <span class="activity-time">10:30</span>
          <span class="activity-content">用户 张同学 发布了 "二手自行车"</span>
        </li>
        <li class="activity-item">
          <span class="activity-time">09:15</span>
          <span class="activity-content">用户 李同学 购买了 "高数课本"</span>
        </li>
        <li class="activity-item">
          <span class="activity-time">昨天</span>
          <span class="activity-content">用户 王同学 发布了 "考研资料"</span>
        </li>
        <li class="activity-item">
          <span class="activity-time">昨天</span>
          <span class="activity-content">用户 赵同学 完成了订单评价</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.board-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.stat-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.stat-icon {
  font-size: 32px;
  background: #f5f5f5;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-info {
  flex: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.recent-activity {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.recent-activity h2 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-time {
  font-size: 13px;
  color: #999;
  min-width: 50px;
}

.activity-content {
  font-size: 14px;
  color: #555;
}
</style>