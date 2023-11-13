'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import type { CustomButtonProps } from '@/types'

const CustomButton = ({
  btnType = 'button',
  content,
  className = '',
  src,
  alt = '',
  disabled = false,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      onClick={handleClick}
      className={twMerge(
        'btn flex max-w-max items-center justify-between',
        `${className} ${
          disabled ? 'cursor-not-allowed opacity-50 hover:scale-100' : ''
        }`
      )}
    >
      <span>{content}</span>

      {src && (
        <Image
          src={src}
          width={32}
          height={32}
          className='h-full w-full object-cover'
          alt={alt}
        />
      )}
    </button>
  )
}

export default CustomButton
