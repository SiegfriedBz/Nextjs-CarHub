import CarSearch from './CarSearch'
import CarList from './CarList'
import { fetchCars } from '@/utils/fetchCars'
import type { SearchParamsProps } from '@/app/page'

async function getData({ searchParams }: SearchParamsProps) {
  try {
    // fetch cars
    const cars = await fetchCars({
      make: searchParams.make || 'Audi',
      model: searchParams.model || '',
      year: searchParams.year || 2021,
      fuel_type: searchParams.fuel_type || '',
      limit: searchParams.limit || 4,
    })

    return cars || []
  } catch (error) {
    console.log(error)
    return []
  }
}

const Catalog = async ({ searchParams }: SearchParamsProps) => {
  const cars = await getData({ searchParams })
  return (
    <div className='relative'>
      <CarSearch />
      <CarList cars={cars} />
    </div>
  )
}

export default Catalog
