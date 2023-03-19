import bodyParser from "body-parser";

// create middleware function to parse request body
const parseBody = bodyParser.json();

// create route to handle Paystack webhook events
export default async function handler(
  req,
  res
) {
  if (req.method === "POST") {
    // use parseBody middleware to parse request body
    parseBody(req, res, () => {
      // access Paystack webhook event data
      const event = req.body;
      console.log(event);

      // handle Paystack webhook event
      // ...

      // send response
      res.status(200).end();
    });
  } else {
    res.status(405).end();
  }
}
