'use client'

import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import type { CarType } from '@/types'

type Props = {
  makes: CarType['make'][]
  selectedMake: string
  setSelectedMake: (make: string) => void
}

const SearchMakeCombo = ({ makes, selectedMake, setSelectedMake }: Props) => {
  const [query, setQuery] = useState('')

  const filteredMakes =
    query === ''
      ? makes
      : makes.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className='flex w-full flex-1 items-center justify-start rounded-md'>
      <div className='relative w-full'>
        <Combobox value={selectedMake} onChange={setSelectedMake}>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            className='h-12 w-full cursor-pointer rounded-md 
            bg-white 
              p-2 opacity-80 
              outline-none
              dark:bg-transparent
              dark:opacity-80'
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Combobox.Options
              className='absolute z-50 mt-2 max-h-64 w-full
              overflow-y-auto
              rounded-md
              border-2 border-gray-200
              bg-white
              p-2
              shadow-sm
              shadow-gray-100 outline-none
              dark:border
              dark:bg-gradient-to-r 
              dark:from-slate-900 dark:to-slate-800'
            >
              {filteredMakes.map((make) => (
                <Combobox.Option
                  key={make}
                  value={make}
                  className='relative w-full cursor-pointer'
                >
                  <span className='opacity-80 dark:opacity-80'>{make}</span>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </Combobox>
      </div>
    </div>
  )
}

export default SearchMakeCombo
