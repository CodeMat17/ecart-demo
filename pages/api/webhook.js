

export default async function handlePaystackWebhook(req, res) {
   if (req.method === "POST") {
     // check if the event is a successful payment event
     if (req.body.event === "charge.success") {
       // log the payment details to the console
       console.log(
         `Payment received: ${req.body.data.amount} ${req.body.data.currency}`
       );

       // send a response to Paystack to confirm receipt of the event
       res.status(200).json({ status: "success" });
     } else {
       // send an error response for unrecognized events
       res.status(400).json({ error: "Invalid event type" });
     }
   } else {
     // send an error response for unsupported methods
     res.status(405).json({ error: "Method not allowed" });
   }
}