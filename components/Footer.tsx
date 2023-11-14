import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer id='footer'>
      {/* BRAND */}
      <Link href='/' className='flex items-center gap-2'>
        <h5 className='h5'>
          <span className=''>&copy;{year} </span>
          <span
            className={twMerge(
              'h5',
              'from-primary to-primary-light bg-gradient-to-r bg-clip-text text-lg italic text-transparent'
            )}
          >
            CarHub
          </span>
          <span className='h5'> All Rights Reserved.</span>
        </h5>
      </Link>

      {/* MOBILE ONLY */}
      <div className='flex md:hidden'>
        <ul className='flex gap-8'>
          <li>
            <Link href='/about' className='h5'>
              About
            </Link>
          </li>
          <li>
            <Link href='/company' className='h5'>
              Company
            </Link>
          </li>
        </ul>
      </div>

      {/* DESKTOP */}
      <div className='hidden md:flex'>
        <ul className='flex gap-16 lg:gap-24'>
          <li className='text-center'>
            <Link href='/about' className='h5 font-semibold'>
              About
            </Link>
            <ul>
              <li>
                <Link href='/about#how-it-works' className='h6'>
                  How it works
                </Link>
              </li>
              <li>
                <Link href='/about' className='h6'>
                  Featured
                </Link>
              </li>
            </ul>
          </li>
          <li className='text-center'>
            <Link href='/company' className='h5 font-semibold'>
              Company
            </Link>
            <ul>
              <li>
                <Link href='/company#tos' className='h6'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href='/company#privacy-policy' className='h6'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </li>
          <li className='text-center'>
            <Link href='/company' className='h5 font-semibold'>
              Socials
            </Link>
            <ul>
              <li>
                <Link href='/socials#events' className='h6'>
                  Events
                </Link>
              </li>
              <li>
                <Link href='/socials#invite-a-friend' className='h6'>
                  Invite a friend
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* SOCIAL */}
      <ul className='flex gap-4'>
        <li>
          <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '/'} target='_blank'>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className='h-6 w-6 md:h-8 md:w-8'
            />
          </a>
        </li>
        <li>
          <a href={process.env.NEXT_PUBLIC_GITHUB_URL || ''} target='_blank'>
            <FontAwesomeIcon
              icon={faGithubAlt}
              className='h-6 w-6 md:h-8 md:w-8'
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
