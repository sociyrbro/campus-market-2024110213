<template>
  <section class="page">
    <div class="page-header">
      <h1>失物招领</h1>
      <p>发布寻物启事或失物信息，帮助同学找回遗失物品。</p>
    </div>

    <EmptyState v-if="lostFounds.length === 0" text="暂无失物招领记录" />

    <div class="list">
      <ItemCard
        v-for="item in lostFounds"
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
import { onMounted, ref } from 'vue'
import ItemCard from '../components/ItemCard.vue'
import EmptyState from '../components/EmptyState.vue'
import { getLostFounds, type LostFoundItem } from '../api/lostFound'
import { useFavoriteStore } from '../stores/favorite'

const favoriteStore = useFavoriteStore()
const lostFounds = ref<LostFoundItem[]>([])

onMounted(async () => {
  const res = await getLostFounds()
  lostFounds.value = res.data
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
</style>
