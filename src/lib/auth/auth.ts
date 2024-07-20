import NextAuth from 'next-auth'
import Keycloak from 'next-auth/providers/keycloak'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Keycloak],
  callbacks: {
    // authorized: async ({ auth }) => {
    //   console.log('authorized', auth)
    //   return true
    //   // Logged in users are authenticated, otherwise redirect to login page
    //   // return !!auth
    // },
  },
})
