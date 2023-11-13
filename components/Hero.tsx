'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import CustomButton from './CustomButton'

const Hero = () => {
  const topHeroRef = useRef<HTMLElement>(null)

  const scrollToTop = () => {
    if (topHeroRef.current != null) {
      topHeroRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id='hero'
      ref={topHeroRef}
      // navbar-height 6rem
      className='flex scroll-mt-[6rem] flex-col items-center justify-center gap-8 md:flex-row md:gap-4'
    >
      {/* HERO TEXT CONTAINER */}
      <div className='md:w-1/2'>
        <h1 className={twMerge('h1', 'opacity-80 md:leading-[4rem]')}>
          Find, book, rent a car - quick and super easy!
        </h1>
        <h2 className={twMerge('h2', 'opacity-60 md:leading-10')}>
          Streamline your car rental experience with our effortless booking
          process.
        </h2>

        <CustomButton
          content='Explore cars'
          className='btn-large btn-gradient my-4 gap-4'
          handleClick={scrollToTop}
        />
      </div>
      {/* HERO BG-IMG CONTAINER */}
      <div className='hero-bg'></div>
      {/* HERO IMG CONTAINER */}
      <div className='relative w-full md:flex-1'>
        <Image
          src='/hero.png'
          width={480}
          height={480}
          className='h-full w-full object-cover'
          alt='hero'
        />
      </div>
    </section>
  )
}

export default Hero
