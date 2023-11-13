import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer id='footer'>
      <Link href='/' className='flex items-center gap-2'>
        <div className='from-primary to-primary-light flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r'>
          <FontAwesomeIcon icon={faCarSide} className='text-light h-6 w-6' />
        </div>

        <h2
          className={twMerge(
            'h2',
            'from-primary to-primary-light hidden bg-gradient-to-r bg-clip-text text-xl italic text-transparent sm:block'
          )}
        >
          CarHub
        </h2>
      </Link>
      {/* SOCIAL */}

      <ul className='flex gap-2'>
        <li>
          <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '/'} target='_blank'>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className='text-primary h-6 w-6'
            />
          </a>
        </li>
        <li>
          <a href={process.env.NEXT_PUBLIC_GITHUB_URL || ''} target='_blank'>
            <FontAwesomeIcon
              icon={faGithubAlt}
              className='text-primary h-6 w-6'
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
