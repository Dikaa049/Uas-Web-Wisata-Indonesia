"use server";  

import { signIn, signOut } from "@/auth";   
import pool from "@/libs/db"; 
import bcrypt from "bcryptjs"; 
import { redirect } from "next/navigation"; 

// --- 1. FUNGSI LOGIN ---
 export async function authenticate(formData) {
  try {
    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirectTo: "/dashboard",
    });
  } catch (error) {
    console.error("Login Error:", error);
    return "Username atau Password salah.";               
          return "Terjadi kesalahan sistem.";      
      }    
    }    
// --- 2. FUNGSI REGISTRASI BARU ---
export async function registerUser(formData) {
  const name = formData.get("name");
  const username = formData.get("username");
  const password = formData.get("password");

  // Validasi agar tidak ada kolom kosong
  if (!name || !username || !password) {
    return "Semua field harus diisi.";
  }

  try {
    // TEST KONEKSI DATABASE
    const [test] = await pool.query("SELECT 1");
    console.log("Koneksi DB:", test);

    // Cek apakah username sudah dipakai
    const [existingUser] = await pool.query(
      "SELECT id FROM users WHERE username = ?",
      [username]
    );

    if (existingUser.length > 0) {
      return "Username sudah digunakan.";
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan ke database
    await pool.query(
      "INSERT INTO users (name, username, password) VALUES (?, ?, ?)",
      [name, username, hashedPassword]
    );

    console.log("User berhasil disimpan:", username);

  } catch (error) {
    console.error("Register Error:", error);
    return "Gagal melakukan registrasi.";
  }

  redirect("/login?message=Registrasi Berhasil, silakan login.");
}