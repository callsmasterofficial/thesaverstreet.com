import data from "../../../data/stores";
import { skimlinksCoupons } from "../../../functions/affiliate";


export default async function (req, res) {
  try {
    if (req.method === "POST") {
      const { storeOrigin } = req.body;
      const storeDomain = storeOrigin.split('/')[2].replace("www.", "");
      const skimStore = data.find((item) => item.slug === storeDomain);
      let coupons=[]
      if (skimStore) {
        coupons = await skimlinksCoupons({ storeId: skimStore.id });
        res.status(200).json({ coupons });
      } 
    } else {
      res
        .status(404)
        .json({ message: "This action requested is not allowed." });
    }
  } catch (err) {
      res.status(500).json({message:"Something went wrong", err: err});
  }
}
