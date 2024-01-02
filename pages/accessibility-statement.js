import Footer from "../components/shared/Footer";

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          "Accessibility - Deal2Coupon | Online Coupons, Promo Code & Deals",
        description:
          "We have made this “Accessibility Statement” to give guidelines about the Content on Deal2Coupon. It gives you the guidelines on the usage.",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Deal2Coupon extension, Deal2Coupon coupon, how to use Deal2Coupon extension, Deal2Coupon login",
        pageUrl: "https://www.thesaverstreet.com/accessibility-statement",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function AccessibilityStatement() {
  return (
    <>
      {/* body-content */}
      {
        <div id="banner" className="p-4">
          <h2 id="bannerHeadding" className="mb-3 pt-2">
            Easiest Accessibility Of Deal2Coupon
          </h2>
          <div className="d-flex justify-content-center"></div>
        </div>
      }
      <div className="my-3 py-3 copyright-p">
        <div className="container">
          <div className="mb-4"></div>
          <p>
            Excellent and easy Accessibility is required to prevent users from
            facing difficulties. It makes our website user-friendly when the
            members get quick access to content and the website. Deal2Coupon
            always makes sure to give you simple navigation to the websites. But
            still, you find some content is not working in the way it is
            supposed to be, kindly contact us.{" "}
            <p>
              Moreover, drop detailed feedback with suggestions for improvement
              to us, and we would like to rectify in all the possible ways. We
              never take our members' feedback for granted and immediately start
              working on the website's growth. To keep the website updated, it
              is necessary to be concerned about accessibility policies.
              Moreover, Deal2Coupon strictly asks the third-party digital
              content providers' to make our content easily navigable.
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
