import Image from 'next/image'

const Logo = () => {
  return (
    <div className='ring-primary-dark relative h-16 w-16 rounded-full ring-1'>
      <Image src='/carhub-logo.png' fill alt='Carhub logo' />
    </div>
  )
}

export default Logo
