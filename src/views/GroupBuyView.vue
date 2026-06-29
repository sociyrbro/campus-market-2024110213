<template>
  <section class="page">
    <div class="page-header">
      <h1>团购信息</h1>
      <p>发起或加入团购，与同学一起享受优惠。</p>
    </div>

   
    <div class="list">
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
      </ItemCard>
    </div>
  </section>
  <EmptyState v-if="groupBuys.length === 0" text="暂无团购记录" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ItemCard from '../components/ItemCard.vue'
import EmptyState from '../components/EmptyState.vue'
import { getGroupBuys, type GroupBuyItem } from '../api/groupBuy'

const groupBuys = ref<GroupBuyItem[]>([])

onMounted(async () => {
  const res = await getGroupBuys()
  groupBuys.value = res.data
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
</style>
