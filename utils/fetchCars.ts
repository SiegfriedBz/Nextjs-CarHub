import { CarType } from '@/types'

type FiltersType = {
  make?: string
  model?: string
  fuel_type?: string
  year?: number
  limit?: number
}

export const fetchCars = async (filters: FiltersType) => {
  const { make, model, fuel_type, year, limit } = filters

  const newSearchParams = new URLSearchParams()

  if (make) {
    newSearchParams.set('make', make)
  }
  if (model) {
    newSearchParams.set('model', model)
  }
  if (fuel_type) {
    newSearchParams.set('fuel_type', fuel_type)
  }
  if (year) {
    newSearchParams.set('year', year.toString())
  }
  if (limit) {
    newSearchParams.set('limit', limit.toString())
  }

  const newSearchParamsString = newSearchParams.toString()

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST as string,
    },
  }

  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${newSearchParamsString}`,
      options
    )

    if (!response.ok) throw new Error('Error fetching cars')

    const cars = await response.json()
    return cars
  } catch (error) {
    console.error(error)
  }
}
