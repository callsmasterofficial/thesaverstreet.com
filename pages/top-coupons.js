import CouponSection from "../components/Coupon/CouponSection";
import Footer from "../components/shared/Footer";
import { skimLinksDeals } from "../lib/affiliate";

export async function getStaticProps() {
  const skimLinksCoupons = await skimLinksDeals();
  return {
    props: {
      coupons: skimLinksCoupons,
      meta: {
        title:
          "Top Coupons, Promo Codes, & Discounts for Top Brands | Deal2Coupon",
        description:
          "Looking for Top Coupons and discounts at your favorite stores? Get up-to-date promo codes & discounts when you shop online with Deal2Coupon.",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Deal2Coupon extension, Deal2Coupon coupon, how to use Deal2Coupon extension, Deal2Coupon login",
        pageUrl: "https://www.thesaverstreet.com/top-coupons",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}
export default function Coupons({ coupons }) {
  return (
    <div>
      <CouponSection coupons={coupons} />
      <Footer />
    </div>
  );
}
