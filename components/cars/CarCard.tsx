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
      <div className='group relative flex h-96 w-96 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 p-8 transition duration-300 ease-in-out hover:shadow-sm hover:shadow-gray-300'>
        {/* ToggleFavorite */}
        <ButtonToggleFavorite car={car} />
        {/* brand & model */}
        <h3 className='self-start text-xl font-bold uppercase tracking-wide'>
          {make} {model}
        </h3>

        {/* price */}
        <h2
          className='h2 relative my-4 self-start ps-3 text-3xl font-bold before:absolute before:-left-3 before:-top-2 before:ps-3 before:text-xl
      before:font-normal before:content-["\0024"] after:absolute after:-bottom-[0.15rem] after:-right-8 after:text-base after:font-normal after:content-["/day"]
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
        <div className='relative mb-2 mt-4 flex w-full flex-col'>
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
            className='btn-small btn-gradient invisible absolute -bottom-9 left-0 right-0 transition duration-200 ease-in-out group-hover:visible'
          >
            View more
          </CustomButton>
        </div>
      </div>
    </>
  )
}

export default CarCard
