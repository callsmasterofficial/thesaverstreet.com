import React from "react";
import Link from "next/link";

export default function Coupon({ posts }) {
  return (
    <>
      <div className="container">
        <h3 className="home-h3">Earn Rewards with these offers</h3>
        <div className="line-divider">
          <span className="line-mask blue-bg"></span>
        </div>
        <div className="row coupon-card my-3">
          {posts.map((post) => (
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4" key={post._id}>
              <div className="card py-3 d-flex" style={{ height: "100%" }}>
                <div
                  className="px-4 text-center"
                  style={{ borderBottom: "1px solid #dee2e6" }}
                >
                  <img
                    className="popularDealsImg"
                    src={
                      post.store.logo
                        ? post.store.logo
                        : process.env.STORE_IMAGE
                    }
                    loading="lazy"
                    alt={post.store.name}
                    style={{
                      height: "100px",
                      width: "150px",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target={`#iddeals_${post._id}`}
                  />
                </div>
                <div className="card-body text-center">
                  <h6 className="card-title card-store-name">
                    {post.store.name}
                  </h6>
                  <h5 className="card-title coupon-card-title">
                    {post.title || "Best Deals"}
                  </h5>
                </div>
                <a href={post.url} target="_blank" rel="noreferrer">
                  <div className="d-grid p-2 text-center">
                    <button
                      type="button"
                      className="btn popularDealsBtn"
                      data-bs-toggle="modal"
                      data-bs-target={`#iddeals_${post._id}`}
                    >
                      Get Deal
                    </button>
                  </div>
                </a>
                <div
                  className="modal fade"
                  id={`iddeals_${post._id}`}
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
                              height: "100px",
                              width: "100px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <h5
                          style={{ fontWeight: "600 !important" }}
                          className="mt-3"
                        >
                          {post.title}
                        </h5>
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
                        <div className="ms-5 my-3 d-flex justify-content-evenly">
                          <div>
                            <p className="fw-bold mb-0">Exclusions</p>
                            <p className="mb-0">Some exclusions may apply.</p>
                          </div>
                          <div>
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
                            style={{ color: "#0d6fa1", cursor: "pointer" }}
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
            </div>
          ))}
        </div>

        {/* {posts.map((post) => (
          <div
            className="col-sm-12 col-md-6 col-lg-3 mb-3"
            key={post._id}
            data-bs-toggle="modal"
            data-bs-target={`#idcoupons-${post._id}`}
            style={{ cursor: "pointer" }}
          >
            <div className="mobile-coupon-card">
              <div className="mobile-coupon-logo" style={{ padding: "10px" }}>
                <img src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1650542955747-mobile-test-logo.png" alt="" width={100} />
                <img
                  className="card-img-top"
                  src={
                    post.store.logo ? post.store.logo : process.env.STORE_IMAGE
                  }
                  loading="lazy"
                  alt={post.store.name}
                  style={{ height: "100px", width: "100px" }}
                  data-bs-toggle="modal"
                  data-bs-target={`#iddeals_${post._id}`}
                />
              </div>
              <div className="mobile-coupon-text">
                <h6 className="card-title card-store-name ">
                  {post.store.name}
                </h6>
                <h5 className="card-title coupon-card-title ">
                  {" "}
                  {post.title || "Best Deals"}
                </h5>

                <button
                  id="mobile-coupon-button"
                  data-bs-toggle="modal"
                  data-bs-target={`#iddeals_${post._id}`}
                >
                  Get Offer
                </button>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
}
