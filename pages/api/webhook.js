import { verifyPaystackEvent } from 'paystack'

export default async function handlePaystackEvents(req, res) {
  const event = req.body;
  const secretKey = "sk_test_8af66b83b1a31986ff06a8c48ea7558c6119963e";
  const isValid = verifyPaystackEvent(event, secretKey);

    if (isValid) {
      console.log("Received a valid Paystack event:", event);
      // Do something with the event, e.g. update your database, send a notification, etc.
      res.status(200).end();
    } else {
      console.log("Received an invalid Paystack event:", event);
      res.status(400).end();
    }
}