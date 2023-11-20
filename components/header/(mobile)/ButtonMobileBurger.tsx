'use client'

import { useMobileMenuStore } from '@/zustand/stores'

const ButtonMobileBurger = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenuStore()

  return (
    <button
      id='button-mobile-burger'
      className={`${
        isMobileMenuOpen ? 'toggle-mobile-btn' : ''
      } relative right-0 ms-4 h-8 w-8 rounded-2xl text-3xl`}
      onClick={toggleMobileMenu}
    >
      <div
        className={`absolute top-3.5 h-1 w-4 ${
          !isMobileMenuOpen ? 'animate-pulse' : ''
        } 
        rounded 
      bg-primary
        transition-all
        duration-500 before:absolute
        
        before:h-1 before:w-8 before:-translate-x-4
        before:-translate-y-3
        before:rounded
      before:bg-primary-dark
        before:transition-all
        before:duration-500
        before:content-[""]
        after:absolute
        
        after:h-1 after:w-8 after:-translate-x-4
        after:translate-y-3
        after:rounded
      after:bg-primary-dark
        after:transition-all
        after:duration-500
        after:content-[""]
      dark:bg-primary-light
      before:dark:bg-primary
      after:dark:bg-primary
      `}
      ></div>
    </button>
  )
}

export default ButtonMobileBurger
