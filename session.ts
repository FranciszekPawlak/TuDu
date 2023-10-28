import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "email",
        },
        password: {
          label: "Password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (credentials) {
          return {
            id: "1",
            email: "user@email.com",
          };
        }
        return null;
      },
    }),
  ],
};
