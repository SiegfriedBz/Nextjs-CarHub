'use client'

import { useCallback, useEffect, useState, Fragment } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import DoubleChevron from './DoubleChevron'

type Props = {
  paramName: string
  options: { title: string; value: string }[]
}

const FilterBox = ({ paramName, options }: Props) => {
  // search params
  const readOnlySearchParams = useSearchParams()
  // router
  const router = useRouter()
  // state
  const [selected, setSelected] = useState(options[0])

  // effects - handleFilter
  const handleFilter = useCallback(() => {
    const newSearchParams = new URLSearchParams(readOnlySearchParams)

    if (selected?.value !== '') {
      newSearchParams.set(paramName, selected.value)
    } else {
      newSearchParams.delete(paramName)
    }

    const newSearchParamsString = newSearchParams.toString()

    let newPath: string = ''
    if (!newSearchParamsString) {
      newPath = `${window.location.pathname}` as string
    } else {
      newPath = `${window.location.pathname}?${newSearchParamsString}` as string
    }

    router.push(newPath, { scroll: false })
  }, [selected, paramName, router, readOnlySearchParams])

  useEffect(() => {
    handleFilter()
  }, [handleFilter])

  // effects - handle reset filter
  const resetFilter = useCallback(() => {
    if (!readOnlySearchParams.has(paramName)) {
      setSelected(options[0])
    }
  }, [paramName, options, readOnlySearchParams])

  useEffect(() => {
    resetFilter()
  }, [resetFilter])

  // handler - handleSelect
  const handleSelect = (e: { title: string; value: string }): void => {
    setSelected(e)
  }

  return (
    <div
      className='z-10 flex w-[6.5rem] flex-col 
        rounded-md 
        border-2 border-gray-100 
      bg-white 
        py-2 
        text-primary-dark
      shadow-sm 
       shadow-gray-100
      dark:border
      dark:bg-transparent '
    >
      <Listbox value={selected} onChange={handleSelect}>
        <div className='relative '>
          <Listbox.Button>
            <div className='flex w-[6.5rem] justify-between px-2'>
              <span className='opacity-80 dark:opacity-80'>
                {selected.title}
              </span>
              <DoubleChevron />
            </div>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options>
              <div
                className='absolute z-20 mt-4 
                flex 
                w-[6.5rem]
                flex-col items-center
                rounded-md
                border-2 border-gray-100
                bg-white
                shadow-sm
                shadow-gray-100 dark:border dark:bg-gradient-to-r
                dark:from-slate-900 dark:to-slate-800'
              >
                {options.map((option, index) => (
                  <Listbox.Option
                    key={`${option}-${index}`}
                    value={option}
                    className='w-[6.25rem]'
                  >
                    {({ active }) => (
                      <span
                        className={`inline-block w-[6.25rem] border-collapse rounded-md px-2
                        opacity-80 dark:opacity-80 
                        ${
                          active
                            ? 'bg-primary-light text-light'
                            : 'bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800'
                        }`}
                      >
                        {option.title}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </div>
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default FilterBox
