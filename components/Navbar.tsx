import React from 'react'
import Logo from './Logo'
import GoogleSignIn from './GoogleSignIn'

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className='flex gap-2'>
        <Logo />
        <h2 className='hidden sm:block'>CarHub</h2>
      </div>

      {/* AUTH */}
      <GoogleSignIn />
    </div>
  )
}

export default Navbar
