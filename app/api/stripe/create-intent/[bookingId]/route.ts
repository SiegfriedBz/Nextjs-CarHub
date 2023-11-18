import { prisma } from '@/utils/prismaClient'
import { NextResponse } from 'next/server'

// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

//  get booking amount from db
const getBookingAmount = async (bookingId: string) => {
  const booking = await prisma.booking.findUnique({
    where: {
      id: bookingId,
    },
  })

  if (!booking?.total_price_in_cents) {
    return Response.json(
      {
        message: 'booking not found, please try again',
      },
      { status: 404 }
    )
  }

  const bookingAmount = booking.total_price_in_cents
  // Calculate the booking total on the server to prevent
  // people from directly manipulating the amount on the client
  return bookingAmount * 100
}

export async function POST(
  request: Request,
  { params: { bookingId } }: { params: { bookingId: string } }
) {
  try {
    const bookingAmount = await getBookingAmount(bookingId)

    // Create a PaymentIntent with the booking amount and currency
    /**
     * /!\ paymentIntent.id is NOT the same as the one that will be created at next step,
     * when stripe.confirmPayment is called at checkout.
     * => do NOT use the current paymentIntent.id to update the booking intent_id at this stage.
     *
     * This call here is just to get the paymentIntent.client_secret.
     * => display stripe checkout form.
     */
    const paymentIntent = await stripe.paymentIntents.create({
      amount: bookingAmount,
      currency: 'usd',
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    })

    if (!paymentIntent?.client_secret)
      throw new Error('Payment intent not found, please try again')

    // Send PaymentIntent client_secret to client
    // => display stripe checkout form.
    return NextResponse.json(
      {
        clientSecret: paymentIntent.client_secret,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 500 })
  }
}
