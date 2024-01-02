import React from "react";

const PopularCoupons = ({ posts }) => {
  const copyToClipboard = (id) => {
    let codeValue = document.getElementById(id);
    setTimeout(() => {
      navigator.clipboard.writeText(codeValue.value);
      
    }, 1000);
  };

  return (
    <div className="container">
      <h3 className="my-4 home-h3">Popular Coupons</h3>
      <div className="line-divider">
        <span className="line-mask blue-bg"></span>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12  ">
          {posts.map((post) => (
            <div
              className="pditem rounded p-3 mb-3 bg-white shadow-sm d-flex justify-content-between align-items-center border"
              key={post._id}
            >
              <div className="d-flex imgText">
                <img
                  className="mr-3 shadow-sm rounded-pill"
                  loading="lazy"
                  src={
                    post.store.logo ? post.store.logo : process.env.COUPON_IMAGE
                  }
                  alt={post.store.name}
                  style={{
                    height: "100px ",
                    width: "100px ",
                    padding: "5px",
                    objectFit: "contain",
                  }}
                />
                <div className="ms-4 mt-2">
                  <p className="mb-1 para">{post.store.name}</p>
                  <p
                    className="mb-1 textWidth"
                    style={{
                      fontSize: "20px",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      width: "500px",
                      fontWeight: "600",
                    }}
                  >
                    {post.title || "Best Deals"}
                  </p>
                  <p className="text-secondary" style={{ fontSize: "13px" }}>
                    {(post.cat[0] && post.cat[0]) || "OTHERS"}
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="btn popularDealsBtn"
                  data-bs-toggle="modal"
                  data-bs-target={`#idpcoupon${post._id}`}
                >
                  Show Coupon Code
                </button>
              </div>
              <div
                className="modal fade"
                id={`idpcoupon${post._id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div
                    className="modal-content"
                    style={{
                      padding: "20px",
                      boxShadow: "0px 3px 10px 0px #545454",
                    }}
                  >
                    <button
                      type="button"
                      className="btn-close"
                      style={{ position: "absolute", top: "3px", right: "3px" }}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <div className="modal-body text-center">
                      <div>
                        <img
                          src={
                            post.store.logo
                              ? post.store.logo
                              : process.env.COUPON_IMAGE
                          }
                          alt={post.store.name}
                          style={{
                            height: "80px",
                            width: "80px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <h4 className="mt-3">{post.store.name}</h4>
                      <span>{post.title || "Best Deals"}</span>
                    </div>
                    <div className="input-group mb-3 px-3">
                      <input
                        id={`codevalue${post._id}`}
                        style={{
                          borderRadius: "25px",
                          fontSize: "20px",
                          fontWeight: "700",
                          paddingLeft: "25px !important",
                        }}
                        type="text"
                        className="form-control"
                        placeholder={post.code}
                        value={post.code}
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        disabled
                      />
                      <button
                        className="btn Btn1"
                        type="button"
                        id="button-addon2"
                        onClick={() => copyToClipboard(`codevalue${post._id}`)}
                      >
                        <a
                          href={post.url}
                          target="_blank"
                          className="text-white"
                          rel="noreferrer"
                        >
                          Copy
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCoupons;
