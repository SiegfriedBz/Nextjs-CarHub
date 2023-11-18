'use client'

import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton'

const ButtonShowMore = () => {
  const router = useRouter()

  const handleShowMore = () => {
    const newSearchParams = new URLSearchParams(window.location.search)
    const currentLimitValue = newSearchParams.get('limit') || '4'
    const newLimitValue = +currentLimitValue + 4
    newSearchParams.set('limit', newLimitValue.toString())

    const pathName = window.location.pathname

    router.push(`${pathName}?${newSearchParams.toString()}`, {
      scroll: false,
    })
  }
  return (
    <div className='flex justify-center' id='show-more'>
      <CustomButton
        handleClick={handleShowMore}
        className='btn-small btn-gradient'
      >
        Show more
      </CustomButton>
    </div>
  )
}

export default ButtonShowMore
