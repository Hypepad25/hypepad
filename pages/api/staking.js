export default function handler(req, res) {
  res.status(200).json({
    totalStaked: "1,250,000 HYPE",
    leaderboard: [
      { wallet: "0x123...abc", amount: "250,000", apy: "40%" },
      { wallet: "0x456...def", amount: "150,000", apy: "25%" },
      { wallet: "0x789...ghi", amount: "100,000", apy: "16%" }
    ],
    rewardPool: "120,000 HYPE"
  });
}
