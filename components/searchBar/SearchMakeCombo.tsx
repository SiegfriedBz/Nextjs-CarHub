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
    <div className='flex w-full flex-1 items-center justify-start rounded-md border-4 border-gray-100 bg-gray-100 shadow-sm shadow-gray-100'>
      <div className='relative w-full'>
        <Combobox value={selectedMake} onChange={setSelectedMake}>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            className='h-12 w-full cursor-pointer rounded-md bg-white p-2 outline-none'
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Combobox.Options className='absolute z-50 max-h-64 w-full overflow-y-auto rounded-md border-4 border-gray-100 bg-white p-2 shadow-sm shadow-gray-100 outline-none'>
              {filteredMakes.map((make) => (
                <Combobox.Option
                  key={make}
                  value={make}
                  className='relative w-full cursor-pointer'
                >
                  <span>{make}</span>
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
