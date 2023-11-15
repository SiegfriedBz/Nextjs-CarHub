import CarCard from './CarCard'
import SearchBar from './SearchBar'
import type { CarType } from '@/types'

type Props = {
  cars: CarType[]
}

const CarCatalog = ({ cars }: Props) => {
  return (
    <div className='relative'>
      {/* cars search */}
      <SearchBar />

      {/* cars list */}
      <div className='my-4 flex flex-wrap place-content-center gap-4'>
        {cars?.map((car, index) => {
          return <CarCard key={index} car={car} />
        })}
      </div>
    </div>
  )
}

export default CarCatalog
