import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Check if already subscribed
    const [existing] = await pool.query("SELECT * FROM subscribers WHERE email = ?", [email]);
    if (existing.length > 0) {
      return NextResponse.json({ success: true, message: "Already subscribed!" });
    }

    await pool.query("INSERT INTO subscribers (email) VALUES (?)", [email]);

    return NextResponse.json({
      success: true,
      message: "Subscription successful!"
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
