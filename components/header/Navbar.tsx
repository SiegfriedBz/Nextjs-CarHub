import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Logo from './Logo'
import UserGreeting from './UserGreeting'
import DesktopMenu from './(desktop)/DesktopMenu'
import MobileMenu from './(mobile)/MobileMenu'

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

      {/* signed in user name */}
      <UserGreeting />

      {/* desktop menu hidden md:flex */}
      <DesktopMenu />

      {/* mobile menu md:hidden */}
      <MobileMenu />
    </header>
  )
}

export default Navbar
