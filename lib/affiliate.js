import axios from "./axios";

export const skimLinksDeals = ({
  affiliate,
  storeId,
  limit,
  categoryId,
} = {}) => {
  return new Promise((resolve, reject) => {
    const url = storeId
      ? `https://merchants.skimapis.com/v3/offers?apikey=ea6d635d63e975e4ae2659ebab2dea24&a_id=${storeId}&limit=${
          limit ? limit : 100
        }&sort_by=offer_starts&sort_dir=desc&period=not_expired`
      : categoryId
      ? `https://merchants.skimapis.com/v3/offers?apikey=ea6d635d63e975e4ae2659ebab2dea24&vertical=${categoryId}&limit=${
          limit ? limit : 100
        }&sort_by=offer_starts&sort_dir=desc&period=not_expired`
      : `https://merchants.skimapis.com/v3/offers?apikey=ea6d635d63e975e4ae2659ebab2dea24&limit=${
          limit ? limit : 100
        }&sort_by=offer_starts&sort_dir=desc&period=not_expired`;
    axios
      .get(url)
      .then((result) => {
        const arr = result.offers ? result.offers : [];
        const deals = arr.map((item) => {
          return {
            _id: item.id,
            cat: item.merchant_details.verticals
              ? item.merchant_details.verticals
              : [],
            status: "active",
            title: item.title,
            description: item.description,
            type: item.coupon_code ? "coupon" : "deal",
            code: item.coupon_code,
            url: item.url,
            location: "60276fa1954ed3299c8c2a8a",
            start_date: item.offer_starts,
            valid_till: item.offer_ends,
            verified_on: item.date_added,
            store: {
              _id: item.merchant_details.advertiser_id,
              name: item.merchant_details.name,
              logo: item.merchant_details.metadata.logo,
              aff_soruce: "SkimLinks",
            },
          };
        });
        return resolve(deals);
      })
      .catch((err) => {
        return resolve([]);
      });
  });
};
export const skimLinksStore = (storeId) => {
  return new Promise((resolve, reject) => {
    const url = `https://merchants.skimapis.com/v3/merchants?apikey=ea6d635d63e975e4ae2659ebab2dea24&a_id=${storeId}`;
    
    axios
      .get(url)
      .then((result) => {
        const store = result.merchants && result.merchants[0];
     
        return resolve(store);
      })
      .catch((err) => {
        return reject({ message: "No stores found.", error: err });
      });
  });
};
