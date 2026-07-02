<template>
  <section class="page">
    <div class="page-header">
      <h1>失物招领</h1>
      <p>发布寻物启事或失物信息，帮助同学找回遗失物品。</p>
    </div>

    <SearchBar
      v-model="keyword"
      placeholder="搜索标题、物品名称、地点或描述"
    />

    <div class="filter-bar">
      <select v-model="typeFilter" class="filter-select">
        <option value="">全部类型</option>
        <option value="lost">寻物</option>
        <option value="found">招领</option>
      </select>
    </div>

    <LoadingState
      v-if="loading"
      text="正在加载失物招领信息..."
    />

    <ErrorState
      v-else-if="error"
      message="失物招领数据加载失败，请检查 Mock 服务是否正常运行。"
      show-retry
      @retry="loadLostFounds"
    />

    <EmptyState
      v-else-if="filteredLostFounds.length === 0"
      text="暂无符合条件的失物招领记录"
    />
    
    <div v-else class="list">
      <ItemCard
        v-for="item in filteredLostFounds"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :tag="item.type === 'lost' ? '寻物' : '招领'"
        :location="item.location"
        :time="item.eventTime"
      >
        <template #footer>
          <span class="item-name">{{ item.itemName }}</span>
          <span class="contact">{{ item.contact }}</span>
        </template>
        <template #favorite>
          <button class="favorite-btn" @click="favoriteStore.toggleFavorite({
            id: item.id,
            type: 'lostFound',
            title: item.title,
            description: item.description,
            location: item.location
          })">
            {{ favoriteStore.isFavorite('lostFound', item.id) ? '已收藏' : '收藏' }}
          </button>
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
import SearchBar from '../components/SearchBar.vue'
import { getLostFounds, type LostFoundItem } from '../api/lostFound'
import { useFavoriteStore } from '../stores/favorite'

const favoriteStore = useFavoriteStore()
const lostFounds = ref<LostFoundItem[]>([])
const loading = ref(false)
const error = ref(false)

const keyword = ref('')
const typeFilter = ref('')

const filteredLostFounds = computed(() => {
  const value = keyword.value.trim()

  return lostFounds.value.filter((item) => {
    const matchType = !typeFilter.value || item.type === typeFilter.value
    const matchKeyword =
      !value ||
      item.title.includes(value) ||
      item.itemName.includes(value) ||
      item.location.includes(value) ||
      item.description.includes(value)

    return matchType && matchKeyword
  })
})

async function loadLostFounds() {
  loading.value = true
  error.value = false

  try {
    const res = await getLostFounds()
    lostFounds.value = res.data
  } catch (err) {
    console.error(err)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadLostFounds()
})
</script>

<style scoped>
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

.item-name {
  font-weight: 500;
}

.contact {
  margin-left: 12px;
  color: #6b7280;
}

.favorite-btn {
  border: none;
  border-radius: 999px;
  padding: 6px 12px;
  cursor: pointer;
  background: #f3f4f6;
  color: #374151;
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
