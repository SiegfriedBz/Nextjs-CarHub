'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import LoadingPulse from '@/components/LoadingPulse'
import BookingDetails from '@/components/BookingDetails'
import { sendBrevoTransactionEmail } from '@/utils/sendBrevoTransactionEmail'
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
  const userName = session?.user?.name
  const userEmail = session?.user?.email
  const isLoading = status === 'loading'

  // router
  const router = useRouter()

  // state
  const [confirmedBooking, setConfirmedBooking] = useState<BookingType | null>(
    null
  )

  /** update booking payment_intent_id */
  const updateBooking = useCallback(async () => {
    let updatedBooking: BookingType | null = null

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
      updatedBooking = data.updatedBooking as BookingType
      const confirmedBookingMessage = data.message

      setConfirmedBooking(updatedBooking)
      /** user notifications */
      // 1. notify user with confirmed booking
      toast.success(confirmedBookingMessage)
    } catch (error: any) {
      console.log(error)
      // notify user
      toast.error("Something went wrong, we couldn't update your order status.")
    }

    if (updatedBooking == null) return

    try {
      /**  send booking confirmation email if booking was updated */
      const { car_make, car_model } = updatedBooking
      const emailResponse = await sendBrevoTransactionEmail({
        car_make,
        car_model,
        recipientName: userName || userEmail?.split('@')[0] || 'Customer',
        recipientEmail: userEmail as string,
      })

      /** user notifications */
      // 2. notify user with sent booking confirmation email
      if (emailResponse != undefined) {
        toast.info(
          `Confirmation email sent to ${userEmail} - please check your spam folder.`
        )
      }
    } catch (error: any) {
      console.log(error)
    }
  }, [bookingId, paymentIntentId, userEmail, userName])

  useEffect(() => {
    updateBooking()
  }, [updateBooking])

  if (!session || isLoading) return <LoadingPulse />
  if (!userEmail) return router.push('/signin')

  return (
    <section className='section-top'>
      <h1>Thank you for your booking!</h1>
      <h2 className='font-semibold'>Booking details</h2>

      <div className='flex flex-col'>
        {confirmedBooking == null ? (
          <LoadingPulse />
        ) : (
          <>
            <BookingDetails userEmail={userEmail} booking={confirmedBooking} />
            <Link
              href='/bookings'
              className='btn-small md:btn-medium btn-gradient mt-2 w-fit self-end'
            >
              My Bookings
            </Link>
          </>
        )}
      </div>
    </section>
  )
}

export default StripeSuccessPage
