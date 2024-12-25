import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
  }
}
export interface Job {
  id: string;
  position:string;
  company: string;
  note: string;
  tel:string;
  github:string;
}

