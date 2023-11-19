'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import BookingDetails from '@/components/BookingDetails'
import LoadingPulse from '@/components/LoadingPulse'

import type { BookingType } from '@/types'

const BookingsList = () => {
  //  router
  const router = useRouter()

  // session
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isAuthenticated = status === 'authenticated'
  const userEmail = session?.user?.email

  // state
  const [bookings, setBookings] = useState<BookingType[] | null>(null)

  /** redirect to sign in page if not authenticated */
  useEffect(() => {
    if (isLoading || isAuthenticated) return

    // notify user & redirect to sign in page
    toast.info('Please sign in to view your bookings.')
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      router.push('/signin')
    }, 1500)

    return () => {
      if (timer != null) {
        clearTimeout(timer)
      }
    }
  }, [isLoading, isAuthenticated, router])

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

  if (bookings == undefined || userEmail == undefined) return <LoadingPulse />

  return (
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
  )
}

export default BookingsList
