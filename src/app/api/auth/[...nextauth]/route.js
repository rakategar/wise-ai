import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }
          console.log(user);
          return {
            id: user._id,
            email: user.email,
            username: user.username, // Pastikan ini disertakan
          };
        } catch (error) {
          console.log("Error: ", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // Pastikan ini sesuai dengan halaman login Anda
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username; // Tambahkan username ke token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.username = token.username; // Masukkan username ke session
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
