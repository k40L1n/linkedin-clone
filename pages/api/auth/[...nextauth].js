import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "../../../lib/mongodb"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
export const authOptions = {
  //  configure one or more authentication providers, like facebook, spotify etc
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  // the default redirect page after login
  pages: {
    signIn: "/home",
  },
  session: {
    strategy: "jwt",
  },
}

export default NextAuth(authOptions)
