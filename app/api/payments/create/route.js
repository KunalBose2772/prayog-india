import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY || "dummy_key",
      key_secret: process.env.RAZORPAY_SECRET || "dummy_secret",
    });
    const options = {
      amount: 50000, // in paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };
    const order = await instance.orders.create(options);
    return Response.json(order);
  } catch (error) {
    return Response.json({ error: "Payment creation failed" }, { status: 500 });
  }
}
