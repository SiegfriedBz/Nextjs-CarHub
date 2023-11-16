'use client'

import { useState } from 'react'
import { Combobox } from '@headlessui/react'
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
    <div className='flex w-full flex-1 items-center justify-start rounded-md border-2 border-gray-100 bg-gray-100 shadow-lg shadow-gray-100'>
      <div className='relative w-full'>
        <Combobox value={selectedMake} onChange={setSelectedMake}>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            className='h-12 w-full cursor-pointer rounded-md bg-white p-4 outline-none'
          />
          <Combobox.Options className='absolute z-50 mt-2 max-h-40 w-full overflow-y-auto rounded-md border border-gray-100 bg-white p-2 shadow-lg shadow-gray-100 outline-none'>
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
        </Combobox>
      </div>
    </div>
  )
}

export default SearchMakeCombo
