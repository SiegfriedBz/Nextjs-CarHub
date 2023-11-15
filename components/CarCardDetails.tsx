'use client'

import Image from 'next/image'
import ButtonToggleFavorite from './ButtonToggleFavorite'
import type { CarType } from '@/types'

type Props = {
  car: CarType
}

const CarCardDetails = ({ car }: Props) => {
  return (
    <div className='relative flex h-full w-full flex-col items-center px-2 text-primary-dark'>
      {/* ToggleFavorite */}
      <ButtonToggleFavorite car={car} isModal={true} />
      {/* brand & model */}
      <h3 className='mt-0 self-start text-lg font-bold uppercase tracking-wide'>
        {car.make} {car.model}
      </h3>
      {/* imgs */}
      {/* main img */}
      <div className='relative h-32 w-full'>
        <Image src='/hero.png' alt='car' fill className='object-contain' />
      </div>{' '}
      {/* small imgs */}
      <div className='flex w-full flex-row justify-center gap-x-8'>
        <div className='relative h-24 w-1/3 sm:h-32 sm:w-32'>
          <Image src='/hero.png' alt='car' fill className='object-contain' />
        </div>{' '}
        <div className='relative h-24 w-1/3 sm:h-32 sm:w-32'>
          <Image src='/hero.png' alt='car' fill className='object-contain' />
        </div>{' '}
        <div className='relative h-24 w-1/3 sm:h-32 sm:w-32'>
          <Image src='/hero.png' alt='car' fill className='object-contain' />
        </div>
      </div>
      {/* details */}
      <ul className='mt-2 w-full'>
        {Object.entries(car).map(([key, value]) => {
          return (
            <li key={key} className='flex w-full justify-between'>
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
