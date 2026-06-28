<template>
  <nav class="app-nav">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/trade">二手交易</RouterLink>
    <RouterLink to="/lost-found">失物招领</RouterLink>
    <RouterLink to="/group-buy">拼单搭子</RouterLink>
    <RouterLink to="/errand">跑腿委托</RouterLink>
    <RouterLink to="/publish">发布</RouterLink>
    <RouterLink to="/message">消息</RouterLink>
    <RouterLink to="/user">我的</RouterLink>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
}

.app-nav a {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  color: #666;
  text-decoration: none;
  font-size: 15px;
  border-radius: 20px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.app-nav a:hover {
  color: #2e7d32;
  background: rgba(46, 125, 50, 0.08);
}

.app-nav a.router-link-active {
  color: #2e7d32;
  background: rgba(46, 125, 50, 0.12);
  font-weight: 500;
}

.app-nav a.router-link-exact-active {
  color: #ffffff;
  background: #4caf50;
}

.app-nav a.router-link-exact-active:hover {
  background: #43a047;
}
</style>