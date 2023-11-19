export const dynamic = 'force-dynamic'

import { Metadata } from 'next'
import BookingsList from './(components)/BookingsList'

export const metadata: Metadata = {
  title: 'Car Hub | My Bookings',
  openGraph: {
    title: 'Car Hub | My Bookings',
    description:
      'Car Hub: Your Key to Seamless Car Rentals. Choose, Book, Drive – Simplifying Your Journey.',
  },
}

export default function BookingsPage() {
  return (
    <>
      <section className='section-top'>
        <h1>My Bookings</h1>
        <BookingsList />
      </section>
    </>
  )
}
