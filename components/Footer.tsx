import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import SocialLinks from './SocialLinks'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer id='footer'>
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
        <span className='text-sm'>
          <span>&copy;{year} </span>
          <Link
            href='/'
            className='underline-gradient-link text-gradient italic'
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
            className={twMerge(
              'h5',
              'underline-gradient-link text-gradient text-lg italic'
            )}
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
            <ul>
              <li>
                <Link
                  href='/company#tos'
                  className='h6 underline-gradient-link'
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href='/company#privacy-policy'
                  className='h6 underline-gradient-link'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </li>
          <li className='text-center'>
            <Link
              href='/about'
              className='h5 underline-gradient-link text-gradient text-lg'
            >
              About
            </Link>
            <ul>
              <li>
                <Link
                  href='/about#how-it-works'
                  className='h6 underline-gradient-link'
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link href='/about' className='h6 underline-gradient-link'>
                  Featured
                </Link>
              </li>
            </ul>
          </li>
          <li className='hidden text-center lg:block'>
            <Link
              href='/company'
              className='h5 underline-gradient-link text-gradient text-lg'
            >
              Socials
            </Link>
            <ul>
              <li>
                <Link
                  href='/socials#events'
                  className='h6 underline-gradient-link'
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href='/socials#invite-a-friend'
                  className='h6 underline-gradient-link'
                >
                  Invite a friend
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        {/* social */}
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
