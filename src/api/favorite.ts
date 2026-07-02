import http from './http'

export interface FavoriteItem {
  id: number
  userId: number
  itemId: number
  type: 'trade' | 'lostFound' | 'groupBuy' | 'errand'
  title: string
  description: string
  location?: string
}

export function getFavoritesByUserId(userId: number) {
  return http.get<{ data: FavoriteItem[] }>('/favorites', {
    params: { userId },
  })
}

export function createFavorite(data: Omit<FavoriteItem, 'id'>) {
  return http.post<{ data: FavoriteItem }>('/favorites', data)
}

export function deleteFavorite(id: number) {
  return http.delete(`/favorites/${id}`)
}

export function getFavoriteByUserAndItem(userId: number, itemId: number, type: FavoriteItem['type']) {
  return http.get<{ data: FavoriteItem[] }>('/favorites', {
    params: { userId, itemId, type },
  })
}
