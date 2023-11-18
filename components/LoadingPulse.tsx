const LoadingPulse = () => {
  return (
    <div className='flex justify-center space-x-2'>
      <span className='inline-block h-4 w-4 animate-pulse rounded-full bg-gradient-to-r from-primary-dark to-primary-light'></span>
      <span className='inline-block h-4 w-4 animate-pulse rounded-full bg-gradient-to-r from-primary-dark to-primary-light'></span>
      <span className='inline-block h-4 w-4 animate-pulse rounded-full bg-gradient-to-r from-primary-dark to-primary-light'></span>
    </div>
  )
}

export default LoadingPulse
