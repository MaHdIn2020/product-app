import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // ✅ Connect to MongoDB
        const usersCollection = await dbConnect("users");
        const user = await usersCollection.findOne({ email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        // ✅ Compare passwords (plain text since no bcrypt)
        if (user.password !== password) {
          throw new Error("Invalid password");
        }

        // ✅ Return user object
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // ✅ Custom login page
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // ✅ Always set this in .env
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
