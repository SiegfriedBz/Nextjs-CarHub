import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/authOptions'
import { redirect } from 'next/navigation'
import { prisma } from '@/utils/prismaClient'
import BookingDetails from '@/components/BookingDetails'
import type { BookingType } from '@/types'

async function getData() {
  // fetch bookings from DB
  try {
    let bookings = await prisma.booking.findMany({
      include: {
        user: true,
      },
    })

    return bookings
  } catch (error) {
    console.log(error)
    return []
  }
}

export default async function BookingsPage() {
  const session = await getServerSession(authOptions)

  // redirect if not logged in
  if (!session) {
    // redirect
    return redirect('/signin')
  }

  const bookings: BookingType[] = await getData()

  return (
    <>
      <section className='section-top'>
        <h1>My Bookings</h1>
        <ul className='flex flex-col gap-y-4'>
          {bookings?.map((booking) => {
            return (
              <BookingDetails
                key={booking.id}
                session={session}
                booking={booking}
              />
            )
          })}
        </ul>
      </section>
    </>
  )
}
