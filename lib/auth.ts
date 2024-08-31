import { createUser } from "@/app/actions/users/createUser";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret:
        process.env.AUTH_GOOGLE_SECRET!,
    }),
    // Add other providers here
  ],
  // Add other options like callbacks, pages, etc.
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          // Call your server action here
          await createUser({
            name: user.name,
            email: user.email,
          });
          return true;
        } catch (error) {
          console.error(
            "Error calling server action:",
            error,
          );
          return false;
        }
      }
      return true;
    },
  },
};
