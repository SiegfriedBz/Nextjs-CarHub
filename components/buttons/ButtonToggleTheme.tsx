'use client'

import { useEffect, useState } from 'react'
import { useColorMode } from '@/app/hooks/useColorMode'
import { MoonIcon, SunIcon } from '@/components/Icons'

const ButtonToggleTheme = () => {
  const [isClient, setIsClient] = useState(false)
  const [colorMode, setColorMode] = useColorMode()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  const toggleIcon = (
    <>
      {isClient ? (
        colorMode === 'light' ? (
          <MoonIcon className='w-[34px] md:w-[35px]' />
        ) : (
          <SunIcon className='w-[35px] md:w-[36px]' />
        )
      ) : (
        ''
      )}
    </>
  )

  return (
    <button
      id='button-toggle-theme'
      type='button'
      onClick={toggleColorMode}
      className='text-2xl text-secondary dark:text-light dark:opacity-90'
    >
      {toggleIcon}
    </button>
  )
}

export default ButtonToggleTheme
