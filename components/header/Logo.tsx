'use client'

import { useMobileMenuStore } from '@/zustand/stores'
import Image from 'next/image'

const Logo = () => {
  const { closeMobileMenu } = useMobileMenuStore()

  return (
    <div
      onClick={closeMobileMenu}
      className='relative h-16 w-16 rounded-full ring-1 ring-primary-dark'
    >
      <Image src='/carhub-logo.png' fill alt='Carhub logo' />
    </div>
  )
}

export default Logo
