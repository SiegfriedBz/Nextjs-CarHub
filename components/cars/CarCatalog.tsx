'use client'

import { useRef } from 'react'
import CarList from './CarList'
import SearchBar from '@/components/searchBar/SearchBar'
import FilterBox from '@/components/searchBar/FilterBox'
import { years, fuels } from '@/constants'
import type { CarType } from '@/types'

type Props = {
  cars: CarType[]
}

const CarCatalog = ({ cars }: Props) => {
  const topRef = useRef<HTMLDivElement>(null)

  const scrollToTop = () => {
    if (!topRef.current) return

    topRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={topRef} className='relative scroll-mt-52'>
      {/* cars search */}
      <SearchBar />
      {/* cars filter */}
      <div className='flex gap-8'>
        <FilterBox paramName='year' options={years} />
        <FilterBox paramName='fuel_type' options={fuels} />
      </div>

      {/* cars list */}
      <CarList cars={cars} scrollToTop={scrollToTop} />
    </div>
  )
}

export default CarCatalog
