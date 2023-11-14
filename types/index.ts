export type CustomButtonProps = {
  btnType?: 'button' | 'submit' | 'reset'
  content: string
  className?: string
  src?: string
  alt?: string
  disabled?: boolean
  handleClick?: () => void
}

export type CarType = {
  id?: string
  make: string
  model: string
  year: number
  fuel_type: 'Fuel' | 'Gas' | 'Electricity'
  price?: number
  photo?: string
  transmission?: 'A' | 'M'
  drive?: string
  city_mpg?: string
}
