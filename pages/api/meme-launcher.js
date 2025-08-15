export default function handler(req, res) {
  res.status(200).json({
    project: "MemeCoinX",
    chain: "Solana",
    marketCap: "$42,000",
    feePoolProgress: "87%",
    graduationThreshold: "$65,000",
    lpStatus: "Locked & Rug-Proof ✅"
  });
}
