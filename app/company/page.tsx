export const dynamic = 'force-static'

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
  return (
    <section className='section-top'>
      <h1>Welcome to Car Hub</h1>
      <h2>Your Ultimate Destination for Hassle-Free Car Rentals</h2>

      <br />
      <p className='text-justify'>
        At Car Hub, we believe in transforming the way you experience car
        rentals. We&apos;re not just another car booking app; we&apos;re your
        partner in creating memorable journeys. Our commitment is to provide you
        with a seamless and efficient platform to find the perfect car for your
        needs.
      </p>

      <br />
      <h3 className='font-semibold'>Our Mission</h3>
      <p className='text-justify'>
        At the heart of Car Hub is a mission to redefine the car rental
        experience. We aim to make it easy for you to discover, book, and enjoy
        the ride, ensuring every journey is as exciting as the destination.
      </p>

      <br />
      <h3 className='font-semibold'>Why Choose Car Hub?</h3>
      <ul className='flex list-disc flex-col gap-y-4'>
        <li className='ms-4 mt-2 text-justify'>
          <strong>Comprehensive Selection:</strong> Explore a diverse range of
          cars based on make, model, year, and fuel type. Whether you&apos;re
          looking for a fuel-efficient compact or a spacious SUV, Car Hub has
          the perfect vehicle for every occasion.
        </li>
        <li className='ms-4 text-justify'>
          <strong>User-Friendly Interface:</strong> Our app is designed with you
          in mind. Navigate effortlessly through our platform, customize your
          search, and find the ideal car in just a few clicks.
        </li>
        <li className='ms-4 text-justify'>
          <strong>Secure Payments with Stripe:</strong> Experience peace of mind
          with our secure payment gateway powered by Stripe. Your transactions
          are protected, ensuring a safe and reliable booking process.
        </li>
        <li className='ms-4 text-justify'>
          <strong>Transparent Pricing:</strong> No hidden fees or surprises. Car
          Hub believes in transparent pricing, allowing you to know exactly what
          you&apos;re paying for. Our commitment is to provide value for your
          money.
        </li>
        <li className='ms-4 text-justify'>
          <strong>Customer Support:</strong> Have questions or need assistance?
          Our dedicated customer support team is ready to help. We&apos;re here
          to ensure your Car Hub experience is nothing short of exceptional.
        </li>
      </ul>

      <br />
      <p>
        <strong>Car Hub - Where Every Journey Begins!</strong>
      </p>
    </section>
  )
}

export default Company
