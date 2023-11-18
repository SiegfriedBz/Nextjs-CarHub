import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/authOptions'
import { redirect } from 'next/navigation'
import { prisma } from '@/utils/prismaClient'
import Image from 'next/image'
import { generateCarImageUrl } from '@/utils/fetchCars'
import type { BookingType } from '@/types'

async function getData() {
  // fetch bookings from DB
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        user: true,
      },
    })
    console.log(bookings)

    return bookings
  } catch (error) {
    console.log(error)
    return []
  }
}

export default async function BookingsPage() {
  const session = await getServerSession(authOptions)
  const isLoggedIn = !!session?.user?.email

  console.log(session)

  // redirect if not logged in
  if (!session) {
    // redirect
    redirect('/signin')
  }

  const bookings = await getData()

  return (
    <>
      <section className='section-top'>
        <h1>My Bookings</h1>
        <ul>
          {bookings?.map((booking) => {
            const {
              checkin,
              checkout,
              status,
              car_make,
              car_model,
              car_year,
              car_transmission,
              car_fuel_type,
              total_price_in_cents,
            } = booking
            return (
              <li key={booking.id} className='flex flex-col'>
                <div className='flex gap-8'>
                  {/* car img */}
                  <div className='relative h-20 w-20 rounded-full'>
                    <Image
                      src={generateCarImageUrl({
                        carData: {
                          make: car_make,
                          model: car_model,
                          year: +car_year,
                        },
                      })}
                      alt='car'
                      fill
                      className='object-contain'
                    />
                  </div>
                  {/* car details 1/2 */}
                  <div className='flex flex-col'>
                    <span>Make: {booking?.car_make}</span>
                    <span>Model: {booking?.car_model}</span>
                  </div>
                </div>

                {/* car details 2/2 */}
                <span>Transmission: {car_transmission}</span>
                <span>Fuel: {car_fuel_type}</span>
                <span>Check in: {checkin.toString()}</span>
                <span>Check out: {checkout.toString()}</span>
                <span>Price: ${total_price_in_cents / 100}</span>
                <span>
                  Status:
                  {/* check Date.now > Check out ? */}
                  {status}
                </span>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
