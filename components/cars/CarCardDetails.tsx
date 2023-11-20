'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useFavoriteCarStore } from '@/zustand/stores'
import ButtonToggleFavorite from '@/components/buttons/ButtonToggleFavorite'
import { generateCarImageUrl } from '@/utils/fetchCars'
import type { CarType } from '@/types'

type Props = {
  car: CarType
  isPickCarView?: boolean
}

const CarCardDetails = ({ car, isPickCarView = false }: Props) => {
  // store
  const { addToFavoriteCars } = useFavoriteCarStore()

  useEffect(() => {
    useFavoriteCarStore.persist.rehydrate()
  }, [])

  return (
    <div className='relative flex h-full w-full flex-col items-center px-2 text-primary-dark lg:px-8 lg:py-2'>
      {/* ToggleFavorite */}
      <ButtonToggleFavorite car={car} isModal={true} />
      {/* brand & model */}
      <h2 className='mt-0 self-start font-bold uppercase tracking-wide'>
        {car.make} {car.model}
      </h2>
      {/* imgs */}
      {/* main img */}
      <div className='relative h-36 w-full'>
        <Image
          src={generateCarImageUrl({
            carData: {
              make: car.make,
              model: car.model,
              year: +car.year,
            },
          })}
          alt='car'
          fill
          className='object-contain p-0'
        />
      </div>{' '}
      {/* small imgs */}
      <div className='flex w-full flex-row justify-center gap-x-8'>
        <div className='relative h-24 w-1/3 sm:h-28 sm:w-28'>
          <Image
            src={generateCarImageUrl({
              carData: {
                make: car.make,
                model: car.model,
                year: +car.year,
              },
              angle: '29',
            })}
            alt='car'
            fill
            className='object-contain'
          />
        </div>{' '}
        <div className='relative h-24 w-1/3 sm:h-32 sm:w-32'>
          <Image
            src={generateCarImageUrl({
              carData: {
                make: car.make,
                model: car.model,
                year: +car.year,
              },
              angle: '33',
            })}
            alt='car'
            fill
            className='object-contain'
          />
        </div>{' '}
        <div className='relative h-24 w-1/3 sm:h-32 sm:w-32'>
          <Image
            src={generateCarImageUrl({
              carData: {
                make: car.make,
                model: car.model,
                year: +car.year,
              },
              angle: '13',
            })}
            alt='car'
            fill
            className='object-contain'
          />
        </div>
      </div>
      {/* details */}
      <ul className='mt-2 w-full'>
        {Object.entries(car)
          .filter(([key]) => key !== 'make' && key !== 'model')
          .map(([key, value]) => {
            return (
              <li key={key} className='flex w-full justify-between sm:text-lg'>
                <span className='font-semibold capitalize'>
                  {key.replace('_', ' ')}
                </span>
                <span className='capitalize'>
                  {key === 'transmission'
                    ? value === 'a'
                      ? 'automatic'
                      : 'manual'
                    : value}
                </span>
              </li>
            )
          })}
      </ul>
      {/* CTA (not visible on /bookings/new page)
        - navigate to /bookings/new page
        - add car to Favorites
       */}
      {!isPickCarView && (
        <Link
          className='btn btn-medium btn-gradient'
          href='/bookings/new'
          onClick={() => addToFavoriteCars(car)}
        >
          Book
        </Link>
      )}
    </div>
  )
}

export default CarCardDetails
