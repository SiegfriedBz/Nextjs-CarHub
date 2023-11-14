import type { CarType } from '@/types'
import Image from 'next/image'

type Props = {
  car: CarType
}

const CarCard = ({ car }: Props) => {
  const transmissionDisplay = car.transmission === 'A' ? 'Automatic' : 'Manual'

  return (
    <div className='flex h-96 w-96 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 p-8 transition duration-300 ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-gray-300'>
      {/* brand & model */}
      <h3 className='self-start text-xl font-bold uppercase tracking-wide'>
        {car.make} {car.model}
      </h3>

      {/* price */}

      <h2
        className='h2 relative my-4 self-start ps-3 text-3xl font-bold before:absolute before:-left-3 before:-top-2 before:ps-3 before:text-xl
      before:font-normal before:content-["\0024"] after:absolute after:-bottom-[0.15rem] after:-right-8 after:text-base after:font-normal after:content-["/day"]
      '
      >
        52
      </h2>

      {/* img */}
      <div className='relative h-64 w-64'>
        <Image src='/hero.png' alt={car.make} fill className='object-contain' />
      </div>

      {/* logos */}
      <div className='mt-4 flex w-full justify-between'>
        <div className='flex flex-col items-center gap-2'>
          <Image
            src='/steering-wheel.svg'
            alt='transmission'
            width={25}
            height={25}
          />
          <p className='text-sm uppercase'>{transmissionDisplay}</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Image src='/tire.svg' alt='drive' width={25} height={25} />
          <p className='text-sm uppercase'>{car.drive}</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Image src='/gas.svg' alt='city_mpg' width={25} height={25} />
          <p className='text-sm uppercase'>{car.city_mpg} MPG</p>
        </div>
      </div>
    </div>
  )
}

export default CarCard
