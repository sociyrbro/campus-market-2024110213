<template>
  <section class="page">
    <div class="page-header">
      <h1>团购信息</h1>
      <p>发起或加入团购，与同学一起享受优惠。</p>
    </div>

    <LoadingState
      v-if="loading"
      text="正在加载团购信息..."
    />

    <ErrorState
      v-else-if="error"
      message="团购数据加载失败，请检查 Mock 服务是否正常运行。"
      show-retry
      @retry="loadGroupBuys"
    />

    <EmptyState
      v-else-if="groupBuys.length === 0"
      text="暂无团购记录"
    />

    <div v-else class="list">
      <ItemCard
        v-for="item in groupBuys"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :tag="item.type"
        :location="item.location"
        :time="item.deadline"
      >
        <template #footer>
          <strong>{{ item.currentCount }}/{{ item.targetCount }} 人</strong>
          <span class="status">{{ item.status === 'open' ? '招募中' : '已结束' }}</span>
        </template>
        <template #favorite>
          <button class="favorite-btn" @click="favoriteStore.toggleFavorite({
            id: item.id,
            type: 'groupBuy',
            title: item.title,
            description: item.description,
            location: item.location
          })">
            {{ favoriteStore.isFavorite('groupBuy', item.id) ? '已收藏' : '收藏' }}
          </button>
        </template>
      </ItemCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EmptyState from '../components/EmptyState.vue'
import ErrorState from '../components/ErrorState.vue'
import ItemCard from '../components/ItemCard.vue'
import LoadingState from '../components/LoadingState.vue'
import { getGroupBuys, type GroupBuyItem } from '../api/groupBuy'
import { useFavoriteStore } from '../stores/favorite'

const favoriteStore = useFavoriteStore()
const groupBuys = ref<GroupBuyItem[]>([])
const loading = ref(false)
const error = ref(false)

async function loadGroupBuys() {
  loading.value = true
  error.value = false

  try {
    const res = await getGroupBuys()
    groupBuys.value = res.data
  } catch (err) {
    console.error(err)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadGroupBuys()
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

.status {
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
</style>
