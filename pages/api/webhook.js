import { Buffer } from "buffer";
import crypto from "crypto";

const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;

function verifyPaystackSignature(signature, body) {
  const hash = crypto
    .createHmac("sha512", paystackSecretKey)
    .update(body)
    .digest("hex");
  return signature === hash;
}

async function handlePaystackEvent(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.end("Method not allowed");
    return;
  }

  const signature = req.headers["x-paystack-signature"];
  const body =
    (await new Promise()) <
    Buffer >
    ((resolve) => {
      const chunks = [];
      req.on("data", (chunk) => chunks.push(chunk));
      req.on("end", () => resolve(Buffer.concat(chunks)));
    });

  if (!verifyPaystackSignature(signature, body)) {
    res.statusCode = 400;
    res.end("Invalid signature");
    return;
  }

  const event = req.headers["x-paystack-event"];
  const eventData = JSON.parse(body.toString());

  // Handle Paystack events
  switch (event) {
    case "charge.success":
      // Do something when a charge is successful
      break;
    case "charge.failure":
      // Do something when a charge fails
      break;
    // Handle other Paystack events here
    default:
      // Unknown event type
      break;
  }

  res.statusCode = 200;
  res.end("OK");
}

export default async function webhook(req, res) {
  try {
    await handlePaystackEvent(req, res);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
