export default function handler(req, res) {
  res.status(200).json({
    trending: [
      { name: "HYPE Token", rank: 1, boost: "Paid (8h)" },
      { name: "MemeCoinX", rank: 2, boost: "Organic" },
      { name: "LaunchDAO", rank: 3, boost: "Paid (24h)" }
    ]
  });
}
