'use client'

import Image from 'next/image'

import { signIn, signOut, useSession } from 'next-auth/react'
import LoadingPulse from '@/components/LoadingPulse'
import CustomButton from '@/components/buttons/CustomButton'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'

const DesktopSignin = () => {
  // router
  const router = useRouter()

  // session
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isSignedIn = session?.user?.email != undefined

  if (isLoading) return <LoadingPulse />

  return isSignedIn ? (
    <>
      {/* sign out button */}
      <CustomButton
        className={twMerge(
          'btn',
          'btn-small btn-outline hidden w-fit items-center justify-center gap-2 md:inline-flex'
        )}
        handleClick={() => signOut({ callbackUrl: '/' })}
      >
        <Image
          src='/images/google.png'
          width={15}
          height={15}
          alt='Google logo'
        />
        Sign out
      </CustomButton>
    </>
  ) : (
    <>
      {/* sign in button */}
      <CustomButton
        className={twMerge(
          'btn',
          'btn-small btn-outline hidden w-fit items-center justify-center gap-2 md:inline-flex'
        )}
        handleClick={() => router.push('/signin')}
      >
        <Image
          src='/images/google.png'
          width={15}
          height={15}
          alt='Google logo'
        />
        Sign in
      </CustomButton>
    </>
  )
}

export default DesktopSignin
