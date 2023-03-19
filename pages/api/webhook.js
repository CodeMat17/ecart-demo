// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const events = req.body;
  if (events.secret !== "sk_test_8af66b83b1a31986ff06a8c48ea7558c6119963e") {
    return res.status(401).json({ message: "Invalid token" });

    // console.log("events", events);
    // console.log("secret", events.secret);
    // res.status(200).json({ message: "successful" }, { events: { events } });
  }
  //   console.log("events", events);
  //   console.log("secret", events.secret);

  res.status(200).json({ message: "Success" });
}
