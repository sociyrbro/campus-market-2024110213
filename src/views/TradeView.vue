<template>
  <section class="page">
    <div class="page-header">
      <h1>二手交易</h1>
      <p>浏览同学发布的闲置物品，发现校园内的实用好物。</p>
    </div>
<SearchBar
      v-model="keyword"
      placeholder="搜索商品标题、分类、地点或描述"
    />

    <div class="filter-bar">
      <select v-model="categoryFilter" class="filter-select">
        <option value="">全部分类</option>
        <option value="数码配件">数码配件</option>
        <option value="教材资料">教材资料</option>
      </select>
    </div>

    <LoadingState
      v-if="loading"
      text="正在加载二手交易信息..."
    />

    <ErrorState
      v-else-if="error"
      message="二手交易数据加载失败，请检查 Mock 服务是否正常运行。"
      show-retry
      @retry="loadTrades"
    />

    <EmptyState
      v-else-if="filteredTrades.length === 0"
      text="暂无符合条件的二手交易信息"
    />

    <div v-else class="list">
      <ItemCard
        v-for="item in filteredTrades"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :tag="item.category"
        :location="item.location"
        :time="item.publishTime"
      >
        <template #footer>
          <strong>￥{{ item.price }}</strong>
          <span class="condition">{{ item.condition }}</span>
        </template>
      </ItemCard>
    </div>
  </section>
  
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import EmptyState from '../components/EmptyState.vue'
import ErrorState from '../components/ErrorState.vue'
import ItemCard from '../components/ItemCard.vue'
import LoadingState from '../components/LoadingState.vue'
import { getTrades, type TradeItem } from '../api/trade'
import SearchBar from '../components/SearchBar.vue'
const trades = ref<TradeItem[]>([])
const loading = ref(false)
const error = ref(false)

const keyword = ref('')
const categoryFilter = ref('')

const filteredTrades = computed(() => {
  const value = keyword.value.trim()

  return trades.value.filter((item) => {
    const matchCategory = !categoryFilter.value || item.category === categoryFilter.value
    const matchKeyword =
      !value ||
      item.title.includes(value) ||
      item.category.includes(value) ||
      item.location.includes(value) ||
      item.description.includes(value)

    return matchCategory && matchKeyword
  })
})

async function loadTrades() {
  loading.value = true
  error.value = false

  try {
    const res = await getTrades()
    trades.value = res.data
  } catch (err) {
    console.error(err)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadTrades()
})
</script>

<style scoped>
.favorite-btn {
  border: none;
  border-radius: 999px;
  padding: 6px 12px;
  cursor: pointer;
  background: #f3f4f6;
  color: #374151;
}
.page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.page-header {
  padding: 24px;
  border-radius: 16px;
  background: #fff;
}

.page-header h1 {
  margin: 0 0 8px;
}

.page-header p {
  margin: 0;
  color: #6b7280;
}

.list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.condition {
  margin-left: 12px;
  color: #6b7280;
}

.filter-bar {
  display: flex;
  gap: 12px;
}

.filter-select {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  cursor: pointer;
}
</style>