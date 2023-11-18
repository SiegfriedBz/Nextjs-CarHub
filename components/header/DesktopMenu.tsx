import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const DESKTOP_MENU_LINKS = [
  { id: 1, title: 'New Booking', href: '/bookings/new', className: '' },
  { id: 2, title: 'My Bookings', href: '/bookings', className: '' },
  { id: 3, title: 'Company', href: '/company', className: 'hidden xl:flex' },
  { id: 4, title: 'About', href: '/about', className: 'hidden xl:flex' },
  { id: 5, title: 'Socials', href: '/socials', className: 'hidden 2xl:flex' },
]

const DesktopMenu = () => {
  return (
    <div className='hidden md:flex'>
      <ul className='flex gap-x-4'>
        {DESKTOP_MENU_LINKS.map((link) => (
          <li key={link.id} className={link.className}>
            <Link href={link.href} className='underline-gradient-link '>
              <h5 className={twMerge('h5', 'text-primary-dark')}>
                {link.title}
              </h5>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DesktopMenu
