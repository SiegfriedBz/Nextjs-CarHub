import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Logo from './Logo'
import DesktopMenu from './(desktop)/DesktopMenu'
import MobileMenu from './(mobile)/MobileMenu'
import UserGreeting from './UserGreeting'
import ButtonToggleTheme from './ButtonToggleTheme'

const Navbar = () => {
  return (
    <header id='header' className='header'>
      <Link href='/' className='flex items-center gap-2'>
        <Logo />
        <h2 className={twMerge('h2', '  hidden text-4xl italic sm:block')}>
          CarHub
        </h2>
      </Link>

      {/* signed in user name */}
      <UserGreeting />

      {/* desktop menu hidden md:flex */}
      <div className='hidden justify-between md:flex md:gap-x-4'>
        <ButtonToggleTheme />
        <DesktopMenu />
      </div>

      {/* mobile menu md:hidden */}
      <div className='flex justify-between md:hidden'>
        <ButtonToggleTheme />
        <MobileMenu />
      </div>
    </header>
  )
}

export default Navbar
