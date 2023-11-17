'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import CustomButton from './CustomButton'

const GoogleSignIn = () => {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isSignedIn = session?.user?.email != undefined

  return (
    <div>
      {isSignedIn ? (
        <div className='flex items-center gap-2'>
          <span>Hello {session?.user?.name?.split(' ')?.[0]}</span>
          <span className='hidden md:inline-flex'>
            <CustomButton
              handleClick={() => signOut()}
              className='btn btn-small btn-outline'
              disabled={isLoading}
            >
              SignOut
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
            SignIn
          </CustomButton>
        </span>
      )}
    </div>
  )
}

export default GoogleSignIn
