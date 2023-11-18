import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/utils/prismaClient'

import { NextAuthOptions, getServerSession, User } from 'next-auth'

// augment jwt user type to include isAdmin
declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    isAdmin: boolean
  }
}

// augment session user type to include isAdmin
declare module 'next-auth' {
  /** Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context */
  interface Session {
    user: User & {
      isAdmin: boolean
    }
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  // check user token
  session: {
    strategy: 'jwt',
    /**
     * => 1. jwt callback call :
     * - when JWT is created (user sign in)
     * - when JWT is updated (session accessed in client).
     * The returned value will be encrypted, and it is stored in a COOKIE.
     * Requests to /api/auth/signin, /api/auth/session
     * and calls to getSession(), getServerSession(), useSession()
     * will invoke this function,
     * but ONLY if we are using a JWT session.
     * This method is not invoked when we persist sessions in a database.
     * ===
     * => 2. session callback call :
     * - when a session is checked.
     * By default, only a subset of the token is returned for increased security.
     * If you want to make something available
     * that you added to the token (via the jwt() callback),
     * you have to explicitly forward it here to make it available to the client.
     *  */
  },

  callbacks: {
    async jwt({ token }) {
      // 1. token.email => user from db => add prop to token
      const prismaUser = await prisma.user.findUnique({
        where: {
          email: token.email as string,
        },
      })
      // 2. add user isAdmin prop to token
      return {
        ...token,
        isAdmin: prismaUser?.isAdmin || false,
      }
    },

    async session({ session, token, user, newSession, trigger }) {
      if (token) {
        // 3. token => session : add user isAdmin prop to session
        session.user.isAdmin = token.isAdmin
      }
      return session
    },
  },
}
