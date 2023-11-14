'use client'

import { useEffect } from 'react'
import { useCarStore } from '@/zustand/store'
import CarCard from './CarCard'
import type { CarType } from '@/types'

type Props = {
  allCars: CarType[]
}

const CarCatalog = ({ allCars }: Props) => {
  // zustand store
  const { cars, setCars } = useCarStore()

  useEffect(() => {
    setCars(allCars)
  }, [allCars, setCars])

  if (!cars) return <h1>Loading...</h1>

  return (
    <div className='my-4 flex flex-wrap place-content-center gap-4'>
      {cars?.map((car, index) => {
        return <CarCard key={index} car={car} />
      })}
    </div>
  )
}

export default CarCatalog
