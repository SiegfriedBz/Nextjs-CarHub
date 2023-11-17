'use client'

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import CustomButton from '@/components/CustomButton'
import { twMerge } from 'tailwind-merge'

const SignInPage = () => {
  const { data: session, status } = useSession()

  return (
    <section className='section-top flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-32'>
      {/* IMG */}
      <div className='relative h-[28rem] w-full flex-1'>
        <Image src='/hero.png' alt='sign in' fill className='object-contain' />
      </div>

      {/* CTA */}
      <div className='flex w-full flex-col gap-y-4 md:w-1/3'>
        <h2 className='font-semibold text-dark/80'>Welcome</h2>
        <h4 className='text-dark/80'>
          Log into your account or create a new one using social buttons
        </h4>
        <CustomButton
          handleClick={() => signIn('google', { callbackUrl: '/' })}
          className={twMerge(
            'btn',
            'btn-large btn-outline font-bold normal-case'
          )}
        >
          <div className='flex items-center justify-center gap-4'>
            <Image src='/google.png' width={35} height={35} alt='Google logo' />
            Sign in with Google
          </div>
        </CustomButton>

        <h4 className='mt-4 text-dark/80 md:mt-16'>
          Have a problem?{' '}
          <a
            href={`"mailto:${process.env.MAIL_CONTACT}`}
            className='underline underline-offset-4'
          >
            Contact us
          </a>
        </h4>
      </div>
    </section>
  )
}

export default SignInPage
