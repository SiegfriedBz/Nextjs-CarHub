import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Hub | Company',
  openGraph: {
    title: 'Car Hub | Company',
    description:
      'Car Hub: Your Key to Seamless Car Rentals. Choose, Book, Drive – Simplifying Your Journey.',
  },
}

const Company = () => {
  return <section className='section-top'>Company</section>
}

export default Company
