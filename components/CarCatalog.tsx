import CarList from './CarList'
import { years, fuels } from '@/constants'
import type { CarType } from '@/types'
import SearchBar from './searchBar/SearchBar'
import FilterBox from './searchBar/FilterBox'

type Props = {
  cars: CarType[]
}

const CarCatalog = ({ cars }: Props) => {
  return (
    <div className='relative'>
      {/* cars search */}
      <SearchBar />
      {/* cars filter */}
      <div className='flex gap-8'>
        <FilterBox paramName='year' options={years} />
        <FilterBox paramName='fuel_type' options={fuels} />
      </div>

      {/* cars list */}
      <CarList cars={cars} />
    </div>
  )
}

export default CarCatalog
