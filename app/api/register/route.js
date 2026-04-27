import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, phone, password, courseId, batchId, amount, isInstallment } = await req.json();

    // 1. Hash Password
    const hashedPassword = await bcrypt.hash(password || "Prayog@2026", 10);

    // 2. Create User
    const [userResult] = await pool.execute(
      "INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, 'student')",
      [name, email, hashedPassword, phone]
    );
    const userId = userResult.insertId;

    // 3. Create Enrollment
    const [enrollResult] = await pool.execute(
      "INSERT INTO enrollments (user_id, course_id, batch_id, total_amount, payment_status) VALUES (?, ?, ?, ?, ?)",
      [userId, courseId, batchId, amount, isInstallment ? 'partial' : 'pending']
    );
    const enrollmentId = enrollResult.insertId;

    // 4. Create Installments if applicable
    if (isInstallment) {
      const installmentAmount = amount / 3;
      const dueDates = [
        new Date(), // Today
        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 1 month
        new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)  // 2 months
      ];

      for (let i = 0; i < 3; i++) {
        await pool.execute(
          "INSERT INTO installments (enrollment_id, amount, due_date, status) VALUES (?, ?, ?, ?)",
          [enrollmentId, installmentAmount, dueDates[i], i === 0 ? 'pending' : 'pending']
        );
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: "Registration successful. Please proceed to payment.",
      enrollmentId 
    });

  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
