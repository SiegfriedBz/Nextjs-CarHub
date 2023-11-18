'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { twMerge } from 'tailwind-merge'
import { toast } from 'react-toastify'
import LoadingPulse from '@/components/LoadingPulse'
import { formatDate } from '@/utils/formatDate'
import type { BookingType } from '@/types'

type Props = {
  params: {
    bookingId: string
  }
}

const StripeSuccessPage = ({ params }: Props) => {
  const { bookingId } = params

  // get the new payment_intent id created on the fly by stripe.
  const searchParams = useSearchParams()
  const paymentIntentId = searchParams.get('payment_intent')

  // session
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  // state
  const [confirmedBooking, setConfirmedBooking] = useState<BookingType | null>(
    null
  )

  const updateBooking = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/stripe/confirm`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bookingId, paymentIntentId }),
        }
      )

      if (!response.ok) throw new Error('Failed to update the order status')

      const data = await response.json()

      const { updatedBooking, message } = data
      setConfirmedBooking(updatedBooking)

      // notify user
      toast.success(message)
    } catch (error) {
      console.log(error)
      // notify user
      toast.error("Something went wrong, we couldn't update your order status")
    }
  }, [bookingId, paymentIntentId])

  useEffect(() => {
    updateBooking()
  }, [updateBooking])

  return (
    <section className='section-top'>
      <h1>Thank you for your booking!</h1>
      <h2>Booking details</h2>

      <div className='mb-2'>
        {confirmedBooking == null ? (
          <LoadingPulse />
        ) : (
          <div>
            {/* order summary */}
            <div className='flex items-center gap-x-4'>
              <h3>Order Id: </h3>
              <span className='text-dark/80'>{confirmedBooking.id}</span>
            </div>
            <div className='flex items-center gap-x-4'>
              <h3>Your email: </h3>
              <span className='text-dark/80'>{userEmail}</span>
            </div>
            <div className='flex items-center gap-x-4'>
              <h3>Booking Status: </h3>
              <span className='capitalize text-dark/80'>
                {confirmedBooking.status.toLowerCase()}
              </span>
            </div>
            <div className='flex items-center gap-x-4'>
              <h3>Order Total: </h3>
              <span className='text-dark/80'>
                ${confirmedBooking.total_price_in_cents / 100}
              </span>
            </div>

            {/* car */}
            <div className='my-2'>
              <div className='flex items-center gap-x-4'>
                <h3>Car: </h3>
                <span className='uppercase tracking-wide text-dark/80'>
                  {confirmedBooking.car_make} {confirmedBooking.car_model}
                </span>
              </div>
              <div className='flex items-center gap-x-4'>
                <h3>Dates: </h3>
                <span className='text-dark/80'>
                  From {formatDate(new Date(confirmedBooking.checkin))} to{' '}
                  {formatDate(new Date(confirmedBooking.checkout))}
                </span>
              </div>
            </div>

            {/* link to orders */}
            <div className='mt-2 flex justify-end'>
              <Link
                replace
                href='/bookings'
                className={twMerge('btn', 'btn-medium btn-gradient')}
              >
                Check your bookings
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default StripeSuccessPage
