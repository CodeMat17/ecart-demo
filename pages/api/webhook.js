export default function handler(req, res) {
  if (req.method === "POST") {
    const event = req.body;

    console.log("Paystack webhook event received:", event);

    res.status(200).json({ message: "Webhook received successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
