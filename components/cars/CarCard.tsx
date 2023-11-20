'use client'

import { useState } from 'react'
import Image from 'next/image'
import CarCardDetails from './CarCardDetails'
import Modal from '../Modal'
import ButtonToggleFavorite from '@/components/buttons/ButtonToggleFavorite'
import CustomButton from '@/components/buttons/CustomButton'
import { generateCarImageUrl } from '@/utils/fetchCars'
import { car_price_per_day_in_cents } from '@/constants'
import type { CarType } from '@/types'

type Props = {
  car: CarType
}

const CarCard = ({ car }: Props) => {
  // props
  const { make, model, transmission, drive, city_mpg, year } = car
  const transmissionDisplay = transmission === 'a' ? 'Automatic' : 'Manual'

  // state
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      {/* CarCardDetails */}
      <Modal modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)}>
        <CarCardDetails car={car} />
      </Modal>

      {/* CarCard */}
      <div
        className='group
          relative
          flex
          h-[25rem] w-[25rem]
          cursor-pointer
          flex-col items-center justify-center
          rounded-md
          border-2 border-gray-200 
          p-8 
          shadow-gray-100
        transition duration-300 ease-in-out 
          hover:shadow-sm
          hover:shadow-gray-200 dark:border'
      >
        {/* ToggleFavorite */}
        <ButtonToggleFavorite car={car} />
        {/* brand & model */}
        <h3 className='self-start text-xl font-bold uppercase tracking-wide'>
          {make} {model}
        </h3>

        {/* price */}
        <h2
          className='relative 
            my-4 self-start ps-3 
            text-3xl font-bold 
            
            before:absolute 
            before:-left-3 before:-top-2 
            before:ps-3 
            before:text-xl
            before:font-semibold
          before:text-primary-dark
            before:content-["\0024"]
            after:absolute

            after:-bottom-[0.15rem]
            after:-right-8 
            after:text-base after:font-semibold
          after:text-primary-light
            after:content-["/day"] 
          dark:before:text-light
          dark:after:text-light/70
      '
        >
          {car_price_per_day_in_cents / 100}
        </h2>

        {/* img */}
        <div className='relative h-64 w-64'>
          <Image
            src={generateCarImageUrl({ carData: { make, model, year } })}
            alt='car'
            fill
            className='object-contain'
          />
        </div>

        {/* other car details */}
        <div className='relative mb-4 mt-2 flex w-full flex-col'>
          <div className='flex w-full justify-between'>
            <div className='flex flex-col items-center gap-2'>
              <Image
                src='/images/steering-wheel.svg'
                alt='transmission'
                width={25}
                height={25}
              />
              <p className='text-sm uppercase'>{transmissionDisplay}</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Image
                src='/images/tire.svg'
                alt='drive'
                width={25}
                height={25}
              />
              <p className='text-sm uppercase'>{drive}</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <Image
                src='/images/gas.svg'
                alt='city_mpg'
                width={25}
                height={25}
              />
              <p className='text-sm uppercase'>{city_mpg} MPG</p>
            </div>
          </div>

          {/* view more btn */}
          <CustomButton
            handleClick={() => setModalIsOpen(true)}
            className='btn-small btn-gradient
             invisible 
             absolute -bottom-10 left-0 right-0 
             transition duration-200 ease-in-out 
             group-hover:visible
             group-focus:visible
             group-active:visible
             '
          >
            View more
          </CustomButton>
        </div>
      </div>
    </>
  )
}

export default CarCard
