import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [students] = await pool.query("SELECT id, name, email, phone, role, created_at FROM users ORDER BY created_at DESC");
    
    return NextResponse.json({
      success: true,
      students
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
