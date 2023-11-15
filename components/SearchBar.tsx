'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { makes, years, fuels } from '@/constants/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import type { CarType } from '@/types'

const SearchBar = () => {
  const router = useRouter()

  //  state
  const [selectedMake, setSelectedMake] = useState<CarType['make']>('Audi')
  const [selectedModel, setSelectedModel] = useState<CarType['model']>('')
  //
  const [selectedYear, setSelectedYear] = useState<number | undefined>(
    undefined
  )
  const [selectedFuelType, setSelectedFuelType] = useState<
    CarType['fuel_type'] | undefined
  >(undefined)

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

    if (selectedYear) {
      newSearchParams.set('year', selectedYear.toString())
    } else {
      newSearchParams.delete('year')
    }

    if (selectedFuelType) {
      newSearchParams.set('fuel_type', selectedFuelType)
    } else {
      newSearchParams.delete('fuel_type')
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
      <div className='flex flex-col items-start'>
        <form
          onSubmit={handleSearch}
          className='my-2 flex w-full flex-row justify-between rounded-lg bg-gray-100 pe-4'
        >
          {/* makes */}
          <div className='flex-1 '>
            <select
              name='make'
              id='make'
              value={selectedMake}
              onChange={(e) => setSelectedMake(e.target.value.trim())}
              className='rounded-lg bg-gray-100 px-2 py-4 outline-none'
            >
              {makes.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          {/*  models */}
          <div className='flex-1'>
            <input
              name='model'
              id='model'
              value={selectedModel}
              placeholder='Type a model...'
              onChange={(e) => setSelectedModel(e.target.value.trim())}
              className='rounded-lg bg-gray-100 px-2 py-4 outline-none'
            />
          </div>

          <div className='flex items-center justify-between'>
            {/* search btn */}
            <button
              type='submit'
              className='ms-2 flex items-center justify-center'
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            {/* reset search btn */}
            <button
              type='button'
              onClick={handleReset}
              className='mx-2 flex items-center justify-center'
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </form>

        <div className='my-2 flex justify-start gap-4'>
          {/* fuel-type */}
          <div className='rounded-md border border-gray-300 px-4 py-2 shadow-sm shadow-gray-300'>
            {/* <select
              name='fuelType'
              id='fuelType'
              value={fuelType}
              onChange={(e) =>
                setFuelType(e.target.value as CarType['fuel_type'])
              }
            >
              {fuels.map((fuel, index) => (
                <option key={index} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select> */}
          </div>
          {/* year */}
          <div className='rounded-md border border-gray-300 px-4 py-2 shadow-sm shadow-gray-300'>
            {/* <select
              name='year'
              id='year'
              value={year}
              onChange={(e) => setYear(+e.target.value)}
              className='border-1 rounded-md border-gray-300'
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
