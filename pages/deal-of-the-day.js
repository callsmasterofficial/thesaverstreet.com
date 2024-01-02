import DealsSection from "../components/Deals/DealsSection";
import Footer from "../components/shared/Footer";
import { skimLinksDeals } from "../lib/affiliate";

export async function getStaticProps() {
  const skimLinksCoupons = await skimLinksDeals();
  return {
    props: {
      deals: skimLinksCoupons,
      meta: {
        title:
          "Deal of the Day - Today's Best Daily Deals & Offers | Deal2Coupon",
        description:
          "Deal of the Day - Today's best daily deals & offers with ultimate savings. Find huge discounts, up to 80% off on most popular deals here.",
        keywords:
          "Deal of the Day, Best Buy Deal Of The Day, Home Depot Deal Of The Day, Amazon Deal Of The Day, Stupid Deal Of The Day, Gamestop Deal Of The Day, Bestbuy Deal Of The Day, Subway Deal Of The Day, Lowes Deal Of The Day, Bakers Deal Of The Day, Deal Of The Day Best Buy, Deal Of The Day Amazon, Walmart Deal Of The Day, Homedepot Deal Of The Day, Deals of the Day",
        pageUrl: "https://www.thesaverstreet.com/deal-of-the-day",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}
export default function DealOfTheDay({ deals }) {
  return (
    <div>
      <DealsSection deals={deals} />
      <Footer />
    </div>
  );
}
