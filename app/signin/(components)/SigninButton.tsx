'use client'

import CustomButton from '@/components/buttons/CustomButton'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

const SigninButton = () => {
  return (
    <CustomButton
      className={twMerge(
        'btn',
        'btn-medium lg:btn-large btn-outline my-4 inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap normal-case'
      )}
      handleClick={() => signIn('google', { callbackUrl: '/' })}
    >
      <div className='relative h-4 w-4 md:h-6 md:w-6'>
        <Image
          src='/images/google.png'
          fill
          className='object-contain'
          alt='Google logo'
        />
      </div>
      <span className='normal-case text-inherit'> Sign in with Google</span>
    </CustomButton>
  )
}

export default SigninButton
