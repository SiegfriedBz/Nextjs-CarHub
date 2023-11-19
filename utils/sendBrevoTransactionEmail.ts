type EmailDataType = {
  car_make: string
  car_model: string
  recipientName: string
  recipientEmail: string
}

export async function sendBrevoTransactionEmail({
  car_make,
  car_model,
  recipientName,
  recipientEmail,
}: EmailDataType): Promise<void> {
  const apiUrl = 'https://api.brevo.com/v3/smtp/email'
  const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY

  const requestData = {
    sender: {
      name: process.env.NEXT_PUBLIC_BREVO_SENDER_NAME,
      email: process.env.NEXT_PUBLIC_BREVO_SENDER_EMAIL,
    },
    to: [
      {
        name: recipientName,
        email: recipientEmail,
      },
    ],
    subject: 'Car Hub - Booking Confirmation',
    htmlContent: `
      <html>
        <head></head>
        <body>
         <div>
            <h1>Car Hub Booking Confirmation</h1>
            <p>Hello,</p>
            <p>Congratulations! Your booking with Car Hub has been confirmed. We look forward to serving you.</p>
            <p>Booking Details:
              <span> ${car_make}</span>
              <span> - ${car_model}, </span>
            </p>
            <div>
              <p>Thank you for choosing Car Hub. Safe travels!</p>
              <p>The Car Hub Team</p>
            </div>
          </div>
        </body>
      </html>`,
  }

  const headers = new Headers()
  headers.append('accept', 'application/json')
  headers.append('api-key', apiKey as string)
  headers.append('content-type', 'application/json')

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestData),
    })

    if (response.ok) {
      const responseData = await response.json()
      console.log('Email sent successfully:', responseData)
      return responseData
    } else {
      console.error('Error sending email:', response.statusText)
    }
  } catch (error: any) {
    console.error('Error sending email:', error.message)
  }
}
