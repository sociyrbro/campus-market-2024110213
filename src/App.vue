<script setup lang="ts"></script>

<template>
  <nav>
    <router-link to="/home">首页 </router-link>
    <router-link to="/list">列表 </router-link>
    <router-link to="/publish">发布 </router-link>
    <router-link to="/message">消息 </router-link>
    <router-link to="/profile">我的</router-link>
  </nav>

  <router-view />
</template>
<style scoped>
.app {
  padding: 32px;
}
</style>