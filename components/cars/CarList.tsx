'use client'

import { useRouter } from 'next/navigation'
import CarCard from './CarCard'
import ButtonShowMore from '@/components/buttons/ButtonShowMore'
import type { CarType } from '@/types'

type Props = {
  cars: CarType[]
}

const CarList = ({ cars }: Props) => {
  const router = useRouter()

  // handlers
  const handleReset = () => {
    router.push(window.location.pathname, { scroll: false })
  }

  return (
    <div>
      {cars?.length > 0 ? (
        <>
          <div className='my-4 flex flex-wrap place-content-center gap-4'>
            {cars.map((car, index) => {
              return <CarCard key={index} car={car} />
            })}
          </div>
          <ButtonShowMore />
        </>
      ) : (
        <div className='mt-4 flex flex-col items-center'>
          <span>Oooops, no car was found..</span>
          <span>
            <button
              type='reset'
              onClick={handleReset}
              className='underline-gradient-link text-gradient italic'
            >
              Reset
            </button>{' '}
            your filters
          </span>
        </div>
      )}
    </div>
  )
}

export default CarList
