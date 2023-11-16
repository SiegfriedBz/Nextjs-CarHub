'use client'

import Image from 'next/image'
import ButtonToggleFavorite from './ButtonToggleFavorite'
import type { CarType } from '@/types'
import { generateCarImageUrl } from '@/utils/fetchCars'

type Props = {
  car: CarType
}

const CarCardDetails = ({ car }: Props) => {
  return (
    <div className='relative flex h-full w-full flex-col items-center px-2 text-primary-dark lg:px-8 lg:py-2'>
      {/* ToggleFavorite */}
      <ButtonToggleFavorite car={car} isModal={true} />
      {/* brand & model */}
      <h3 className='mt-0 self-start text-lg font-bold uppercase tracking-wide md:text-xl lg:text-2xl'>
        {car.make} {car.model}
      </h3>
      {/* imgs */}
      {/* main img */}
      <div className='relative h-36 w-full'>
        <Image
          src={generateCarImageUrl({ car })}
          alt='car'
          fill
          className='object-contain p-0'
        />
      </div>{' '}
      {/* small imgs */}
      <div className='flex w-full flex-row justify-center gap-x-8'>
        <div className='relative h-24 w-1/3 sm:h-28 sm:w-28'>
          <Image
            src={generateCarImageUrl({ car, angle: '29' })}
            alt='car'
            fill
            className='object-contain'
          />
        </div>{' '}
        <div className='relative h-24 w-1/3 sm:h-32 sm:w-32'>
          <Image
            src={generateCarImageUrl({ car, angle: '33' })}
            alt='car'
            fill
            className='object-contain'
          />
        </div>{' '}
        <div className='relative h-24 w-1/3 sm:h-32 sm:w-32'>
          <Image
            src={generateCarImageUrl({ car, angle: '13' })}
            alt='car'
            fill
            className='object-contain'
          />
        </div>
      </div>
      {/* details */}
      <ul className='mt-2 w-full'>
        {Object.entries(car).map(([key, value]) => {
          return (
            <li key={key} className='flex w-full justify-between sm:text-lg'>
              <span className='font-semibold capitalize'>
                {key.replace('_', ' ')}
              </span>
              <span className='capitalize'>{value}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CarCardDetails
