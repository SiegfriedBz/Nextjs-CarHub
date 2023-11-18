export type CarType = {
  id?: string
  make: string
  model: string
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  transmission: string
  year: number
  price_per_day_in_cents: number
}

export type BookingType = {
  id?: string
  checkin: Date
  checkout: Date
  status: string
  car_make: string
  car_model: string
  car_year: string
  car_transmission: string
  car_fuel_type: string
  total_price_in_cents: number
}
