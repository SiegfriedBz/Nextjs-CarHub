'use client'

import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import LoadingPulse from '@/components/LoadingPulse'
import CustomButton from '@/components/buttons/CustomButton'

const DesktopSignin = () => {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isSignedIn = session?.user?.email != undefined

  if (isLoading) return <LoadingPulse />

  return isSignedIn ? (
    <span className='hidden md:inline-flex md:items-center'>
      <CustomButton
        handleClick={() => signOut({ callbackUrl: '/' })}
        className='btn btn-small btn-outline'
        disabled={isLoading}
      >
        Sign out
      </CustomButton>
    </span>
  ) : (
    <span className='hidden md:inline-flex'>
      <CustomButton
        handleClick={() =>
          signIn('google', {
            callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
          })
        }
        className='btn btn-small btn-outline'
        disabled={isLoading}
      >
        <div className='flex items-center justify-center gap-2'>
          <Image
            src='/images/google.png'
            width={15}
            height={15}
            alt='Google logo'
          />
          Sign in
        </div>
      </CustomButton>
    </span>
  )
}

export default DesktopSignin
