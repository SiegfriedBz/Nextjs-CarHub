export type CustomButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  content: string
  className?: string
  src?: string
  alt?: string
  disabled?: boolean
  handleClick?: () => void
}
