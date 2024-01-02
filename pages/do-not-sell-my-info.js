import Footer from "../components/shared/Footer";

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          "Do Not Sell My Info - The Saver Street | Online Coupons, Promo Code & Deals",
        description:
          "Do Not Sell My Info - Get information regarding how The Saver Street Collects, Uses, and Discloses your Personal Information.",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, The Saver Street extension, The Saver Street coupon, how to use The Saver Street extension, The Saver Street login",
        pageUrl: "https://www.thesaverstreet.com/do-not-sell-my-info",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function DoNotSellMyInfo() {
  return (
    <>
      {/* banner */}
      {
        <div id="banner" className="p-4">
          <h2 id="bannerHeadding" className="mb-3 pt-2">
            Do Not Sell My Info
          </h2>
          <div className="d-flex justify-content-center"></div>
        </div>
      }

      {/* form */}
      {
        <div className="container copyright-p">
          <p className="para mt-4 ms-1">
            To submit your request not to have your data sold, fill this form.
            You can see our Privacy Policy to learn how TheSaverStreet collects,
            uses, and discloses information.
          </p>
          <form className="bg-white mt-1 mb-4 p-4 shadow rounded para">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label ms-1">
                Name
              </label>
              <input
                type="text"
                className="form-control  border"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label ms-1">
                Email
              </label>
              <input
                type="email"
                className="form-control  border"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label ms-1">
                State
              </label>
              <input
                type="email"
                className="form-control  border"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label ms-1"
              >
                Message
              </label>
              <input
                type="text"
                className="form-control  border"
                id="exampleInputPassword1"
              />
            </div>
            <div className="text-end">
              <button
                type="submit"
                className="popularDealsBtn px-4"
                style={{
                  padding: "8px",
                  border: "none",
                  width: "25%",
                  borderRadius: "4px",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      }
      <Footer />
    </>
  );
}
