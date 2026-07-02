import { defineStore } from 'pinia'
import { getFavoritesByUserId, createFavorite, deleteFavorite, type FavoriteItem } from '../api/favorite'

export interface LocalFavorite {
  id: number
  type: 'trade' | 'lostFound' | 'groupBuy' | 'errand'
  title: string
  description: string
  location?: string
}

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favorites: [] as LocalFavorite[],
    serverFavorites: [] as FavoriteItem[],
  }),

  getters: {
    favoriteCount: (state) => state.favorites.length,
  },

  actions: {
    isFavorite(type: LocalFavorite['type'], id: number) {
      return this.favorites.some((item) => item.type === type && item.id === id)
    },

    async loadFavorites(userId: number) {
      try {
        const res = await getFavoritesByUserId(userId)
        const data = res.data as unknown as FavoriteItem[]
        this.serverFavorites = data
        this.favorites = data.map((item) => ({
          id: item.itemId,
          type: item.type,
          title: item.title,
          description: item.description,
          location: item.location,
        }))
      } catch (error) {
        console.error('加载收藏失败:', error)
        this.favorites = []
        this.serverFavorites = []
      }
    },

    async addFavorite(item: LocalFavorite, userId: number) {
      const exists = this.isFavorite(item.type, item.id)

      if (!exists) {
        try {
          const res = await createFavorite({
            userId,
            itemId: item.id,
            type: item.type,
            title: item.title,
            description: item.description,
            location: item.location,
          })
          const data = res.data as unknown as FavoriteItem
          this.serverFavorites.push(data)
          this.favorites.push(item)
        } catch (error) {
          console.error('添加收藏失败:', error)
        }
      }
    },

    async removeFavorite(type: LocalFavorite['type'], id: number) {
      const serverItem = this.serverFavorites.find(
        (item) => item.type === type && item.itemId === id
      )

      if (serverItem) {
        try {
          await deleteFavorite(serverItem.id)
          this.serverFavorites = this.serverFavorites.filter((item) => item.id !== serverItem.id)
        } catch (error) {
          console.error('删除收藏失败:', error)
        }
      }

      this.favorites = this.favorites.filter((item) => {
        return !(item.type === type && item.id === id)
      })
    },

    async toggleFavorite(item: LocalFavorite, userId: number) {
      if (this.isFavorite(item.type, item.id)) {
        await this.removeFavorite(item.type, item.id)
      } else {
        await this.addFavorite(item, userId)
      }
    },

    clearFavorites() {
      this.favorites = []
      this.serverFavorites = []
    },
  },
})
