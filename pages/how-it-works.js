import React from "react";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title: "How it works? | Deal2Coupon",
        description:
          "Save more with best Coupons, Promo Code, Deals & Offers available at Deal2Coupon ✔  Thousands of online stores ✔ Apply coupon at single click ✔ Get Extension",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Deal2Coupon extension, Deal2Coupon coupon, how to use Deal2Coupon extension, Deal2Coupon login",
        pageUrl: "https://www.thesaverstreet.com/how-it-works",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

function howitworks() {
  return (
    <div style={{ height: "100vh" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 my-auto px-5">
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648028812332-Deal2Coupon-logo.png"
              alt="cliper-logo"
              style={{ position: "absolute", top: "3%" }}
            />
            <h3 className="how-heading">How it works?</h3>
            <div className="accordion mt-4" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    1. Search for deals fast
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">This is the</div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2. Let us do the work
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">This is the second</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3. See if you can save
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">This is the third</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      4. Rewards to top it off
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">This is the third</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 bg-white howitwork-video">
            <video controls loop={true} autoPlay width="700px">
              <source
                src="https://super-dashboard-images-cdn.s3.amazonaws.com/videos/1648123121132-how-it-works.mp4"
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default howitworks;
