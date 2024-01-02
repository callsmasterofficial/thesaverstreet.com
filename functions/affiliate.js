import axios from "axios";
// import { findOne } from "../models/coupon";

export const admitadDeals = ({ affiliate, storeId, limit } = {}) => {
  return new Promise((resolve, reject) => {
    const url = storeId
      ? `https://api.admitad.com/coupons/?limit=${
          limit ? limit : 100
        }&campaign=${storeId}`
      : `https://api.admitad.com/coupons/?limit=${limit ? limit : 100}`;
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${affiliate.token}` },
      })
      .then((result) => {
        const arr =
          result.data && result.data.results ? result.data.results : [];
        const coupons = arr.map((item) => {
          return {
            _id: item.id,
            cat: [],
            status: item.status,
            title: item.name,
            description: item.description,
            type: "deal",
            url: item.campaign.site_url,
            location: "60276fa1954ed3299c8c2a8a",
            start_date: item.date_start,
            valid_till: item.date_end,
            verified_on: item.date_start,
            badge_text: item.discount,
            image: item.image,
            store: {
              _id: item.campaign.id,
              name: item.campaign?.name,
              aff_soruce: "Admitad",
            },
          };
        });
        return resolve(coupons);
      })
      .catch((err) => {
        return resolve([]);
      });
  });
};

export const skimLinksDeals = ({ storeId, limit, categoryId } = {}) => {
  return new Promise((resolve, reject) => {
    const url = storeId
      ? `https://merchants.skimapis.com/v3/offers?apikey=ea6d635d63e975e4ae2659ebab2dea24&a_id=${storeId}&limit=${
          limit || 100
        }&sort_by=offer_starts&sort_dir=desc&period=not_expired`
      : categoryId
      ? `https://merchants.skimapis.com/v3/offers?apikey=ea6d635d63e975e4ae2659ebab2dea24&&vertical=${categoryId}&limit=${
          limit || 100
        }&sort_by=offer_starts&sort_dir=desc&period=not_expired`
      : `https://merchants.skimapis.com/v3/offers?apikey=ea6d635d63e975e4ae2659ebab2dea24&limit=${
          limit || 100
        }&sort_by=offer_starts&sort_dir=desc&period=not_expired`;
    axios
      .get(url)
      .then((result) => {
        const arr = result.data && result.data.offers ? result.data.offers : [];
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
              name: item.merchant_details?.name,
              logo: item.merchant_details.metadata.logo,
              aff_soruce: "SkimLinks",
            },
          };
        });
        return resolve(deals);
      })
      .catch((err) => {
        reject([]);
      });
  });
};

export function skimlinksCoupons({ storeId, limit, categoryId } = {}){
  return new Promise((resolve, reject) => {
    const url = storeId
      ? `https://merchants.skimapis.com/v3/offers?apikey=ea6d635d63e975e4ae2659ebab2dea24&a_id=${storeId}&limit=${
          limit || 100
        }&sort_by=offer_starts&sort_dir=desc&period=not_expired`
      : categoryId
      ? `https://merchants.skimapis.com/v3/offers?apikey=ea6d635d63e975e4ae2659ebab2dea24&&vertical=${categoryId}&limit=${
          limit || 100
        }&sort_by=offer_starts&sort_dir=desc&period=not_expired`
      : `https://merchants.skimapis.com/v3/offers?apikey=ea6d635d63e975e4ae2659ebab2dea24&limit=${
          limit || 100
        }&sort_by=offer_starts&sort_dir=desc&period=not_expired`;
        
    axios
      .get(url)
      .then((result) => {
        const arr = result.data && result.data.offers ? result.data.offers : [];
        const deals = arr.filter((item)=> item.coupon_code).map((item) => {
          return {
            _id: item.id,
            cat: item.merchant_details.verticals
              ? item.merchant_details.verticals
              : [],
            status: "active",
            title: item.title,
            description: item.description,
            code: item.coupon_code,
            url: item.url,
            start_date: item.offer_starts,
            valid_till: item.offer_ends,
            verified_on: item.date_added,
            store: {
              _id: item.merchant_details.advertiser_id,
              name: item.merchant_details?.name,
              logo: item.merchant_details.metadata.logo,
              aff_soruce: "SkimLinks",
            },
          };
        });
        
        return resolve(deals);
      })
      .catch((err) => {
       
        reject([]);
      });
  });
}