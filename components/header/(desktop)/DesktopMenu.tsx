import Link from 'next/link'
import DesktopSignin from './DesktopSignin'

const DESKTOP_MENU_LINKS = [
  { id: 1, title: 'New Booking', href: '/bookings/new', className: '' },
  {
    id: 2,
    title: 'My Bookings',
    href: '/bookings',
    className: 'hidden lg:flex',
  },
  { id: 3, title: 'Company', href: '/company', className: 'hidden xl:flex' },
  { id: 4, title: 'About', href: '/about', className: 'hidden xl:flex' },
]

const DesktopMenu = () => {
  return (
    <div className='hidden md:flex md:items-center md:gap-x-4'>
      <ul className='flex gap-x-4'>
        {DESKTOP_MENU_LINKS.map((link) => (
          <li key={link.id} className={link.className}>
            <Link href={link.href} className='underline-gradient-link '>
              <h5>{link.title}</h5>
            </Link>
          </li>
        ))}
      </ul>

      {/* auth */}
      <DesktopSignin />
    </div>
  )
}

export default DesktopMenu
