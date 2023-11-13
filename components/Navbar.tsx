import GoogleSignIn from './GoogleSignIn'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { twMerge } from 'tailwind-merge'

const Navbar = () => {
  return (
    <header id='header'>
      <Link href='/' className='flex items-center gap-2'>
        <div className='from-primary to-primary-light flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r'>
          <FontAwesomeIcon icon={faCarSide} className='text-light h-8 w-8' />
        </div>

        <h2
          className={twMerge(
            'h2',
            'from-primary to-primary-light hidden bg-gradient-to-r bg-clip-text text-4xl italic text-transparent sm:block'
          )}
        >
          CarHub
        </h2>
      </Link>

      {/* AUTH */}
      <GoogleSignIn />
    </header>
  )
}

export default Navbar
