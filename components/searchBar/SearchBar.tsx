'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import SearchMakeCombo from './SearchMakeCombo'
import { makes } from '@/constants/'
import type { CarType } from '@/types'

const SearchBar = () => {
  const router = useRouter()

  //  state
  const [selectedMake, setSelectedMake] = useState<CarType['make']>(makes[0])
  const [selectedModel, setSelectedModel] = useState<CarType['model']>('')

  // handlers
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newSearchParams = new URLSearchParams(window.location.search)

    if (selectedMake) {
      newSearchParams.set('make', selectedMake)
    } else {
      newSearchParams.delete('make')
    }

    if (selectedModel) {
      newSearchParams.set('model', selectedModel)
    } else {
      newSearchParams.delete('model')
    }

    const newPath = `${window.location.pathname}?${newSearchParams.toString()}`

    router.push(newPath, { scroll: false })
  }

  const handleReset = () => {
    setSelectedMake('Audi')
    setSelectedModel('')
    router.push(window.location.pathname, { scroll: false })
  }

  return (
    <div className='my-4 flex flex-col text-dark/60'>
      <form
        onSubmit={handleSearch}
        className='flex w-full flex-row items-center rounded-lg bg-gray-100'
      >
        {/* makes */}
        <div className='flex-1 rounded-lg bg-gray-100 p-2 outline-none'>
          <SearchMakeCombo
            makes={makes}
            selectedMake={selectedMake}
            setSelectedMake={setSelectedMake}
          />
        </div>

        {/*  models */}
        <div className='flex-1 bg-gray-100'>
          <input
            name='model'
            id='model'
            value={selectedModel}
            placeholder='Model...'
            onChange={(e) => setSelectedModel(e.target.value.trim())}
            className='h-12 rounded-lg bg-light px-2 py-2 outline-none'
          />
        </div>

        <div className='mx-2 flex items-center justify-between'>
          {/* search btn */}
          <button type='submit' className='flex items-center justify-center'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='h-4 w-4' />
          </button>
          {/* reset search btn */}
          <button
            type='button'
            onClick={handleReset}
            className='mx-2 flex items-center justify-center'
          >
            <FontAwesomeIcon icon={faXmark} className='h-4 w-4' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
