import Footer from "../components/shared/Footer";

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          "Cyber Monday Deals & Sale - Save Big on Best Deals from Top Stores",
        description:
          "Best Cyber Monday Deals & Sale to shop this year and save up to 80% on electonics, books, toys, fashion, gift cards & more!",
        keywords:
          "Cyber Monday Deals, Cyber Monday Sale, Walmart Cyber Monday, Best Buy Cyber Monday, Best Cyber Monday Deals, Target Cyber Monday, Macys Cyber Monday 2022, Kohls Cyber Monday, Cyber Monday Deals 2022, Cyber Monday 2022 Deals, Newegg Cyber Monday, Cyber Monday TV Deals, Cyber Monday Sale 2022",
        pageUrl: "https://www.thesaverstreet.com/cyber-monday",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function CyberMonday() {
  return (
    <>
      <div className="mb-4">
        <img
          style={{ width: "100%" }}
          src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648641246930-cyber-monday-deals.jpeg"
          alt="cyber monday deals"
        ></img>
      </div>
      {/* BODY CONTENT */}
      <div className="container">
        {/* Shop Black Friday & Holiday Deals */}
        <div className="py-2">
          {/* head */}
          <div className="mt-5 mb-4">
            <h3>Shop Cyber Monday & Holiday Deals</h3>
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
            <h3>Best Stores for Cyber Monday Sales</h3>
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
          <div className="mt-5 mb-3 blackFirdayHeading">
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

          {/* Top Clothing & Shoe Deals */}
          <div className="py-2">
            {/* head */}
            <div className="mt-5 mb-3 blackFirdayHeading">
              <h3>Top Clothing & Shoe Deals</h3>
              <span className="fw-bold para viewAll">view all</span>
            </div>

            {/* body */}
            <div className="couponCard my-2">
              <div className="col-lg-3 cyberMondayCard">
                <div
                  className="card blackFridayitem"
                  style={{ width: "16rem" }}
                >
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
                <div
                  className="card blackFridayitem"
                  style={{ width: "16rem" }}
                >
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
                <div
                  className="card blackFridayitem"
                  style={{ width: "16rem" }}
                >
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
                <div
                  className="card blackFridayitem"
                  style={{ width: "16rem" }}
                >
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
      </div>
      <Footer />
    </>
  );
}
