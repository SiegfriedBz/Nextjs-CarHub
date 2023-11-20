'use client'

import { useSession } from 'next-auth/react'
import LoadingPulse from '@/components/LoadingPulse'

const UserGreeting = () => {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isSignedIn = session?.user?.email != undefined

  if (isLoading) return <LoadingPulse />

  return isSignedIn ? (
    <h3 className='absolute left-1/2 top-1/2 my-0 -translate-x-1/2 -translate-y-1/2 font-semibold italic lg:left-1/3 '>
      Hi {session?.user?.name?.split(' ')?.[0]}!
    </h3>
  ) : null
}

export default UserGreeting
