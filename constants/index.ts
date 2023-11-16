export const makes: string[] = [
  'Audi',
  'Bentley',
  'BMW',
  'Buick',
  'Cadillac',
  'Chevrolet',
  'Chrysler',
  'Citroen',
  'Dodge',
  'Ferrari',
  'Fiat',
  'Ford',
  'GMC',
  'Honda',
  'Hyundai',
  'Infiniti',
  'Jaguar',
  'Jeep',
  'Kia',
  'Lamborghini',
  'Land Rover',
  'Lexus',
  'Lincoln',
  'Maserati',
  'Mazda',
  'McLaren',
  'Mercedes-Benz',
  'MINI',
  'Mitsubishi',
  'Nissan',
  'Porsche',
  'Ram',
  'Rolls-Royce',
  'Subaru',
  'Tesla',
  'Toyota',
  'Volkswagen',
  'Volvo',
]

type OptionType = {
  title: string
  value: string
}

export const years: OptionType[] = [
  { title: 'Year', value: '' },
  { title: '2015', value: '2015' },
  { title: '2016', value: '2016' },
  { title: '2017', value: '2017' },
  { title: '2018', value: '2018' },
  { title: '2019', value: '2019' },
  { title: '2020', value: '2020' },
  { title: '2021', value: '2021' },
  { title: '2022', value: '2022' },
  { title: '2023', value: '2023' },
]

export const fuels: OptionType[] = [
  { title: 'Fuel', value: '' },
  { title: 'Gas', value: 'Gas' },
  { title: 'Electricity', value: 'Electricity' },
]
