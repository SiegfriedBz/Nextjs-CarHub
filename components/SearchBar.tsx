'use client'

import { useState } from 'react'
import { makes, years, fuels } from '@/constants/'
import { useCarStore } from '@/zustand/store'
import { CarType } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  // zustand store
  const { setCars } = useCarStore()
  // state
  const [make, setMake] = useState<string>(() => makes[0])
  const [model, setModel] = useState<string | undefined>(undefined)
  const [year, setYear] = useState<number>(() => years[0])
  const [fuelType, setFuelType] = useState<CarType['fuel_type']>(() => fuels[0])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // fetch cars - limit to 16
      const params = new URLSearchParams()

      if (make) {
        params.append('make', make.toLowerCase())
      }

      if (year) {
        params.append('year', year.toString())
      }

      if (fuelType) {
        params.append('fuel_type', fuelType.toLowerCase())
      }

      const queryString = params.toString()
      console.log(queryString)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/cars?${queryString}`
      )

      if (!response.ok) throw new Error('Error fetching cars')

      const data = await response.json()

      // set cars in zustand store
      setCars(data?.cars || [])
    } catch (error) {
      console.log(error)
    }
  }

  const reset = async () => {
    try {
      // fetch cars - limit to 16

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/cars`
      )

      if (!response.ok) throw new Error('Error fetching cars')

      const data = await response.json()

      // set cars in zustand store
      setCars(data?.cars || [])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='text-dark/60 my-4 flex flex-col'>
      <form onSubmit={handleSubmit} className='flex flex-col items-start'>
        <div className='my-2 flex w-full flex-row justify-between rounded-lg bg-gray-100 pe-4'>
          <div className='flex-1 '>
            {/* make */}
            <select
              name='make'
              id='make'
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className='rounded-lg bg-gray-100 px-2 py-4 outline-none'
            >
              {makes.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          <div className='flex-1'>
            {/* model */}
            <select
              name='model'
              id='model'
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className='rounded-lg bg-gray-100 px-2 py-4 outline-none'
            >
              {makes.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          <div className='flex items-center justify-between'>
            {/* submit search */}
            <button
              type='submit'
              className='ms-2 flex items-center justify-center'
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            {/* reset search */}
            <button
              type='button'
              className='mx-2 flex items-center justify-center'
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>

        <div className='my-2 flex justify-start gap-4'>
          {/* fuel-type */}
          <div className='rounded-md border border-gray-300 px-4 py-2 shadow-sm shadow-gray-300'>
            <select
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
            </select>
          </div>
          {/* year */}
          <div className='rounded-md border border-gray-300 px-4 py-2 shadow-sm shadow-gray-300'>
            <select
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
            </select>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
