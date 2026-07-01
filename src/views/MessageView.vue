<template>
  <section class="page">
    <div class="page-header">
      <h1>消息中心</h1>
      <p>查看系统通知、收藏提醒和互动消息。</p>
    </div>

    <div class="message-list">
      <article class="message-card">
        <h3>欢迎使用校园轻集市</h3>
        <p>你可以在这里发布二手商品、失物招领、拼单搭子和跑腿委托。</p>
      </article>

      <article class="message-card">
        <h3>功能提示</h3>
        <p>收藏的信息可以在个人中心中查看。</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.page {
  padding: 24px;
}
.message-card {
  padding: 12px;
  margin-bottom: 12px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #d1d5db;
}
.page-header {
  margin-bottom: 24px;
}
.message-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
</style>