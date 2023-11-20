'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import CustomButton from '@/components/buttons/CustomButton'

const MotionImage = motion(Image)

const Hero = () => {
  const router = useRouter()

  const scrollToCatalog = () => {
    router.push('/#catalog', { scroll: true })
  }

  return (
    <div
      // navbar-height 6rem
      className='flex scroll-mt-[6rem] flex-col items-center justify-center gap-4 md:flex-row md:gap-0'
    >
      {/* HERO TEXT CONTAINER */}
      <div className='flex flex-col gap-4 md:w-1/2 md:gap-8'>
        <div className='flex flex-col'>
          <h1 className='mt-0'>
            Find, book, rent a car - quick and super easy!
          </h1>
          <h2>
            Streamline your car rental experience with our effortless booking
            process.
          </h2>
        </div>

        <CustomButton
          className='btn-medium sm:btn-large btn-gradient mb-2 self-start text-light sm:mb-0'
          handleClick={() => scrollToCatalog()}
        >
          Explore cars
        </CustomButton>
      </div>
      {/* HERO BG-IMG CONTAINER for desktop */}
      <div className='hero-bg'></div>
      {/* HERO IMG CONTAINER with HERO BG-IMG CONTAINER for mobile */}
      <div className='relative flex flex-1 items-center bg-[url("/images/hero-bg.png")] bg-cover bg-center bg-no-repeat p-4 md:bg-none md:p-0'>
        <MotionImage
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.25, 1] }}
          transition={{ duration: 0.75 }}
          src='/images/hero.png'
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
