'use client'

import Image from 'next/image'
import { useMobileMenuStore } from '@/zustand/stores'

const Logo = () => {
  const { closeMobileMenu } = useMobileMenuStore()

  return (
    <div
      onClick={closeMobileMenu}
      className='relative h-14 w-14 rounded-full ring-1 ring-primary-dark dark:ring-2'
    >
      <Image src='/images/carhub-logo.png' fill alt='Carhub logo' />
    </div>
  )
}

export default Logo
