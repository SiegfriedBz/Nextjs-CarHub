import { prisma } from '@/utils/prismaClient'
import { NextResponse } from 'next/server'

// Update order status to PAID & add intent_id
export async function PATCH(request: Request) {
  const body = await request.json()
  const { bookingId, paymentIntentId } = body

  try {
    const updatedBooking = await prisma.booking.update({
      where: {
        id: bookingId,
      },
      data: {
        intent_id: paymentIntentId,
        status: 'PAID',
      },
    })

    if (!updatedBooking) throw new Error('Order not found, please try again')

    return NextResponse.json(
      { updatedBooking, message: 'Your payment was processed successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 500 })
  }
}
