<template>
  <div class="list-container">
    <h1>商品列表</h1>

    <div class="product-list">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <div class="product-image">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">¥{{ product.price }}</p>
          <p class="product-desc">{{ product.description }}</p>
          <div class="product-meta">
            <span class="product-seller">{{ product.seller }}</span>
            <span class="product-time">{{ product.time }}</span>
          </div>
          <router-link :to="`/detail/${product.id}`" class="view-detail">
            查看详情
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    description: '捷安特山地车，9成新，骑行舒适，适合校园代步',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=bicycle%20second%20hand%20campus&image_size=square',
    seller: '张同学',
    time: '2小时前'
  },
  {
    id: 2,
    name: '高等数学教材',
    price: 30,
    description: '同济大学第七版，有少量笔记，附赠习题册',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=math%20textbook%20university&image_size=square',
    seller: '李同学',
    time: '5小时前'
  },
  {
    id: 3,
    name: '考研资料包',
    price: 88,
    description: '包含历年真题、名师讲义、模拟试卷，全套整理',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=study%20materials%20exam%20preparation&image_size=square',
    seller: '王同学',
    time: '昨天'
  },
  {
    id: 4,
    name: '蓝牙耳机',
    price: 65,
    description: '小米Air2，音质清晰，续航持久，配件齐全',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=bluetooth%20earphones%20wireless&image_size=square',
    seller: '赵同学',
    time: '昨天'
  },
  {
    id: 5,
    name: '篮球',
    price: 45,
    description: '斯伯丁篮球，室外专用，手感极佳',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=basketball%20sports%20outdoor&image_size=square',
    seller: '刘同学',
    time: '2天前'
  },
  {
    id: 6,
    name: '笔记本电脑',
    price: 3200,
    description: '联想小新Pro14，i5-12代，16G内存，512G固态',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=laptop%20computer%20lenovo&image_size=square',
    seller: '陈同学',
    time: '3天前'
  }
]
</script>

<style scoped>
.list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.product-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  padding: 16px;
}

.product-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.product-price {
  font-size: 20px;
  font-weight: 700;
  color: #e74c3c;
  margin-bottom: 8px;
}

.product-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  margin-bottom: 12px;
}

.view-detail {
  display: inline-block;
  padding: 8px 16px;
  background: #3498db;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  transition: background 0.2s;
}

.view-detail:hover {
  background: #2980b9;
}
</style>