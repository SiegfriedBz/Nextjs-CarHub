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
  return (
    <section className='section-top'>
      <h1>About Car Hub</h1>

      <br />
      <p className='text-justify'>
        Welcome to Car Hub, where innovation meets convenience in the world of
        car rentals. Established with a vision to simplify and enhance the way
        people rent cars, Car Hub is a leading platform that brings together an
        extensive range of vehicles and cutting-edge technology.
      </p>

      <br />
      <h3 className='font-semibold'>Our Story</h3>
      <p className='text-justify'>
        Car Hub was born out of a simple idea - to make car rentals accessible
        to everyone. We noticed the challenges people faced in finding the right
        car for their needs, and we set out to create a solution. Our journey
        began with a commitment to providing a user-friendly platform that makes
        renting a car as easy as a few taps on your smartphone.
      </p>

      <br />
      <h3 className='font-semibold'>Our Values</h3>
      <ul className='flex list-disc flex-col gap-y-4'>
        <li className='ps-4 text-justify'>
          <strong>Customer-Centric Approach:</strong> At Car Hub, our customers
          are at the center of everything we do. We are dedicated to
          understanding your needs and providing a service that exceeds your
          expectations.
        </li>
        <li className='ps-4 text-justify'>
          <strong>Innovation:</strong> We embrace technology to enhance your car
          rental experience. From a user-friendly app to secure payment options,
          we leverage innovation to make your journey with Car Hub seamless and
          enjoyable.
        </li>
        <li className='ps-4 text-justify'>
          <strong>Transparency:</strong> Honesty and transparency are the
          foundations of our business. We believe in providing clear
          information, straightforward pricing, and a reliable platform for all
          your car rental needs.
        </li>
      </ul>

      <br />
      <h3 className='font-semibold'>The Car Hub Experience</h3>
      <p className='text-justify'>
        Explore a world of possibilities with Car Hub. Whether you&apos;re
        planning a road trip, need a reliable daily driver, or want to try out a
        luxury vehicle for a special occasion, we have the perfect car waiting
        for you. Our commitment is not just about getting you from point A to B
        - it&apos;s about ensuring you enjoy every moment of the journey.
      </p>

      <br />
      <p className='text-justify'>
        <strong>Join Us on the Road:</strong> Car Hub is more than a car rental
        platform; it&apos;s a community of like-minded individuals who
        appreciate the freedom and adventure that comes with driving. Join us on
        the road, and let Car Hub be your companion in every journey you embark
        upon.
      </p>
    </section>
  )
}

export default About
