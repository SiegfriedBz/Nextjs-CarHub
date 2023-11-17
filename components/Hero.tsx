'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import CustomButton from './CustomButton'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const MotionImage = motion(Image)

const Hero = () => {
  const router = useRouter()

  const scrollToCatalog = () => {
    router.push('/#car-catalog')
  }

  return (
    <div
      id='hero'
      // navbar-height 6rem
      className='flex scroll-mt-[6rem] flex-col items-center justify-center gap-4 md:flex-row md:gap-0'
    >
      {/* HERO TEXT CONTAINER */}
      <div className='md:w-1/2'>
        <h1
          className={twMerge(
            'h1',
            'bg-gradient-to-r from-primary-dark to-dark/70 bg-clip-text text-transparent md:leading-[4rem]'
          )}
        >
          Find, book, rent a car - quick and super easy!
        </h1>
        <h2
          className={twMerge(
            'h2',
            'bg-gradient-to-r from-primary-dark to-dark/70 bg-clip-text text-transparent opacity-70 md:leading-10'
          )}
        >
          Streamline your car rental experience with our effortless booking
          process.
        </h2>

        <CustomButton
          className='btn-small sm:btn-large btn-gradient my-4 gap-4'
          handleClick={() => scrollToCatalog()}
        >
          Explore cars
        </CustomButton>
      </div>
      {/* HERO BG-IMG CONTAINER */}
      <div className='hero-bg'></div>
      {/* HERO IMG CONTAINER */}
      <div className='relative flex flex-1 items-center bg-[url("/hero-bg.png")] bg-cover bg-center bg-no-repeat p-4 md:bg-none md:p-0'>
        <MotionImage
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.25, 1] }}
          transition={{ duration: 0.75 }}
          src='/hero.png'
          width={480}
          height={480}
          className='h-full w-full object-cover'
          alt='hero'
        />
      </div>
    </div>
  )
}

export default Hero
