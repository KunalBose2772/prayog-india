import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    // 1. Total Students
    const [students] = await pool.query("SELECT COUNT(*) as count FROM users WHERE role = 'student'");
    
    // 2. Active Enrollments
    const [enrollments] = await pool.query("SELECT COUNT(*) as count FROM enrollments WHERE status = 'active'");
    
    // 3. Total Revenue
    const [revenue] = await pool.query("SELECT SUM(total_amount) as total FROM enrollments");
    
    // 4. Pending Installments
    const [installments] = await pool.query("SELECT COUNT(*) as count FROM installments WHERE status = 'pending'");

    return NextResponse.json({
      success: true,
      stats: {
        totalStudents: students[0].count,
        activeEnrollments: enrollments[0].count,
        totalRevenue: revenue[0].total || 0,
        pendingPayments: installments[0].count
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
