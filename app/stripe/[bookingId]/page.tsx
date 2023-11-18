import CustomPaymentFlow from '../(components)/CustomPaymentFlow'

type Props = {
  params: {
    bookingId: string
  }
}

const Stripe = ({ params }: Props) => {
  const { bookingId } = params

  return (
    <section className='section-top'>
      <CustomPaymentFlow bookingId={bookingId} />
    </section>
  )
}

export default Stripe
