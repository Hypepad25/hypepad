export default function handler(req, res) {
  res.status(200).json({
    project: "HYPE Token Presale",
    status: "active",
    softCap: "100 ETH",
    hardCap: "200 ETH",
    raised: "72 ETH",
    participants: 341,
    startDate: "2025-08-20T00:00:00Z",
    endDate: "2025-08-30T00:00:00Z"
  });
}
