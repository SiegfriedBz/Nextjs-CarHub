import Image from 'next/image'
import LoadingPulse from '@/components/LoadingPulse'
import { generateCarImageUrl } from '@/utils/fetchCars'
import { formatDate } from '@/utils/formatDate'
import type { BookingType } from '@/types'
import type { Session } from 'next-auth'

type Props = {
  booking: BookingType
  session: Session
}

const BookingDetails = ({ booking, session }: Props) => {
  const {
    id,
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

  const userEmail = session?.user?.email

  if (!userEmail) return <LoadingPulse />

  return (
    <li className='flex flex-col rounded-md border border-gray-300 p-4'>
      <div className='flex items-center'>
        {/* car img */}
        <div className='relative h-32 w-full rounded-full md:h-48'>
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
        {/* car model & dates */}
        <div className='hidden 2xl:flex 2xl:w-1/2 2xl:flex-col'>
          <div className='flex items-center gap-x-4'>
            <h3>Car: </h3>
            <h4 className='uppercase tracking-wide text-gray-500'>
              {car_make} {car_model} {car_year}
            </h4>
          </div>

          <div className='flex items-center gap-x-4'>
            <h3>Dates: </h3>
            <h4 className='text-gray-500'>
              From {formatDate(new Date(checkin))} to{' '}
              {formatDate(new Date(checkout))}
            </h4>
          </div>
        </div>
      </div>

      {/* car details */}
      <div>
        {/* order summary */}
        <div className='flex items-center gap-x-2'>
          <h3>Order Id: </h3>
          <h4 className='text-gray-500'>{id}</h4>
        </div>
        <div className='flex items-center gap-x-2'>
          <h3>Your email: </h3>
          <h4 className='text-gray-500'>{userEmail}</h4>
        </div>
        <div className='flex items-center gap-x-2'>
          <h3>Booking Status: </h3>
          <h4 className='capitalize text-gray-500'>{status.toLowerCase()}</h4>
        </div>
        <div className='flex items-center gap-x-2'>
          <h3>Order Total: </h3>
          <h4 className='text-gray-500'>${total_price_in_cents / 100}</h4>
        </div>

        <div className='flex items-center gap-x-4'>
          <h3>Transmission: </h3>
          <h4 className='capitalize text-gray-500'>
            {car_transmission === 'a' ? 'automatic' : 'manual'}{' '}
          </h4>
        </div>

        <div className='flex items-center gap-x-4'>
          <h3>Fuel type: </h3>
          <h4 className='capitalize text-gray-500'>{car_fuel_type}</h4>
        </div>

        {/* car model & dates */}
        <div className='flex flex-col 2xl:hidden'>
          <div className='flex items-center gap-x-4'>
            <h3>Car: </h3>
            <h4 className='uppercase tracking-wide text-gray-500'>
              {car_make} {car_model} {car_year}
            </h4>
          </div>

          <div className='flex items-center gap-x-4'>
            <h3>Dates: </h3>
            <h4 className='text-gray-500'>
              From {formatDate(new Date(checkin))} to{' '}
              {formatDate(new Date(checkout))}
            </h4>
          </div>
        </div>
      </div>
    </li>
  )
}

export default BookingDetails
