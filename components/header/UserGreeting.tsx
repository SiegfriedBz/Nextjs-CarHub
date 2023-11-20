'use client'

import { useSession } from 'next-auth/react'
import LoadingPulse from '@/components/LoadingPulse'

const UserGreeting = () => {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isSignedIn = session?.user?.email != undefined

  if (isLoading) return <LoadingPulse />

  return isSignedIn ? (
    <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold italic text-primary-dark'>
      Hi {session?.user?.name?.split(' ')?.[0]}!
    </span>
  ) : null
}

export default UserGreeting
