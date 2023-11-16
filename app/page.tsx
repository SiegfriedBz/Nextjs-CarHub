import CarCatalog from '@/components/CarCatalog'
import Hero from '@/components/Hero'
import { fetchCars } from '@/utils/fetchCars'

type Props = {
  searchParams: {
    make?: string
    model?: string
    year?: number
    fuel_type?: string
    limit?: number
  }
}

export default async function Home({ searchParams }: Props) {
  const cars =
    (await fetchCars({
      make: searchParams.make || 'Audi',
      model: searchParams.model || '',
      year: searchParams.year || 2021,
      fuel_type: searchParams.fuel_type || '',
      limit: searchParams.limit || 16,
    })) || []

  return (
    <main className='overflow-hidden'>
      <section>
        <Hero />
      </section>

      <section>
        <h2 className='text-gradient my-4'>Car Catalog</h2>
        <h3 className='text-gradient italic opacity-70'>
          Explore cars you might like
        </h3>
        <CarCatalog cars={cars} />
      </section>
    </main>
  )
}
