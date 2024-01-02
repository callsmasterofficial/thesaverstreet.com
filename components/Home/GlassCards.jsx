import React from "react";
import Link from "next/link";

const RenderItem = ({ item, index }) => {
  const card = JSON.parse(item);
  return (
    <div
      className="col-10 col-sm-12 col-md-12 col-lg-4"
      data-bs-toggle="modal"
      data-bs-target={`#glass${index}`}
      style={{ cursor: "pointer" }}
    >
      <div>
        <a href={card.link} target="_blank" rel="noreferrer">
          <img src={card.bg_image} height={250} width="100%" alt="..."/>
          <div className="blursection d-flex justify-content-around align-items-center">
            <div>
              <span className="d-block span1">{card.heading}</span>
              <span className="d-block span2">{card.sub_heading}</span>
            </div>
            <img src={card.store_image} height={50} width={60} alt="..."/>
          </div>
        </a>
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id={`glass${index}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header p-2">
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
                  src={card.bg_image ? card.bg_image : process.env.STORE_IMAGE}
                  alt={card.heading}
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h5>{card.sub_heading}</h5>
              <span>{`Tip: No Code Needed!`}</span>
            </div>
            <div className="modal-footer pt-0 pb-0">
              <a href={card.link} target="_blank" rel="noreferrer">
                <button type="button" className="btn px-4 py-2 rounded-pill">
                  Continue to Store
                </button>
              </a>
            </div>
            <hr
              className="my-2 text-secondary opacity-25"
              style={{ height: "1px !important" }}
            />
            <div className="ms-5">
              <p className="fw-bold mb-0">Exclusions</p>
              <p className="mb-0">Some exclusions may apply.</p>
              <br></br>
              <p className="fw-bold mb-0">Details</p>
              <p className="mb-0">
                {(card.sub_heading && card.sub_deading) ||
                  "No coupon code needed. Prices as marked. Tap to shop the sale now."}
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-around">
              <div>
                <img
                  src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648212278856-laptopbanner.png"
                  alt="..."
                />
              </div>
              <div>
                <h4>Work less, save more!</h4>
                <p className="mb-0">
                  Deal Finder automatically finds the{" "}
                  <span className="fw-bold">
                    best promo
                    <br /> codes
                  </span>{" "}
                  and
                  <span className="fw-bold">cash back</span> as you shop online.
                </p>
              </div>
              <div
                className="py-2 px-4 rounded-pill atcpopupbtn"
                style={{ backgroundColor: "#0d6fa1" }}
              >
                <p className="mb-0 text-white">Add to Chrome</p>
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
  );
};

const GlassCards = ({ trendingDeals }) => {
  return (
    <div className="container mt-5 mb-2">
      <div className="row glassCardsCont">
        {Object.values(trendingDeals).map((item, index) => (
          <RenderItem item={item} index={index} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default GlassCards;
