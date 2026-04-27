import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
  try {
    const { name, email, phone, course, message } = await request.json();

    const [result] = await pool.query(
      "INSERT INTO enquiries (name, email, phone, course, message) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, course, message]
    );

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully!",
      id: result.insertId
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
