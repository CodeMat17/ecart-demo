import { verify } from "crypto";

export default async function handlePaystackWebhook(
  req,
  res
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const secret = "sk_test_8af66b83b1a31986ff06a8c48ea7558c6119963e";
  const hash = req.headers["x-paystack-signature"];

  if (!secret || !hash) {
    res.status(400).json({ error: "Missing webhook secret or signature" });
    return;
  }

  const hmac = verify(req.rawBody, secret, hash);

  if (!hmac) {
    res.status(401).json({ error: "Invalid signature" });
    return;
  }

  // Handle the Paystack webhook event here
  const data = req.body;

  console.log("Received Paystack webhook event:", data);

  res.status(200).json({ message: "Webhook received successfully" });
}
