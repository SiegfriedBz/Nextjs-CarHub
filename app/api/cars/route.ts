import { NextRequest, NextResponse } from 'next/server'

/** get all cars matching query params || all cars with make === 'volkswagen'
 * query limit to 16
 */
export async function GET(request: NextRequest, response: NextResponse) {
  const url = new URL(request.url)

  const make = (url.searchParams.get('make') as string) || 'volkswagen'
  const year = url.searchParams.get('year') as unknown as number
  const fuel_type = url.searchParams.get('fuel_type') as string

  console.log(make, year, fuel_type)
  const params = new URLSearchParams()

  if (make) {
    params.append('make', make)
  }

  if (year) {
    params.append('year', year.toString())
  }

  if (fuel_type) {
    params.append('fuel_type', fuel_type)
  }

  const queryString = params.toString()

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY as string,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST as string,
    },
  }

  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${queryString}&limit=16`,
      options
    )

    const cars = await response.json()

    return NextResponse.json({ cars }, { status: 200 })
  } catch (error) {
    console.error(error)
  }
}
