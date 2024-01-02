import Footer from "../components/shared/Footer";
import Categories from "../components/AllCategory/Categories";

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          "Apply Online Coupons, Promo Code, Deals and Exclusive Offers | Deal2Coupon",
        description:
          "Save more with best Coupons, Promo Code, Deals & Offers available at Deal2Coupon ✔  Thousands of online stores ✔ Apply coupon at single click ✔ Get Extension",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Deal2Coupon extension, Deal2Coupon coupon, how to use Deal2Coupon extension, Deal2Coupon login",
        pageUrl: "https://www.thesaverstreet.com/all-categories",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function AllCategories() {
  return (
    <>
      <Categories />
      <Footer />
    </>
  );
}
