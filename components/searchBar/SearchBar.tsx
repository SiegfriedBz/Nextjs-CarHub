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

    const stringParams = newSearchParams.toString()
    if (!stringParams) {
      return router.push(window.location.pathname, { scroll: false })
    } else {
      return router.push(`${window.location.pathname}?${stringParams}`, {
        scroll: false,
      })
    }
  }

  const handleReset = () => {
    setSelectedMake('Audi')
    setSelectedModel('')
    router.push(window.location.pathname, { scroll: false })
  }

  return (
    <div className='my-4 flex w-full flex-col text-dark/60'>
      <form
        onSubmit={handleSearch}
        className='flex w-full items-center justify-between rounded-md bg-gray-100'
      >
        {/* makes */}
        <div className='search-make-combo-wrapper'>
          <SearchMakeCombo
            makes={makes}
            selectedMake={selectedMake}
            setSelectedMake={setSelectedMake}
          />
        </div>

        {/*  models */}
        <input
          name='model'
          id='model'
          value={selectedModel}
          placeholder='Model...'
          onChange={(e) => setSelectedModel(e.target.value.trim())}
          className='search-model-input'
        />

        {/* buttons */}
        <div className='mx-2 flex min-w-fit items-center justify-between'>
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
