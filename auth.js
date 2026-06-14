import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import pool from "@/libs/db";
import bcrypt from "bcryptjs";

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,

  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const username = credentials?.username;
          const password = credentials?.password;

          if (!username || !password) {
            return null;
          }

          const [users] = await pool.query(
            "SELECT * FROM users WHERE username = ?",
            [username]
          );

          console.log("Hasil query:", users);

          const user = users[0];

          if (!user) {
            console.log("User tidak ditemukan");
            return null;
          }

          const passwordMatch = await bcrypt.compare(
            password,
            user.password
          );

          console.log("Password yang diketik:", password);
          console.log("Hash di DB:", user.password);
          console.log("Password Match:", passwordMatch);

          if (!passwordMatch) {
            console.log("Password salah");
            return null;
          }

          return {
            id: String(user.id),
            name: user.name,
            email: user.username,
          };
        } catch (error) {
          console.error("Authorize Error:", error);
          return null;
        }
      },
    }),
  ],
});