'use client'

import { useEffect, useState } from 'react'
import { useFavoriteCarStore } from '@/zustand/stores'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import type { CarType } from '@/types'

type Props = {
  car: CarType
  isModal?: boolean
}

const ButtonToggleFavorite = ({ car, isModal = false }: Props) => {
  // props
  const { model, transmission } = car
  // state
  const [isFavorite, setIsFavorite] = useState(false)
  // zustand store
  const { favoriteCars, addToFavoriteCars, removeFromFavoriteCars } =
    useFavoriteCarStore()

  useEffect(() => {
    useFavoriteCarStore.persist.rehydrate()
  }, [])

  useEffect(() => {
    const isFavorite = favoriteCars?.find(
      (favoriteCar) =>
        favoriteCar.model === model && favoriteCar.transmission === transmission
    )
    setIsFavorite(!!isFavorite)
  }, [favoriteCars, model, transmission])

  // handlers
  const toggleAddToFavoriteCars = () => {
    return isFavorite
      ? removeFromFavoriteCars(model, transmission)
      : addToFavoriteCars(car)
  }

  return (
    <div
      onClick={toggleAddToFavoriteCars}
      className={`absolute cursor-pointer ${
        isModal ? 'right-1 top-1' : 'right-2 top-2'
      }  flex h-6 w-6 items-center justify-center self-end rounded-full p-2 ring ${
        isFavorite ? 'ring-secondary' : 'ring-gray-400'
      }`}
    >
      <FontAwesomeIcon
        icon={faThumbsUp}
        className={`h-4 w-4 ${isFavorite ? 'text-secondary' : 'text-gray-400'}`}
      />
    </div>
  )
}

export default ButtonToggleFavorite
