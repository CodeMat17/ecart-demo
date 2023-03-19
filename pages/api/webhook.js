// pages/api/paystack-webhook.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process the Paystack webhook event
    const event = req.body;
    console.log("Received Paystack webhook event:", event);

    // Send a response to acknowledge receipt of the event
    res.status(200).send("OK");
  } else {
    res.status(404).send("Not found");
  }
}
