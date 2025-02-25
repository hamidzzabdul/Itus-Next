import { verifyPassword } from "@/lib/utils";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials || typeof credentials.email !== "string" || typeof credentials.password !== "string") {
            throw new Error("Missing credentials");
        }

        // Find user by email
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string},
        });

        if (!user) {
          throw new Error("User not found");
        }

        // Validate password
        const isValid = await verifyPassword(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Invalid credentials");
        }

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin", 
  },
  
});
