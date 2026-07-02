import { defineStore } from 'pinia'
import { getUsers, type User } from '../api/user'
import { useFavoriteStore } from './favorite'

const STORAGE_KEY = 'campus-market-current-user'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    currentUser: null as User | null,
  }),

  getters: {
    displayName: (state) => state.currentUser?.name || '未登录',
    userDescription: (state) => {
      if (!state.currentUser) {
        return '请先登录'
      }

      return `${state.currentUser.college} · ${state.currentUser.grade}`
    },
  },

  actions: {
    async login(username: string, password: string) {
      const res = await getUsers()

      const user = res.data.find((item) => {
        return item.username === username && item.password === password
      })

      if (!user) {
        throw new Error('账号或密码错误')
      }

      this.currentUser = user
      this.isLoggedIn = true
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))

      const favoriteStore = useFavoriteStore()
      await favoriteStore.loadFavorites(user.id as number)
    },

    restoreLogin() {
      const raw = localStorage.getItem(STORAGE_KEY)

      if (!raw) {
        return
      }

      try {
        this.currentUser = JSON.parse(raw)
        this.isLoggedIn = true

        const favoriteStore = useFavoriteStore()
        favoriteStore.loadFavorites((this.currentUser?.id as number) || 0)
      } catch (error) {
        console.error(error)
        localStorage.removeItem(STORAGE_KEY)
      }
    },

    logout() {
      const favoriteStore = useFavoriteStore()
      favoriteStore.clearFavorites()

      this.currentUser = null
      this.isLoggedIn = false
      localStorage.removeItem(STORAGE_KEY)
    },
  },
})