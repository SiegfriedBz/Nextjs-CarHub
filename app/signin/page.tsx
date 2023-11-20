'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import CustomButton from '@/components/buttons/CustomButton'

const SignInPage = () => {
  return (
    <section className='section-top flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-16'>
      {/* IMG */}
      <div className='relative h-[28rem] w-full flex-1'>
        <Image
          src='/images/hero.png'
          alt='sign in'
          fill
          className='object-contain'
        />
      </div>

      <div className='flex w-full flex-col items-start gap-y-2 md:w-1/3 md:gap-y-4'>
        <h1 className='font-semibold'>Welcome</h1>
        <h2 className={twMerge('h2', 'lg:text-3xl')}>
          Log into your account or create a new one using your Google account.
        </h2>

        {/* sign in button */}
        <CustomButton
          className={twMerge(
            'btn',
            'btn-small md:btn-medium lg:btn-large btn-outline mb-4 mt-8 inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap normal-case'
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

        <h4 className='mt-4 text-gray-500 md:mt-16'>
          Have a problem?{' '}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_MAIL_CONTACT}`}
            target='_blank'
            className='underline underline-offset-4 dark:decoration-light dark:decoration-1 dark:underline-offset-4'
          >
            Contact us
          </a>
        </h4>
      </div>
    </section>
  )
}

export default SignInPage
