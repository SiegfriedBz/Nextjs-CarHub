'use client'

import Link from 'next/link'
import { useFavoriteCarStore } from '@/zustand/stores'

import Image from 'next/image'
import { generateCarImageUrl } from '@/utils/fetchCars'
import { useEffect, useState } from 'react'
import Modal from '@/components/Modal'
import CarCardDetails from '@/components/CarCardDetails'
import CustomButton from '@/components/CustomButton'
import type { CarType } from '@/types'

type Props = {
  selectedCar?: CarType
  setSelectedCar: React.Dispatch<React.SetStateAction<CarType | undefined>>
}

const PickCar = ({ selectedCar, setSelectedCar }: Props) => {
  // state
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedCarForModal, setSelectedCarForModal] =
    useState<CarType | null>(null)

  // store
  const { favoriteCars } = useFavoriteCarStore()
  useEffect(() => {
    useFavoriteCarStore.persist.rehydrate()
  }, [])

  // handlers
  const handleSelectCarForModal = (car: CarType) => {
    setSelectedCarForModal(car)
    setModalIsOpen(true)
  }

  const handleSelectCarForBooking = (car: CarType) => {
    setSelectedCar(car)
  }

  if (favoriteCars.length === 0) {
    return (
      <div>
        <span>
          To start booking, please{' '}
          <Link href='/#catalog' className='underline-gradient-link'>
            select a car
          </Link>{' '}
          in our catalogue
        </span>
      </div>
    )
  }

  return (
    <>
      {/* modal CarCardDetails */}
      <Modal modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)}>
        {selectedCarForModal && (
          <CarCardDetails car={selectedCarForModal} isPickCarView={true} />
        )}
      </Modal>

      {/* pick car */}
      <div id='bookings-car-picker'>
        <h2 className='font-semibold'>1. Select your car</h2>
        <span className='mb-2 inline-block'>
          <span className='font-semibold italic'>Choose </span>among
          <span className='font-semibold italic'> your favorite cars </span>
          below, or{' '}
          <Link
            href='/#catalog'
            className='underline-gradient-link font-semibold italic'
          >
            select a car
          </Link>{' '}
          in our catalogue
        </span>
        {/* favoriteCars list */}
        <ul className='flex flex-col gap-2 md:gap-4'>
          {favoriteCars?.map((favCar: CarType, index) => {
            return (
              <li
                key={index}
                className={`flex w-full flex-col items-center justify-center rounded-md px-2 pb-4 shadow-sm hover:shadow-md sm:flex-row sm:justify-between sm:px-8 ${
                  favCar === selectedCar
                    ? 'bg-blue-100 shadow-blue-200 ring ring-blue-100'
                    : 'bg-gray-100 shadow-gray-200'
                }  `}
              >
                <div className='flex gap-4 md:gap-8'>
                  {/* img */}
                  <div className='relative h-32 w-32 sm:h-40 sm:w-40'>
                    <Image
                      src={generateCarImageUrl({
                        carData: {
                          make: favCar.make,
                          model: favCar.model,
                          year: +favCar.year,
                        },
                      })}
                      alt='car'
                      fill
                      className='object-contain'
                    />
                  </div>

                  {/* details */}
                  <div className='flex w-1/2 flex-col place-content-center'>
                    <span className='whitespace-nowrap font-semibold capitalize'>
                      {favCar.make} {favCar.model}
                    </span>
                    <span className='capitalize'>{favCar.year}</span>
                    <div className='flex gap-x-2 md:flex-col'>
                      <span>
                        {favCar.transmission === 'a' ? 'Automatic' : 'Manual'}
                      </span>
                      <span className='capitalize'>{favCar.fuel_type}</span>
                    </div>
                  </div>
                </div>

                {/* buttons */}
                <div className='flex gap-2 sm:flex-col-reverse md:flex-row'>
                  {/* see car details btn */}
                  <CustomButton
                    handleClick={() => handleSelectCarForModal(favCar)}
                    className='btn-small btn-outline'
                  >
                    See details
                  </CustomButton>

                  {/* select car for booking */}
                  <CustomButton
                    handleClick={() => handleSelectCarForBooking(favCar)}
                    className='btn-small btn-gradient'
                  >
                    Select car
                  </CustomButton>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default PickCar
