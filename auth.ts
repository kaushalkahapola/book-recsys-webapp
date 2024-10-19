import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from '@/prisma/prisma_client'
import CredentialsProvider from 'next-auth/providers/credentials';
import { hashPassword, comparePasswords } from '@/utils/password';
import { getUserByEmail } from '@/utils/db';
import { signInSchema } from '@/lib/zod';
import { ZodError } from 'zod';

 
export const { handlers, signIn, signOut, auth} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await signInSchema.parseAsync(credentials);

          const user = await getUserByEmail(email);
          if (!user || !(await comparePasswords(password, user.password!))) {
            throw new Error('Invalid email or password');
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            console.error('Validation error:', error.errors);
          } else {
            console.error('Authorization error:', error);
          }
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token }) {
      // Check if the token.sub is an int and return if it is
      console.log(token.sub, typeof token.sub)
      const isObjectId = token.sub ? /^[0-9a-f]{24}$/.test(token.sub) : false;
      if (!isObjectId) return token;
      const user = await prisma.user.findUnique({ where: { id: token.sub } });
      if (user) {
        token.sub = user.userId.toString();
        token.name = user.name;
        token.email = user.email;
        token.image = ""
      }
      return token;
    },
    async session({ session, token }) {
      // console.log(token)
      if (session?.user) {
        session.user.id = token.sub!;
      }
      return session;
    }
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  }
})