import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/authOptions'
import { redirect } from 'next/navigation'
import BookingDetails from '@/components/BookingDetails'
import LoadingPulse from '@/components/LoadingPulse'
import type { BookingType } from '@/types'

export const metadata: Metadata = {
  title: 'Car Hub | My Bookings',
  openGraph: {
    title: 'Car Hub | My Bookings',
    description:
      'Car Hub: Your Key to Seamless Car Rentals. Choose, Book, Drive – Simplifying Your Journey.',
  },
}

async function getData(userEmail: string, userIsAdmin: boolean = false) {
  // fetch bookings from DB
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/bookings`,
      {
        method: 'GET',
        // send the cookie along with the request
        headers: headers(),
      }
    )

    if (!response.ok) {
      throw new Error('Error fetching bookings')
    }

    const data = await response.json()
    console.log(data)
    const { bookings } = data

    return bookings
  } catch (error) {
    console.log(error)
    return []
  }
}

export default async function BookingsPage() {
  const session = await getServerSession(authOptions)
  const userEmail = session?.user?.email
  const userIsAdmin = !!session?.user?.isAdmin

  // redirect if not logged in
  if (!session || !userEmail) {
    // redirect
    return redirect('/signin')
  }

  const bookings: BookingType[] = await getData(userEmail, userIsAdmin)

  if (bookings == undefined) return <LoadingPulse />

  return (
    <>
      <section className='section-top'>
        <h1>My Bookings</h1>
        <ul className='flex flex-col gap-y-4'>
          {bookings?.map((booking) => {
            return (
              <BookingDetails
                key={booking.id}
                userEmail={userEmail}
                booking={booking}
              />
            )
          })}
        </ul>
      </section>
    </>
  )
}
