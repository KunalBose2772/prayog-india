import { NextResponse } from "next/server";
import crypto from "crypto";
import pool from "@/lib/db";

export async function POST(req) {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      enrollmentId,
      amount,
      installmentId
    } = await req.json();

    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "mock_secret")
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // 1. Update Enrollment
      await pool.query(
        "UPDATE enrollments SET amount_paid = amount_paid + ?, payment_status = IF(amount_paid + ? >= total_amount, 'paid', 'partial') WHERE id = ?",
        [amount, amount, enrollmentId]
      );

      // 2. Update Installment if applicable
      if (installmentId) {
        await pool.query(
          "UPDATE installments SET status = 'paid', paid_at = NOW() WHERE id = ?",
          [installmentId]
        );
      }

      return NextResponse.json({ success: true, message: "Payment verified and recorded" });
    } else {
      return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 400 });
    }

  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
