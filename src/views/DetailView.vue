<template>
  <div class="detail-container" v-if="product">
    <button class="back-btn" @click="$router.back()">← 返回列表</button>

    <div class="product-detail">
      <div class="detail-image">
        <img :src="product.image" :alt="product.name" />
      </div>

      <div class="detail-info">
        <h1 class="detail-name">{{ product.name }}</h1>
        <div class="detail-price">¥{{ product.price }}</div>

        <div class="detail-meta">
          <div class="meta-item">
            <span class="meta-label">发布者</span>
            <span class="meta-value">{{ product.seller }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">发布时间</span>
            <span class="meta-value">{{ product.time }}</span>
          </div>
        </div>

        <div class="detail-section">
          <h3>商品描述</h3>
          <p>{{ product.description }}</p>
        </div>

        <div class="detail-section">
          <h3>交易信息</h3>
          <ul class="info-list">
            <li>交易方式：当面交易 / 快递</li>
            <li>交易地点：校内指定地点</li>
            <li>联系方式：私信联系卖家</li>
          </ul>
        </div>

        <button class="contact-btn">联系卖家</button>
      </div>
    </div>
  </div>

  <div class="not-found" v-else>
    <h2>商品不存在</h2>
    <router-link to="/list">返回列表页</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  seller: string
  time: string
}

const products: Product[] = [
  {
    id: 1,
    name: '二手自行车',
    price: 150,
    description: '捷安特山地车，9成新，骑行舒适，适合校园代步。车子保养良好，刹车灵敏，变速流畅。附赠锁和打气筒。',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=bicycle%20second%20hand%20campus&image_size=square',
    seller: '张同学',
    time: '2小时前'
  },
  {
    id: 2,
    name: '高等数学教材',
    price: 30,
    description: '同济大学第七版，有少量笔记，附赠习题册。教材保存完好，无破损，笔记清晰可参考。适合大一新生使用。',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=math%20textbook%20university&image_size=square',
    seller: '李同学',
    time: '5小时前'
  },
  {
    id: 3,
    name: '考研资料包',
    price: 88,
    description: '包含历年真题、名师讲义、模拟试卷，全套整理。资料全面，覆盖数学、英语、政治三科，适合2025考研同学使用。',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=study%20materials%20exam%20preparation&image_size=square',
    seller: '王同学',
    time: '昨天'
  },
  {
    id: 4,
    name: '蓝牙耳机',
    price: 65,
    description: '小米Air2，音质清晰，续航持久，配件齐全。耳机9成新，充电盒完好，单次续航约4小时，总续航约20小时。',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=bluetooth%20earphones%20wireless&image_size=square',
    seller: '赵同学',
    time: '昨天'
  },
  {
    id: 5,
    name: '篮球',
    price: 45,
    description: '斯伯丁篮球，室外专用，手感极佳。球的弹性好，耐磨耐用，适合日常训练和比赛使用。',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=basketball%20sports%20outdoor&image_size=square',
    seller: '刘同学',
    time: '2天前'
  },
  {
    id: 6,
    name: '笔记本电脑',
    price: 3200,
    description: '联想小新Pro14，i5-12代，16G内存，512G固态。电脑使用一年，运行流畅，适合编程、设计和日常办公。附带原装充电器和电脑包。',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=laptop%20computer%20lenovo&image_size=square',
    seller: '陈同学',
    time: '3天前'
  }
]

const route = useRoute()

const product = computed(() => {
  const id = Number(route.params.id)
  return products.find(p => p.id === id)
})
</script>

<style scoped>
.detail-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.back-btn {
  padding: 8px 16px;
  background: #f5f5f5;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
  transition: background 0.2s;
}

.back-btn:hover {
  background: #e0e0e0;
}

.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.detail-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.detail-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-info {
  padding: 24px;
}

.detail-name {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.detail-price {
  font-size: 32px;
  font-weight: 700;
  color: #e74c3c;
  margin-bottom: 24px;
}

.detail-meta {
  display: flex;
  gap: 32px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-label {
  font-size: 13px;
  color: #999;
}

.meta-value {
  font-size: 15px;
  color: #333;
  font-weight: 500;
}

.detail-section {
  margin-bottom: 24px;
}

.detail-section h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.detail-section p {
  font-size: 14px;
  color: #555;
  line-height: 1.8;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  font-size: 14px;
  color: #555;
  padding: 8px 0;
  border-bottom: 1px solid #f5f5f5;
}

.info-list li:last-child {
  border-bottom: none;
}

.contact-btn {
  width: 100%;
  padding: 14px;
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.contact-btn:hover {
  background: #c0392b;
}

.not-found {
  text-align: center;
  padding: 60px 20px;
}

.not-found h2 {
  font-size: 20px;
  color: #666;
  margin-bottom: 16px;
}

.not-found a {
  color: #3498db;
  text-decoration: none;
}

.not-found a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .product-detail {
    grid-template-columns: 1fr;
  }

  .detail-image {
    height: 280px;
  }
}
</style>