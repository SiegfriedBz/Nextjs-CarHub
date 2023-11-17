import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const BookingPage = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signin')
  }

  return <div>BookingPage</div>
}

export default BookingPage
