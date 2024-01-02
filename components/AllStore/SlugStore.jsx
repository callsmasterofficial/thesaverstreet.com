import React from "react";
export default function SlugStore({ coupons, store }) {
  return (
    <>
      <div className="container-fluid my-4">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-12 border py-3 h-100"
              style={{background: "white" }}
            >
              <img
                src={
                  store && store.metadata.logo
                    ? store.metadata.logo
                    : process.env.COUPON_IMAGE
                }
                style={{ width: "100%", height: "100px", objectFit: "contain" }}
                alt="..."
              />
              <p className="my-3 text-center" style={{ fontSize: "10px" }}>
                When you buy through links on Deal2Coupon we may earn a
                commission.{" "}
              </p>
              <hr></hr>
              {store && store.metadata.special_conditions && (
                <>
                  <h5 className="text-center">Special Condition</h5>
                  <div style={{ fontSize: "14px" }} dangerouslySetInnerHTML={{__html:store.metadata.special_conditions}} />
                    
                  
                </>
              )}

              <table style={{ width: "100%", marginBottom: "15px" }}>
                <tbody>
                  <tr>
                    <td style={{ fontSize: "14px" }}>Total Coupons</td>
                    <td
                      style={{
                        textAlign: "right",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      {coupons && coupons.length > 0 ? coupons.length : 0}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "14px" }}>Deal2Coupon Rewards</td>
                    <td
                      style={{
                        textAlign: "right",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      5%
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="btn popularDealsBtn" style={{ width: "77%" }}>
                Activate Gold
              </button>
              <span id="visit-official-site">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="none"
                  className="injected-svg"
                  data-src="https://cdn.honey.io/images/icon-2_0/external_link-16.svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M6.894 3.84a.75.75 0 1 0 0-1.5v1.5zm6.765 6.15a.75.75 0 0 0-1.5 0h1.5zm-1.75 3.26H3v1.5h8.91v-1.5zM2.75 13V4.09h-1.5V13h1.5zM3 3.84h3.894v-1.5H3v1.5zm9.16 6.15V13h1.5V9.99h-1.5zM3 13.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75v-1.5zm8.91 1.5A1.75 1.75 0 0 0 13.66 13h-1.5a.25.25 0 0 1-.25.25v1.5zM2.75 4.09A.25.25 0 0 1 3 3.84v-1.5a1.75 1.75 0 0 0-1.75 1.75h1.5z"
                    fill="#212121"
                    className="fill"
                  />
                  <path
                    d="M10.15 2H14v4.171"
                    stroke="#212121"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    className="stroke"
                  />
                  <path
                    d="M6.796 8.08a.75.75 0 0 0 1.06 1.06l-1.06-1.06zm6.417-6.418L6.796 8.08l1.06 1.061 6.418-6.417-1.061-1.06z"
                    fill="#212121"
                    className="fill"
                  />
                </svg>
              </span>
            </div>

            <div className="col-lg-9 col-md-9 col-12">
              <div className="mid-ad text-center">
                <img
                  className="img-fluid"
                  src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1647514310151-storebanner2.jpeg"
                  width="100%"
                  alt="..."
                />
                <div className="storeheadertext d-flex justify-content-between align-items-center px-3">
                  <h3 className="storeheadertexth3 text-white fw-bold">
                    {store && store.domain}
                  </h3>
                  <button className="view-site fw-normal bg-white">
                    <a
                      href={`https://${store && store.domain}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#0d6fa1", fontWeight: "700" }}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 496 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path>
                      </svg>{" "}
                      Visit Website
                    </a>
                  </button>
                </div>
              </div>

              {coupons && coupons.length > 0 ? (
                coupons.map((coupon) => {
                  return (
                    <div className="mb-3" id="sectionBody" key={coupon._id}>
                      <div className="coupon-item rounded p-3 bg-white border d-flex justify-content-between align-items-center">
                        <div className="d-flex imgtext">
                          <div>
                            <img
                              className="mr-3 shadow-sm rounded-circle"
                              loading="lazy"
                              src={
                                coupon.type === "coupon"
                                  ? process.env.COUPON_IMAGE
                                  : process.env.DEAL_IMAGE
                              }
                              alt="Error..."
                              style={{
                                height: "100px",
                                width: "100px",
                                padding: "5px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                          <div className="ms-4">
                            <p className="para mb-0">
                              {coupon.type === "coupon" ? "Coupon" : "Deal"}
                            </p>
                            <p
                              className="coupon-title textWidth"
                              style={{
                                fontSize: "16px",
                                overflow: "hidden",
                                width: "500px",
                                fontWeight: "600",
                                margin: "5px 0",
                                color: "#002334",
                              }}
                            >
                              {coupon.title}
                            </p>
                            <span
                              className="expire-text"
                              style={{
                                fontWeight: "400",
                                marginTop: "0.5rem",
                                fontWeight: "12px !important",
                              }}
                            >
                              Expires on {coupon.valid_till}
                            </span>
                          </div>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="popularDealsBtn1"
                            data-bs-toggle="modal"
                            data-bs-target={`#id${coupon._id}`}
                          >
                            {coupon.type === "coupon"
                              ? "Show Code"
                              : "View Deal"}
                          </button>
                        </div>
                        <div
                          className="modal fade"
                          id={`id${coupon._id}`}
                          tabIndex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body text-center">
                                <div>
                                  <img
                                    src={
                                      coupon.image || store.metadata?.logo
                                        
                                    }
                                    alt={store.name}
                                    style={{
                                      height: "80px",
                                      width: "80px",
                                      objectFit: "contain",
                                    }}
                                  />
                                </div>
                                <h4 className="mt-3">{store.name}</h4>
                                <span>{coupon.title || "Best Deals"}</span>
                              </div>
                              <div className="modal-footer">
                                <a
                                  href={coupon.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <button type="button" className="btn">
                                    Activate Deal
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h3 className="text-center mt-5">No Coupons Found!</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
