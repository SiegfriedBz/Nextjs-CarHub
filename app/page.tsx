export const dynamic = 'force-dynamic'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/authOptions'
import Hero from '@/components/Hero'
import CarCatalog from '@/components/cars/CarCatalog'
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

async function getData({ searchParams }: Props) {
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

export default async function Home({ searchParams }: Props) {
  const cars = await getData({ searchParams })
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <main className='overflow-hidden'>
      <section id='hero' className='section-top flex flex-col justify-center'>
        <Hero />
      </section>

      <section id='catalog' className='scroll-mt-24'>
        <h2 className='text-gradient my-4'>Car Catalog</h2>
        <h3 className='text-gradient italic opacity-70'>
          Explore cars you might like
        </h3>
        <CarCatalog cars={cars} />
      </section>
    </main>
  )
}
