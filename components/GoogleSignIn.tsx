'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import CustomButton from './CustomButton'

const GoogleSignIn = () => {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isSignedIn = session?.user?.email != undefined

  return (
    <>
      {isSignedIn ? (
        <div className='flex items-center gap-2'>
          <span>Hello {session?.user?.name?.split(' ')?.[0]}</span>
          <CustomButton
            handleClick={() => signOut()}
            content='SignOut'
            className='btn btn-small btn-outline'
            disabled={isLoading}
          />
        </div>
      ) : (
        <CustomButton
          handleClick={() =>
            signIn('google', {
              callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
            })
          }
          content='SignIn'
          className='btn btn-small btn-outline'
          disabled={isLoading}
        />
      )}
    </>
  )
}

export default GoogleSignIn
