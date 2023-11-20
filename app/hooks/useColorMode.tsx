import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage<string>(
    'car-hub-theme-color',
    'light'
  )

  useEffect(() => {
    const mediaValue = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    setColorMode(mediaValue)
  }, [setColorMode])

  useEffect(() => {
    const documentElementClasses = window.document.documentElement.classList
    documentElementClasses.toggle('dark', colorMode === 'dark')
  }, [colorMode])

  return [colorMode, setColorMode] as const
}
