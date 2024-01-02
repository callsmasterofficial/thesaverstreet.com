import { skimLinksDeals } from "../../../functions/affiliate";

export default async function topStores(req, res) {
  if (req.method === "GET") {
    try {
      const skimLinkPromise = await skimLinksDeals({ limit: 28 });
      res.send(skimLinkPromise);
    } catch (err) {
      res.status(400).json({ message: "Something went wrong." });
    }
  } else {
    res.status(400).json({ message: "only GET request is allowed." });
  }
}
