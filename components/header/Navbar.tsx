import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Logo from './Logo'
import DesktopMenu from './DesktopMenu'
import GoogleSignIn from './GoogleSignIn'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <header id='header' className='header'>
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

      <div className='flex items-center gap-x-4'>
        {/* desktop menu hidden md:flex */}
        <DesktopMenu />

        {/* auth */}
        <GoogleSignIn />
      </div>

      {/* mobile menu md:hidden */}
      <MobileMenu />
    </header>
  )
}

export default Navbar
