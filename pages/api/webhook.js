export default async function handlePaystackWebhook(req, res) {
  // Handle the Paystack webhook event here
  const data = req.body;

    console.log("Received Paystack webhook event:", data);
    res.status(200).json({ message: "Webhook received successfully" });

}
