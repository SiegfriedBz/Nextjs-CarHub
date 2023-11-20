'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'

type Props = {
  scrollToTop: () => void
}

const ButtonScrollToTop = ({ scrollToTop }: Props) => {
  return (
    <button
      type='button'
      onClick={scrollToTop}
      className='absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-primary-dark to-primary-light p-1 outline-none'
    >
      <FontAwesomeIcon
        icon={faCircleUp}
        className='h-4 w-4 rounded-full text-light transition duration-300 ease-in-out hover:scale-110 dark:opacity-80 md:h-6 md:w-6'
      />
    </button>
  )
}

export default ButtonScrollToTop
