import Footer from "../components/shared/Footer";

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          "Black Friday Deals 2022 | Black Friday Sale | Top Deals, Offers & Sales",
        description:
          "Black Friday Deals & Sale - Check here for Popular Deals or Offers this Black Friday. Best sales available to ace your holiday shopping.",
        keywords:
          "Black Friday Deals, Best Black Friday Deals, Black Friday Sales, Black Friday Sale, Black Friday Sales 2022, Black Friday Sale 2022, Best Black Friday Deals 2022, Black Friday Ads, Black Friday Deals 2022, Black Friday Ads 2022, Black Friday 2022 Ads, Black Friday TV Deals, Black Friday 2022 Deals, 2022 black Friday Ads, Black Friday Laptop Deals, Walmart Black Friday 2022, Best Buy Black Friday 2022, Walmart Black Friday 2022 Ad",
        pageUrl: "https://www.thesaverstreet.com/black-friday",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function BlackFriday() {
  const headingStyle = { width: "100%", margin: "auto" };
  return (
    <>
      <div className="mb-4">
        <img
          style={{ width: "100%" }}
          src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648641220177-black-friday.jpeg"
          alt="cyber monday deals"
        ></img>
      </div>
      {/* BODY CONTENT */}
      <div className="container">
        {/* Shop Black Friday & Holiday Deals */}
        <div className="py-2">
          {/* head */}
          <div className="mt-5 mb-4 ">
            <h3>Shop Black Friday & Holiday Deals</h3>
          </div>

          {/* body */}
          <div className="couponCard my-4">
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://cdn.shopify.com/s/files/1/0131/5409/1065/products/EVERYDAYMVPS--VESSELS_1512x.jpg?v=1614906694"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pcomarde.sirv.com/Stores/best-buy.png"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6404/6404343_rd.jpg"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pcomarde.sirv.com/Stores/levis.png"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://cdn.shopify.com/s/files/1/0131/5409/1065/products/EVERYDAYMVPS--VESSELS_1512x.jpg?v=1614906694"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pcomarde.sirv.com/Stores/best-buy.png"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6404/6404343_rd.jpg"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pcomarde.sirv.com/Stores/levis.png"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Stores for Black Friday Sales */}
        <div className="py-2">
          {/* head */}
          <div className="mt-5 mb-4">
            <h3>Best Stores for Black Friday Sales</h3>
          </div>

          {/* body */}
          <div className="d-flex justify-content-between flex-wrap">
            <div className="text-center bfCircleStores">
              <img
                src="https://mediaservice.retailmenot.com/ws/mediagroup/R22ASI6HQRE2BANLTBP57PD5EU?width=100&height=100"
                alt=""
                className="rounded-circle border shadow"
              />
              <div className="pt-2">Amazon</div>
            </div>
            <div className="text-center bfCircleStores">
              <img
                src="https://mediaservice.retailmenot.com/ws/mediagroup/4N2FI6VNHBDELDXRKFKM7OWFUI?width=100&height=100"
                alt=""
                className="rounded-circle border shadow"
              />
              <div className="pt-2">Amazon</div>
            </div>
            <div className="text-center bfCircleStores">
              <img
                src="https://mediaservice.retailmenot.com/ws/mediagroup/IFXV25BBT5ELPCDRIIEGTVVR24?width=100&height=100"
                alt=""
                className="rounded-circle border shadow"
              />
              <div className="pt-2">Amazon</div>
            </div>
            <div className="text-center bfCircleStores">
              <img
                src="https://mediaservice.retailmenot.com/ws/mediagroup/EBVDOCYQUVFKLMMFY242ZDGKYI?width=100&height=100"
                alt=""
                className="rounded-circle border shadow"
              />
              <div className="pt-2">Amazon</div>
            </div>
            <div className="text-center bfCircleStores">
              <img
                src="https://mediaservice.retailmenot.com/ws/mediagroup/WIAMOEFA2ZFG3D7O6H4PEHIBNQ?width=100&height=100"
                alt=""
                className="rounded-circle border shadow"
              />
              <div className="pt-2">Amazon</div>
            </div>
            <div className="text-center bfCircleStores">
              <img
                src="https://mediaservice.retailmenot.com/ws/mediagroup/6TIJCZKOIBFRLLWY7TEAHRPJIA?width=100&height=100"
                alt=""
                className="rounded-circle border shadow"
              />
              <div className="pt-2">Amazon</div>
            </div>
            <div className="text-center bfCircleStores">
              <img
                src="https://mediaservice.retailmenot.com/ws/mediagroup/UTPZPKWGMFHVDKWRO4Y4AYVYZA?width=100&height=100"
                alt=""
                className="rounded-circle border shadow"
              />
              <div className="pt-2">Amazon</div>
            </div>
            <div className="text-center bfCircleStores">
              <img
                src="https://mediaservice.retailmenot.com/ws/mediagroup/R22ASI6HQRE2BANLTBP57PD5EU?width=100&height=100"
                alt=""
                className="rounded-circle border shadow"
              />
              <div className="pt-2">Amazon</div>
            </div>
          </div>
        </div>

        {/* In Store shopping deals */}
        <div className="py-2">
          {/* head */}
          <div className="blackFirdayHeading">
            <h3>In Store shopping deals</h3>
            <span className="fw-bold para viewAll">view all</span>
          </div>

          {/* body */}
          <div className="couponCard my-2">
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://cdn.shopify.com/s/files/1/0131/5409/1065/products/EVERYDAYMVPS--VESSELS_1512x.jpg?v=1614906694"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pcomarde.sirv.com/Stores/best-buy.png"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6404/6404343_rd.jpg"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pcomarde.sirv.com/Stores/levis.png"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Clothing & Shoe Deals */}
        <div className="py-2">
          {/* head */}
          <div className="mt-5 mb-3  blackFirdayHeading">
            <h3>Top Clothing & Shoe Deals</h3>
            <span className="fw-bold para viewAll">view all</span>
          </div>

          {/* body */}
          <div className="couponCard my-4">
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://cdn.shopify.com/s/files/1/0131/5409/1065/products/EVERYDAYMVPS--VESSELS_1512x.jpg?v=1614906694"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pcomarde.sirv.com/Stores/best-buy.png"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6404/6404343_rd.jpg"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 cyberMondayCard">
              <div className="card blackFridayitem" style={{ width: "16rem" }}>
                <img
                  className="card-img-top"
                  src="https://pcomarde.sirv.com/Stores/levis.png"
                  alt="Card image cap"
                />
                <hr className="card-img-hr"></hr>
                <div className="card-body">
                  <h6 className="card-title card-store-name">Card title</h6>
                  <h5 className="card-title coupon-card-title">
                    The Clean Start Set: Everyday MVPs
                  </h5>
                  <span className="coupon-cat">Beauty Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
