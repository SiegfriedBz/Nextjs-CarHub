# CarHub

CarHub is a Next.js 14 (App Router) application for discovering and renting cars.  
Users can authenticate using Google, explore car listings, book rentals, and securely process payments through Stripe.  
The project is written in TypeScript with a responsive design powered by Tailwind CSS and a dark theme.  
The backend utilizes Prisma as the ORM with a PostgreSQL database.

# Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Set up Prisma](#set-up-prisma)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [Running the Production Server](#running-the-production-server)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo) 🚀

# Prerequisites
Before you begin, ensure you have the following installed and set up:

- **Node.js**: Install Node.js on your machine.
- **PostgreSQL Database**: Set up a PostgreSQL database provider (e.g., [Aiven](https://aiven.io/)).
- **Stripe Account**: Create an account on Stripe for payment processing.
- **Brevo Email Account**: Sign up for Brevo to send booking confirmation emails.
- **RapidAPI Cars API Account**: Obtain an API key from [RapidAPI Cars API](https://api-ninjas.com/api/cars) for car data.
- **IMAGIN.studio API Account**: Register with [IMAGIN.studio API](https://www.imaginstudio.com/solutions/api) for car images (Note: Free tier availability may vary).


# Installation

1. Clone the repository:
```bash
git clone git@github.com:SiegfriedBz/next_app__cars.git
cd next_app__cars
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a .env file in the root directory and add the following environment variables

```env
# NextAuth Configuration
NEXT_PUBLIC_NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_SECRET_ID=

# Social Links
NEXT_PUBLIC_LINKEDIN_URL=
NEXT_PUBLIC_GITHUB_URL=

# RapidAPI Configuration
NEXT_PUBLIC_RAPID_API_KEY=
NEXT_PUBLIC_RAPID_API_HOST=

# IMAGIN.studio Configuration
NEXT_PUBLIC_IMAGIN_STUDIO_API_KEY=

# Prisma Configuration
DATABASE_URL=

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# Admin Contact Email
NEXT_PUBLIC_MAIL_CONTACT=

# Brevo Email Configuration
NEXT_PUBLIC_BREVO_SENDER_NAME="Car Hub"
NEXT_PUBLIC_BREVO_SENDER_EMAIL=
NEXT_PUBLIC_BREVO_API_KEY=

```

# Set up Prisma

Initialize Prisma:
```bash
npx prisma init
```

Generate Prisma Client:
```bash
npx prisma generate
```
       
# Running the Development Server
To start the development server, run:

```bash
npm run dev
  ```

# Building for Production
To build the project for production, run:

```bash
npm run build
```

# Running the Production Server
After building the project, you can start the production server with:

```bash
npm start
```

# Technologies Used

- **Framework**: React, Next.js 14 (App Router)
- **TypeScript**: Provides type safety and improved development experience.

## Frontend:
- **Styling**: Tailwind CSS (responsive design with dark theme support)
  
## Backend:
- **ORM**: Prisma
- **DB**: PostgreSQL
- **Authentication**: NextAuth.js with Google Provider

## Payment Processing:
- **Stripe**

## Live Demo
Visit the live demo of [CarHub](https://car-hub-jade-two.vercel.app/) deployed on Vercel  
PostgreSQL DB hosted on [aiven.io](https://aiven.io/)
