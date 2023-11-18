'use client'

import { twMerge } from 'tailwind-merge'

type CustomButtonProps = {
  btnType?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  handleClick?: () => void
  children?: React.ReactNode
}

const CustomButton = ({
  btnType = 'button',
  className = '',
  disabled = false,
  handleClick,
  children,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      onClick={handleClick}
      className={twMerge(
        `btn flex items-center justify-center`,
        `${className} ${
          disabled ? 'cursor-not-allowed opacity-50 hover:scale-100' : ''
        }`
      )}
    >
      <span>{children}</span>
    </button>
  )
}

export default CustomButton
