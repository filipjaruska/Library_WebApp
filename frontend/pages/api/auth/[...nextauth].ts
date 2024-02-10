import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { User } from "next-auth";

export default NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        identifier: {
          label: "Email",
          type: "text",
          placeholder: "Email@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(
          process.env.NEXT_PUBLIC_STRAPI_API_URL + `/api/auth/local`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              identifier: credentials!.identifier,
              password: credentials!.password,
            }),
          }
        );
        const data = await res.json();
        console.log({ data });

        if (data.user) {
          const user: User = {
            id: data.user.id,
            username: data.user.username,
            email: data.user.email,
            provider: data.user.provider,
            confirmed: data.user.confirmed,
            blocked: data.user.blocked,
            createdAt: data.user.created_at,
            updatedAt: data.user.updated_at,
          };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});
