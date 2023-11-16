import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const DoubleChevron = () => {
  return (
    <div className='flex flex-col justify-center'>
      <FontAwesomeIcon
        icon={faChevronUp}
        className='-mb-[0.15rem] h-3 w-3 p-0'
      />
      <FontAwesomeIcon icon={faChevronDown} className='-mt-[0.15rem] h-3 w-3' />
    </div>
  )
}

export default DoubleChevron
