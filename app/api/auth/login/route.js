import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    if (rows.length === 0) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }
    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return Response.json({ error: "Invalid password" }, { status: 401 });
    }
    return Response.json({ success: true, user });
  } catch (error) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
