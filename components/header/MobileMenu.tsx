'use client'

import { useMobileMenuStore } from '@/zustand/stores'
import { useSession, signIn, signOut } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import ButtonMobileBurger from './ButtonMobileBurger'

const MOBILE_MENU_LINKS = (isSignedIn: boolean) => [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: `${isSignedIn ? 'Sign out' : 'Sign in'}`, href: '/signin' },
  { id: 3, title: 'My Bookings', href: '/bookings' },
  { id: 4, title: 'New Booking', href: '/bookings/new' },
  { id: 5, title: 'Company', href: '/company' },
  { id: 6, title: 'About', href: '/about' },
  { id: 7, title: 'Socials', href: '/socials' },
]

const MobileMenu = () => {
  // session
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isSignedIn = session?.user?.email != undefined

  // store
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenuStore()

  return (
    <div className='flex items-center justify-center md:hidden'>
      <ButtonMobileBurger />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className='mobile-menu'
          >
            <ul className='flex flex-col items-center gap-4'>
              {/* links */}
              {MOBILE_MENU_LINKS(isSignedIn).map((link) => {
                const linkIsSignInOrSignOut =
                  link.title === 'Sign in' || link.title === 'Sign out'

                return (
                  <li key={link.id}>
                    <CustomLink
                      href={
                        linkIsSignInOrSignOut && isSignedIn
                          ? undefined
                          : link.href
                      }
                      handleClick={() => {
                        linkIsSignInOrSignOut && isSignedIn
                          ? signOut({ callbackUrl: '/' })
                          : toggleMobileMenu()
                      }}
                    >
                      <h2
                        className={twMerge(
                          'h2',
                          'text-3xl tracking-wide text-light/80'
                        )}
                      >
                        {link.title}
                      </h2>
                    </CustomLink>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu

type CustomLinkProps = {
  children: React.ReactNode
  href?: string
  handleClick: () => void
}
const CustomLink = (props: CustomLinkProps) => {
  const isLink = props.href != undefined
  const children = props.children

  if (isLink) {
    return (
      <Link onClick={props.handleClick} href={props.href as string}>
        {children}
      </Link>
    )
  } else {
    return <button onClick={props.handleClick}>{children}</button>
  }
}
