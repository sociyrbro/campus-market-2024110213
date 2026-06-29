<template>
  <section class="page">
    <div class="page-header">
      <h1>失物招领</h1>
      <p>发布寻物启事或失物信息，帮助同学找回遗失物品。</p>
    </div>

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
      </ItemCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ItemCard from '../components/ItemCard.vue'
import { getLostFounds, type LostFoundItem } from '../api/lostFound'

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
</style>
