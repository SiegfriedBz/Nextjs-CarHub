import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T | null>(null)

  useEffect(() => {
    setValue(() => {
      const jsonValue = localStorage.getItem(key)
      if (jsonValue == null) {
        if (typeof initialValue === 'function') {
          return (initialValue as () => T)()
        } else {
          return initialValue
        }
      } else {
        return JSON.parse(jsonValue)
      }
    })
  }, [key, initialValue])

  useEffect(() => {
    if (value == null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])

  return [value, setValue] as const
}
