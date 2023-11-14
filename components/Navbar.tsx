import GoogleSignIn from './GoogleSignIn'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header id='header'>
      <Link href='/' className='flex items-center gap-2'>
        <Logo />
        <h2
          className={twMerge(
            'h2',
            'from-primary-dark to-primary-light hidden bg-gradient-to-r bg-clip-text text-4xl italic text-transparent sm:block'
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
