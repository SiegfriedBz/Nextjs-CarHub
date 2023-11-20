import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {
  return (
    <ul className='flex gap-2 md:gap-4'>
      <li>
        <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '/'} target='_blank'>
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className='h-6 w-6 text-primary-dark transition duration-300 ease-in-out hover:scale-110 dark:text-primary md:h-8 md:w-8'
          />
        </a>
      </li>
      <li>
        <a href={process.env.NEXT_PUBLIC_GITHUB_URL || ''} target='_blank'>
          <FontAwesomeIcon
            icon={faGithubAlt}
            className='h-6 w-6 text-primary-dark transition duration-300 ease-in-out hover:scale-110 dark:text-primary md:h-8 md:w-8'
          />
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks
