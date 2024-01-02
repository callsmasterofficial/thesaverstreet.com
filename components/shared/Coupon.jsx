import React from "react";
import Link from "next/link";

export default function Coupon({ posts }) {
  const cardStyle = { border: "1px solid #BDBDBD" };
  return (
    <div className="container">
      <h2 className="home-h3" style={{ color: "black", margin: "4px" }}>
        Featured Stores With Biggest Deals
      </h2>
      <div className="line-divider">
        <span className="line-mask blue-bg"></span>
      </div>
      <div className="row coupon-card my-4">
        {posts.map((post) => (
          <div
            className="col-sm-12 col-md-6 col-lg-3 mb-4"
            key={post._id}
            data-bs-toggle="modal"
            data-bs-target={`#idcoupons-${post._id}`}
            style={{ cursor: "pointer" }}
          >
            <div className="card featured-card" style={{ height: "100%" }}>
              <div
                className=" text-center"
                style={{ borderBottom: "1px solid #dee2e6", padding: "10px 0" }}
              >
                <span className="offerCoupon" style={{ color: "black" }}>
                  {" "}
                  FEATURED
                </span>
                <img
                  className="card-img-top"
                  src={
                    post.store.logo ? post.store.logo : process.env.STORE_IMAGE
                  }
                  loading="lazy"
                  alt={post.store.name}
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <div className="card-body border-bottom">
                <h6 className="card-title card-store-name ">
                  {post.store.name}
                </h6>
                <h5 className="card-title coupon-card-title ">
                  {post.title || "Best Deals"}
                </h5>
                <span className="coupon-cat">
                  {(post.cat[0] && post.cat[0].toUpperCase()) || "OTHERS"}
                </span>
              </div>
              <div className="text-center" style={{ padding: "10px" }}>
                <button className="btn popularDealsBtn">View Deal</button>
              </div>
            </div>
            <div
              className="modal fade"
              id={`idcoupons-${post._id}`}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-center pt-0">
                    <div>
                      <img
                        src={
                          post.store.logo
                            ? post.store.logo
                            : process.env.STORE_IMAGE
                        }
                        alt={post.store.name}
                        style={{
                          height: "auto",
                          width: "150px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <h5 className="mt-3">{post.title}</h5>
                    <span>
                      {`Copy and paste this code at ${post.store.name}` ||
                        "Best Deals"}
                    </span>
                  </div>
                  <div className="modal-footer pt-0">
                    <a href={post.url} target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        className="btn px-4 py-2 rounded-pill"
                      >
                        Continue to Store
                      </button>
                    </a>
                  </div>
                  <hr
                    className="m-0 text-secondary opacity-25"
                    style={{ height: "1px !important" }}
                  />
                  <div>
                    <div className="my-3 d-flex justify-content-evenly modalContent">
                      <div>
                        <p className="fw-bold mb-0">Exclusions</p>
                        <p className="mb-0">Some exclusions may apply.</p>
                      </div>
                      <div className="modalContentCont">
                        <p className="fw-bold mb-0">Details</p>
                        <p className="mb-0">{post.title}</p>
                      </div>
                    </div>
                    <div className="my-3 text-center">
                      <img
                        src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1647000101423-offer-banner.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="text-center my-2">
                    <span>Need help? </span>
                    <Link href="/frequently-asked-questions" passHref>
                      <span
                        style={{ color: "#0d6fa1" }}
                        className="text-decoration-underline"
                      >
                        Visit FAQ
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.map((post) => (
        <div
          className="d-block d-md-none col-sm-12 col-md-6 col-lg-3 mb-3"
          key={post._id}
          data-bs-toggle="modal"
          data-bs-target={`#idcoupons-${post._id}`}
          style={{ cursor: "pointer" }}
        >
          <div className="deals_content_container card py-3 shadow-sm mFeatured-card">
            <div className="px-5 text-center">
              <img
                className="card-img-top"
                src={
                  post.store.logo ? post.store.logo : process.env.STORE_IMAGE
                }
                loading="lazy"
                alt={post.store.name}
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            <div className="card-body border-bottom">
              <h6 className="card-title card-store-name m-0">
                {post.store.name}
              </h6>
              <h5 className="card-title coupon-card-title m-0">
                {post.title || "Best Deals"}
              </h5>
            </div>
            <div className="text-center mPopularDealsBtnBox">
              <button className="btn mPopularDealsBtn">View Deal</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// OLD

// <div className="text-center p-3 mobileCard rounded-3" style={cardStyle}>
// <div className="mobile-coupon-logo" style={{ padding: "10px" }}>
//   {/* <img src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1650542955747-mobile-test-logo.png" alt="" width={100} /> */}
//   <img
//     className="card-img-top"
//     src={
//       post.store.logo ? post.store.logo : process.env.STORE_IMAGE
//     }
//     loading="lazy"
//     alt={post.store.name}
//     style={{ height: "100px", width: "100px" }}
//   />
// </div>
// <div className="mobile-coupon-text">
//   <h6 className="card-title card-store-name ">{post.store.name}</h6>
//   <h5 className="card-title coupon-card-title "> {post.title || "Best Deals"}</h5>

//   <button className="p-2  w-100 rounded-3 popularDealsBtn" style={{border: "none"}}>View Deal</button>
// </div>
// </div>
// </div>

{
  /* <div className="deals_content_container card py-3 shadow-sm featured-card" >
<div className="px-5 text-center">
  <img 
    className="card-img-top" 
    src={
      deal.store.logo ? deal.store.logo : process.env.STORE_IMAGE
    }
    loading="lazy"
    alt={deal.store.name}
    style={{
      height: "100px ",
      width: "100px ",
      padding: "5px",
      objectFit: "contain",
      cursor: "pointer",
    }}
    data-bs-toggle="modal"
    data-bs-target={`#id${deal._id}`}
  />
</div>
<div className="card-body border-bottom">
  <h6 className="card-title card-store-name m-0">
    {deal.store.name}
  </h6>
  <h5 className="card-title coupon-card-title m-0">
    {deal.title || "Best Deals"}
  </h5>
</div>
<div style={{ padding: "1rem 1rem" }}>
  <span className="offerCoupon">
    <FaCertificate className="text-center" /> OFFER
  </span>
</div>
</div> */
}
