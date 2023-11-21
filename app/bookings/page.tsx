export const dynamic = 'force-dynamic'

import { Metadata } from 'next'
import { Suspense } from 'react'
import MyBookings from './(components)/MyBookings'
import LoadingPulse from '@/components/LoadingPulse'

export const metadata: Metadata = {
  title: 'Car Hub | My Bookings',
  openGraph: {
    title: 'Car Hub | My Bookings',
    description:
      'Car Hub: Your Key to Seamless Car Rentals. Choose, Book, Drive – Simplifying Your Journey.',
  },
}

export default async function BookingsPage() {
  return (
    <>
      <section className='section-top scroll-mt-24' id='my-bookings'>
        <h1>My Bookings</h1>

        <Suspense fallback={<LoadingPulse />}>
          <MyBookings />
        </Suspense>
      </section>
    </>
  )
}
