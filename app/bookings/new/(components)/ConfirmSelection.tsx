'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import CustomButton from '@/components/CustomButton'
import { generateCarImageUrl } from '@/utils/fetchCars'
import type { CarType } from '@/types'
import { formatDate } from '@/utils/formatDate'

type Props = {
  selectedCar: CarType | undefined
  startDate: Date
  setStartDate: React.Dispatch<React.SetStateAction<Date>>
  endDate: Date
  setEndDate: React.Dispatch<React.SetStateAction<Date>>
  totalPrice: number
  setSelectedCar: React.Dispatch<React.SetStateAction<CarType | undefined>>
  setIsReset: React.Dispatch<React.SetStateAction<boolean>>
  scrollToTop: () => void
}

const ConfirmSelection = ({
  selectedCar,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  totalPrice,
  setSelectedCar,
  setIsReset,
  scrollToTop,
}: Props) => {
  const router = useRouter()

  if (!selectedCar || !startDate || !endDate) {
    return null
  }

  /** post booking to db & redirect to payment page */
  const handleInitiatePayment = async () => {
    try {
      // create booking in db
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/bookings`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            checkin: startDate,
            checkout: endDate,
            car_make: selectedCar.make,
            car_model: selectedCar.model,
            car_year: selectedCar.year,
            car_transmission: selectedCar.transmission,
            car_fuel_type: selectedCar.fuel_type,
            total_price_in_cents: totalPrice * 100,
          }),
        }
      )

      console.log(response)
      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      const data = await response.json()
      console.log(data)
      const bookingId = data.booking.id

      // notify user
      toast.info('Booking created successfully, loading payment page...')
      // redirect to payment page
      router.push(`/stripe/${bookingId}`)
    } catch (error) {
      console.log(error)
      // notify user
      toast.warn('Something went wrong, please try again.')
    }
  }

  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold'>3. Confirm your booking</h2>

      <div className='my-2 flex w-full gap-x-2'>
        {/* car */}
        <div className='relative h-auto w-1/2 sm:h-80'>
          <Image
            src={generateCarImageUrl({
              carData: {
                make: selectedCar.make as string,
                model: selectedCar.model as string,
                year: +selectedCar.year as number,
              },
            })}
            alt='car'
            fill
            className='object-contain'
          />
        </div>
        {/* car details */}
        <div className='flex w-1/2 flex-col items-end justify-center sm:items-start sm:px-4'>
          <h3 className='font-semibold capitalize'>
            {selectedCar.make} {selectedCar.model}
          </h3>
          <h4 className='capitalize'>{selectedCar.year}</h4>
          <h4>{selectedCar.transmission === 'a' ? 'Automatic' : 'Manual'}</h4>
          <h4 className='capitalize'>{selectedCar.fuel_type}</h4>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div>
          {/* booking dates */}
          <div className='my-2'>
            <h4>
              From{' '}
              <span className='font-semibold italic'>
                {formatDate(startDate)}
              </span>{' '}
              to{' '}
              <span className='font-semibold italic'>
                {formatDate(endDate)}
              </span>
            </h4>
          </div>

          {/* booking total price */}
          <div className='my-2'>
            <h4>
              Total price
              <span className='font-semibold italic'> ${totalPrice}</span>
            </h4>
          </div>
        </div>
        {/* reset button */}
        <CustomButton
          handleClick={() => {
            setSelectedCar(undefined)
            setStartDate(new Date())
            setEndDate(new Date())
            setIsReset(true)
            scrollToTop()
          }}
          className='btn-small btn-outline h-1/2'
        >
          Reset
        </CustomButton>
      </div>

      {/* confirm button */}

      <CustomButton
        handleClick={handleInitiatePayment}
        className='btn-medium btn-gradient w-fit self-end'
      >
        Confirm & Book
      </CustomButton>
    </div>
  )
}

export default ConfirmSelection
