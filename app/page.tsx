import { Suspense } from 'react'
import Hero from '@/components/Hero'
import Catalog from '@/components/cars/Catalog'
import LoadingPulse from '@/components/LoadingPulse'

export type SearchParamsProps = {
  searchParams: {
    make?: string
    model?: string
    year?: number
    fuel_type?: string
    limit?: number
  }
}

export default function Home({ searchParams }: SearchParamsProps) {
  return (
    <main className='overflow-hidden'>
      <section id='hero' className='section-top flex flex-col justify-center'>
        <Hero />
      </section>

      <section id='catalog' className='scroll-mt-24'>
        <h2 className='font-extrabold'>Car Catalog</h2>
        <h3 className='italic'>Explore out the cars you might like</h3>

        <Suspense fallback={<LoadingPulse />}>
          <Catalog searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  )
}
