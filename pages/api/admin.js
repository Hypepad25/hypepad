export default function handler(req, res) {
  res.status(200).json({
    kycFee: "0.75 BNB",
    safuFee: "1.0 ETH",
    adSlots: [
      { slot: "Banner Top", price: "2 ETH / 24h" },
      { slot: "Trending Boost", price: "0.5 BNB / 8h" }
    ],
    secretAccess: true
  });
}
