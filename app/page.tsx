import CarCatalog from '@/components/CarCatalog'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import type { CarType } from '@/types'

const getData = async () => {
  // fetch all cars - limit to 16
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/cars`
    )

    if (!response.ok) throw new Error('Error fetching cars')

    const data = await response.json()

    return data.cars || []
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  // fetch all cars - limit to 16
  const data: CarType[] = await getData()
  const allCars: CarType[] = data

  return (
    <main className='overflow-hidden'>
      <section>
        <Hero />
      </section>

      <section>
        <h2 className='my-4'>Car Catalog</h2>
        <h3 className='italic opacity-70'>Explore cars you might like</h3>
        {/* SearchBar to update zustand cars state */}
        <SearchBar />
        {/* CarCatalog initialized with allCars & set zustand cars state */}
        <CarCatalog allCars={allCars} />
      </section>
    </main>
  )
}
