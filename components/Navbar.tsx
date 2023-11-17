import GoogleSignIn from './GoogleSignIn'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <header id='header'>
      <Link href='/' className='flex items-center gap-2'>
        <Logo />
        <h2
          className={twMerge(
            'h2',
            ' text-gradient hidden text-4xl italic sm:block'
          )}
        >
          CarHub
        </h2>
      </Link>

      {/* AUTH */}
      <GoogleSignIn />

      {/* mobile menu */}
      <MobileMenu />
    </header>
  )
}

export default Navbar
