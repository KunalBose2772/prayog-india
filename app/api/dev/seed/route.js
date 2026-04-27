import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import { initDb } from "@/lib/init-db";

export async function GET() {
  try {
    // 0. Init Schema
    await initDb();

    // 1. Admin
    const adminPass = await bcrypt.hash("admin123", 10);
    await pool.query(
      "INSERT IGNORE INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      ["Admin Head", "admin@prayogindia.in", adminPass, "admin"]
    );

    // 2. Courses
    await pool.query(
      "INSERT IGNORE INTO courses (id, title, description, price, type, duration) VALUES (?, ?, ?, ?, ?, ?)",
      [1, "Industrial Robotics", "Master the world of automation.", 15000, "offline", "6 Months"]
    );
    await pool.query(
      "INSERT IGNORE INTO courses (id, title, description, price, type, duration) VALUES (?, ?, ?, ?, ?, ?)",
      [2, "AI Foundation", "Learn the basics of Machine Learning.", 12000, "online", "4 Months"]
    );

    // 3. Student
    const studentPass = await bcrypt.hash("student123", 10);
    const [userRes] = await pool.query(
      "INSERT IGNORE INTO users (id, name, email, password, role) VALUES (?, ?, ?, ?, ?)",
      [2, "Rahul Sharma", "rahul@gmail.com", studentPass, "student"]
    );

    // 4. Enrollment
    await pool.query(
      "INSERT IGNORE INTO enrollments (user_id, course_id, total_amount, amount_paid, status) VALUES (?, ?, ?, ?, ?)",
      [2, 1, 15000, 5000, "active"]
    );

    // 5. Installments
    await pool.query(
      "INSERT IGNORE INTO installments (enrollment_id, amount, due_date, status) VALUES (?, ?, ?, ?)",
      [1, 5000, "2026-05-15", "pending"]
    );

    return NextResponse.json({ success: true, message: "Database seeded!" });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
