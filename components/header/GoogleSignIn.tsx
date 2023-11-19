'use client'

import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import CustomButton from '@/components/buttons/CustomButton'

const GoogleSignIn = () => {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isSignedIn = session?.user?.email != undefined

  return (
    <div>
      {isSignedIn ? (
        <div className='flex items-center'>
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold italic text-primary-dark'>
            Hi {session?.user?.name?.split(' ')?.[0]}!
          </span>
          <span className='hidden md:inline-flex'>
            <CustomButton
              handleClick={() => signOut({ callbackUrl: '/' })}
              className='btn btn-small btn-outline'
              disabled={isLoading}
            >
              Sign out
            </CustomButton>
          </span>
        </div>
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
      )}
    </div>
  )
}

export default GoogleSignIn
