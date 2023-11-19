import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Hub | About',
  openGraph: {
    title: 'Car Hub | About',
    description:
      'Car Hub: Your Key to Seamless Car Rentals. Choose, Book, Drive – Simplifying Your Journey.',
  },
}

const About = () => {
  return <section className='section-top'>About</section>
}

export default About
