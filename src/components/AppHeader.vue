<template>
  <header class="app-header">
    
    <div class="header-left">
      <div class="logo">
        <span class="logo-icon">🎓</span>
        <span class="logo-text">校园市集</span>
      </div>
    </div>

    <div class="header-center">
      <AppNav />
    </div>

    <div class="header-right">
      <el-button circle class="header-btn">
        <el-icon><Setting /></el-icon>
      </el-button>
    </div>
    <div class="user-mini">
      <span>{{ userStore.displayName }}</span>
    </div>
  </header>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppNav from './AppNav.vue'

const searchQuery = ref('')
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.header-left {
  flex: 0 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 24px;
}

.logo-text {
  font-size: 18px;
  font-weight: 600;
  color: #2e7d32;
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.header-right {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-input {
  width: 240px;
}

.header-btn {
  color: #666;
}

.header-btn:hover {
  color: #2e7d32;
}


.brand {
  display: flex;
  align-items: baseline;
  gap: 12px;
}
.slogan {
  font-size: 13px;
  color: #6b7280;
}
.user-mini {
  font-size: 14px;
  color: #374151;
}
</style>