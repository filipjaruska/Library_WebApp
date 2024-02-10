import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  }

  interface Session {
    jwt: string;
    user: User;
  }
}
