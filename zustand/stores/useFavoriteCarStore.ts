import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CarType } from '@/types'

/** FAVORITE CARS */
type FavoriteCarStateType = {
  favoriteCars: CarType[]
}

type FavoriteCarActionsType = {
  addToFavoriteCars: (car: CarType) => void
  removeFromFavoriteCars: (carModel: string, carTransmission: string) => void
  clearFavoriteCars: () => void
}

type useFavoriteCarStoreType = FavoriteCarStateType & FavoriteCarActionsType

const useFavoriteCarStore = create(
  persist<useFavoriteCarStoreType>(
    (set) => ({
      favoriteCars: [],
      addToFavoriteCars: (car) =>
        set((state) => ({ favoriteCars: [car, ...state.favoriteCars] })),
      removeFromFavoriteCars: (carModel, carTransmission) =>
        set((state) => ({
          favoriteCars: state.favoriteCars.filter(
            (car) =>
              car.model !== carModel || car.transmission !== carTransmission
          ),
        })),
      clearFavoriteCars: () => set({ favoriteCars: [] }),
    }),
    { name: 'car-hub-favorites', skipHydration: true }
  )
)

export default useFavoriteCarStore
