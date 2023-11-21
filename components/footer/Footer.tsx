import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import SocialLinks from './SocialLinks'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer id='footer' className='footer'>
      {/* MOBILE ONLY */}
      <div className='flex w-full flex-col items-center justify-between md:hidden'>
        <div className='flex w-full justify-between'>
          {/* links */}
          <ul className='flex gap-2'>
            <li>
              <Link
                href='/company'
                className='h5 underline-gradient-link bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent'
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='h5 underline-gradient-link bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent'
              >
                About
              </Link>
            </li>
          </ul>
          {/* social */}
          <SocialLinks />
        </div>

        {/* brand */}
        <span className='mt-2 inline-block text-sm'>
          <span>&copy;{year} </span>
          <Link
            href='/'
            className='underline-gradient-link font-semibold italic'
          >
            CarHub
          </Link>
          <span className=''> All Rights Reserved.</span>
        </span>
      </div>

      {/* DESKTOP */}
      <div className='hidden w-full items-center justify-between gap-2 md:flex'>
        {/* brand */}
        <h5 className='h5'>
          <span className=''>&copy;{year} </span>
          <Link
            href='/'
            className={twMerge('h5', 'underline-gradient-link  text-lg italic')}
          >
            CarHub
          </Link>
          <span className='h5'> All Rights Reserved.</span>
        </h5>
        {/* links */}
        <ul className='flex gap-16 lg:gap-24'>
          <li className='text-center'>
            <Link
              href='/company'
              className='underline-gradient-link h5 bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-lg font-semibold text-transparent'
            >
              Company
            </Link>
          </li>
          <li className='text-center'>
            <Link href='/about' className='h5 underline-gradient-link  text-lg'>
              About
            </Link>
          </li>
        </ul>
        {/* social */}
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
