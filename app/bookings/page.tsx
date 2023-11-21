export const dynamic = 'force-dynamic'

import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/authOptions'
import { redirect } from 'next/navigation'
import { prisma } from '@/utils/prismaClient'
import Link from 'next/link'
import BookingDetails from '@/components/BookingDetails'

export const metadata: Metadata = {
  title: 'Car Hub | My Bookings',
  openGraph: {
    title: 'Car Hub | My Bookings',
    description:
      'Car Hub: Your Key to Seamless Car Rentals. Choose, Book, Drive – Simplifying Your Journey.',
  },
}

type GetDataProps = {
  userIsAdmin: boolean
  userEmail: string | undefined
}
async function getData({ userIsAdmin, userEmail }: GetDataProps) {
  /** get full user data from db */
  const fullUser = await prisma.user.findUnique({
    where: { email: userEmail as string },
  })

  /** redirect to sign in page if user not found */
  if (!fullUser?.email) {
    return redirect('/signin')
  }

  try {
    /**
     * get all bookings if user is admin
     * otherwise, get only bookings for the logged in user
     */
    const bookings = await prisma.booking.findMany({
      where: userIsAdmin ? {} : { userId: fullUser?.id as string },
      orderBy: {
        createdAt: 'desc',
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

  /** get user from session */
  const userIsAdmin = !!session?.user?.isAdmin
  const userEmail = session?.user?.email

  /** redirect to sign in page if user not logged in */
  if (!userEmail) {
    return redirect('/signin')
  }
  const bookings = await getData({ userIsAdmin, userEmail })

  return (
    <>
      <section className='section-top scroll-mt-24' id='my-bookings'>
        <h1>My Bookings</h1>
        <ul className='flex flex-col gap-y-4'>
          {bookings && bookings.length === 0 ? (
            <>
              <h3 className='my-0'>You have no bookings yet.</h3>
              <h3>
                To start booking, please{' '}
                <Link
                  href='/#catalog'
                  className='underline-gradient-link font-semibold italic'
                >
                  select a car
                </Link>{' '}
                in our catalogue.
              </h3>
            </>
          ) : (
            bookings?.map((booking) => {
              return (
                <BookingDetails
                  key={booking.id}
                  userEmail={userEmail}
                  booking={booking}
                />
              )
            })
          )}
        </ul>
      </section>
    </>
  )
}
