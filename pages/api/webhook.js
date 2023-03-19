// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    const event = req.body;
    console.log(event);
    res.status(200).json({ message: "successful" });
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
}
