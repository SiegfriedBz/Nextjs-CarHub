import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CarType } from '@/types'

type StateType = {
  cars: CarType[]
  favoriteCars: CarType[]
}

type ActionsType = {
  setCars: (cars: CarType[]) => void
  addToFavoriteCars: (car: CarType) => void
  removeFromFavoriteCars: (carId: string) => void
  clearFavoriteCars: () => void
}

type useCarStoreType = StateType & ActionsType

export const useCarStore = create<useCarStoreType>((set) => ({
  cars: [],
  favoriteCars: [],
  setCars: (cars) => set({ cars }),
  addToFavoriteCars: (car) =>
    set((state) => ({ favoriteCars: [...state.favoriteCars, car] })),
  removeFromFavoriteCars: (carId) =>
    set((state) => ({
      favoriteCars: state.favoriteCars.filter((car) => car.id !== carId),
    })),
  clearFavoriteCars: () => set({ favoriteCars: [] }),
}))
