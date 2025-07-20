// app/routes/create-razorpay-order/route.ts
import Razorpay from "razorpay";

export const dynamic = 'force-dynamic'; // required for POST route with dynamic content

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount } = body;

    if (!amount) {
      return new Response(JSON.stringify({ error: "Amount is required" }), {
        status: 400,
      });
    }

    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects paise (₹100 = 10000)
      currency: "INR",
      receipt: `order_rcptid_${Math.random().toString(36).substring(2, 12)}`,
    });

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Razorpay error:", err);
    return new Response(JSON.stringify({ error: "Failed to create order" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}