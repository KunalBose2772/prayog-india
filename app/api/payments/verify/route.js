import crypto from "crypto";

export async function POST(req) {
  try {
    const { order_id, payment_id, signature } = await req.json();
    const body = order_id + "|" + payment_id;
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET || "dummy_secret")
      .update(body)
      .digest("hex");
    if (expected === signature) {
      return Response.json({ success: true });
    } else {
      return Response.json({ success: false }, { status: 400 });
    }
  } catch (error) {
    return Response.json({ error: "Payment verification failed" }, { status: 500 });
  }
}
