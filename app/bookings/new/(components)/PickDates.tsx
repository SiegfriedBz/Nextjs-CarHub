'use client'

import { useEffect } from 'react'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import type { RangeKeyDict } from 'react-date-range'

type Props = {
  startDate: Date
  setStartDate: React.Dispatch<React.SetStateAction<Date>>
  endDate: Date
  setEndDate: React.Dispatch<React.SetStateAction<Date>>
  setUserHasChangedDates: React.Dispatch<React.SetStateAction<boolean>>
}

const PickDates = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setUserHasChangedDates,
}: Props) => {
  // set userHasChangedDates to true when 2 different dates are picked
  useEffect(() => {
    const twoDatesArePicked = startDate.getTime() !== endDate.getTime()
    setUserHasChangedDates(twoDatesArePicked)
  }, [endDate, startDate, setUserHasChangedDates])

  // handler
  const handleSelect = (rangesByKey: RangeKeyDict) => {
    const range = rangesByKey['selection']
    if (range) {
      setStartDate(range.startDate as Date)
      setEndDate(range.endDate as Date)
    }
  }

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }

  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold'>2. Select your dates</h2>
      <style>
        {`
        .rdrDefinedRangesWrapper,
        .rdrInputRangesWrapper {
          display: none;
        }
      `}
      </style>
      <div
        className='mx-auto 
          w-fit
          rounded-md
        bg-blue-100
        shadow-blue-200
          ring
        ring-blue-100
          sm:mx-0
        '
      >
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
          staticRanges={[]}
          inputRanges={[]}
        />
      </div>
    </div>
  )
}

export default PickDates
