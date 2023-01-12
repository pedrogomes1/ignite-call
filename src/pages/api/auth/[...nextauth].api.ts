import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID_GOOGLE ?? "",
      clientSecret: process.env.CLIENT_SECRET_GOOGLE ?? "",
      authorization: {
        params: {
          scope:
            "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ account }) {
      console.log(account);
      if (
        !account?.scope?.includes("https://www.googleapis.com/auth/calendar")
      ) {
        return "/register/connect-calendar/?error=permissions";
      }

      return true;
    },
  },
};

export default NextAuth(authOptions);
