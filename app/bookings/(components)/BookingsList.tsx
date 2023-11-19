'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import BookingDetails from '@/components/BookingDetails'
import LoadingPulse from '@/components/LoadingPulse'

import type { BookingType } from '@/types'
import { useRouter } from 'next/navigation'

const BookingsList = () => {
  //  router
  const router = useRouter()

  // session
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  // state
  const [bookings, setBookings] = useState<BookingType[] | null>(null)

  // get bookings
  const getBookings = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/bookings`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        throw new Error('Error fetching bookings')
      }

      const data = await response.json()
      const { bookings } = data

      return bookings
    } catch (error) {
      console.log(error)
      return []
    }
  }, [])

  useEffect(() => {
    if (!userEmail) return
    ;(async () => {
      const bookings = await getBookings()
      setBookings(bookings)
    })()
  }, [userEmail, getBookings])

  // redirect if not logged in
  if (!session || !userEmail) {
    // redirect
    router.push('/signin')
    return null
  }

  return (
    <ul className='flex flex-col gap-y-4'>
      {bookings == undefined ? (
        <LoadingPulse />
      ) : bookings && bookings.length === 0 ? (
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
  )
}

export default BookingsList
