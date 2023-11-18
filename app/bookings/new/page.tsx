'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import PickCar from './(components)/PickCar'
import PickDates from './(components)/PickDates'
import ConfirmSelection from './(components)/ConfirmSelection'
import { car_price_per_day_in_cents } from '@/constants'
import type { CarType } from '@/types'

const NewBookingPage = () => {
  // session
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isAuthenticated = status === 'authenticated'

  // router
  const router = useRouter()

  // state
  const topRef = useRef<HTMLHeadingElement>(null)
  const datePickerRef = useRef<HTMLDivElement>(null)
  const confirmSelectionRef = useRef<HTMLDivElement>(null)
  const [selectedCar, setSelectedCar] = useState<CarType | undefined>(undefined)
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [userHasChangedDates, setUserHasChangedDates] = useState<boolean>(false)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [isReset, setIsReset] = useState(false)

  /** redirect to sign in page if not authenticated */
  useEffect(() => {
    if (isLoading || isAuthenticated) return

    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      router.push('/signin')
    }, 1500)

    return () => {
      if (timer != null) {
        clearTimeout(timer)
      }
    }
  }, [isLoading, isAuthenticated, router])

  /**  calculate total price when dates are changed */
  // TODO: create different car prices
  const calculateTotalPrice = useCallback(() => {
    const totalPrice =
      (((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) *
        car_price_per_day_in_cents) /
      100

    return totalPrice
  }, [endDate, startDate])

  useEffect(() => {
    if (!userHasChangedDates) return

    const totalPrice = calculateTotalPrice()
    setTotalPrice(totalPrice)
  }, [userHasChangedDates, calculateTotalPrice])

  /** scroll to top on selection reset */
  useEffect(() => {
    if (!isReset || topRef.current == null) return

    scrollToTop()
    setIsReset(false)
  }, [isReset])

  /**  scroll to date picker when car is selected */
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null

    if (selectedCar == undefined || datePickerRef.current == null) return

    timer = setTimeout(() => {
      scrollToDatePicker()
    }, 250)

    return () => {
      if (timer != null) {
        clearTimeout(timer)
      }
    }
  }, [selectedCar])

  /** scroll to confirm selection when dates are selected */
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null

    if (!userHasChangedDates || confirmSelectionRef.current == null) return

    timer = setTimeout(() => {
      scrollToConfirmSelection()
    }, 250)

    return () => {
      if (timer != null) {
        clearTimeout(timer)
      }
    }
  }, [userHasChangedDates])

  // helpers
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  const scrollToDatePicker = () => {
    datePickerRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  const scrollToConfirmSelection = () => {
    confirmSelectionRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <>
      <section className='section-top'>
        <h1 ref={topRef} className='scroll-mt-32'>
          Create a new Booking
        </h1>

        {/* car picker
          display user's current favorite cars (zustand persist store)
          (i.e. cars added from "Book" button click or from "Add to favorites" button click)  
         */}
        <PickCar selectedCar={selectedCar} setSelectedCar={setSelectedCar} />

        {/* date picker  */}
        <AnimatePresence>
          {selectedCar != undefined ? (
            <motion.div
              id='bookings-date-picker'
              ref={datePickerRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='mt-4 scroll-mt-24'
            >
              <PickDates
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                setUserHasChangedDates={setUserHasChangedDates}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Confirm */}
        <AnimatePresence>
          {userHasChangedDates ? (
            <motion.div
              id='bookings-confirm-selection'
              ref={confirmSelectionRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='mt-4 scroll-mt-24'
            >
              <ConfirmSelection
                selectedCar={selectedCar}
                startDate={startDate}
                endDate={endDate}
                totalPrice={totalPrice}
                setSelectedCar={setSelectedCar}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setIsReset={setIsReset}
                scrollToTop={scrollToTop}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>
    </>
  )
}

export default NewBookingPage
