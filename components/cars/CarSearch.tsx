'use client'

import { useRef } from 'react'
import SearchBar from '@/components/searchBar/SearchBar'
import FilterBox from '@/components/searchBar/FilterBox'
import ButtonScrollToTop from '@/components/buttons/ButtonScrollToTop'
import { years, fuels } from '@/constants'

const CarSearch = () => {
  const topRef = useRef<HTMLDivElement>(null)

  const scrollToTop = () => {
    if (!topRef.current) return

    topRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={topRef} className='scroll-mt-52'>
      {/* cars search */}
      <SearchBar />
      {/* cars filter */}
      <div className='flex gap-8'>
        <FilterBox paramName='year' options={years} />
        <FilterBox paramName='fuel_type' options={fuels} />
      </div>

      {/* scrollToTop button */}
      <ButtonScrollToTop scrollToTop={scrollToTop} />
    </div>
  )
}

export default CarSearch
