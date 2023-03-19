// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const events = req.body;
  console.log("events", events);
  console.log("secret", secret);

  res.status(200).json({ name: "John Doe" });
}
