<template>
  <section class="page">
    <div class="page-header">
      <h1>代跑代办</h1>
      <p>发布或接取跑腿任务，互帮互助便捷校园生活。</p>
    </div>

    <LoadingState
      v-if="loading"
      text="正在加载代跑代办信息..."
    />

    <ErrorState
      v-else-if="error"
      message="代跑代办数据加载失败，请检查 Mock 服务是否正常运行。"
      show-retry
      @retry="loadErrands"
    />

    <EmptyState
      v-else-if="errands.length === 0"
      text="暂无代跑代办记录"
    />

    <div v-else class="list">
      <ItemCard
        v-for="item in errands"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :tag="item.taskType"
        :location="item.to"
        :time="item.deadline"
      >
        <template #footer>
          <strong>￥{{ item.reward }}</strong>
          <span class="route">{{ item.from }} → {{ item.to }}</span>
        </template>
        <template #favorite>
          <button class="favorite-btn" @click="favoriteStore.toggleFavorite({
            id: item.id,
            type: 'errand',
            title: item.title,
            description: item.description,
            location: item.to
          })">
            {{ favoriteStore.isFavorite('errand', item.id) ? '已收藏' : '收藏' }}
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
import { getErrands, type ErrandItem } from '../api/errand'
import { useFavoriteStore } from '../stores/favorite'

const favoriteStore = useFavoriteStore()
const errands = ref<ErrandItem[]>([])
const loading = ref(false)
const error = ref(false)

async function loadErrands() {
  loading.value = true
  error.value = false

  try {
    const res = await getErrands()
    errands.value = res.data
  } catch (err) {
    console.error(err)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadErrands()
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

.route {
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
