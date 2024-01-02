import { FaCertificate } from "react-icons/fa";
export default function DealsContent({ deals }) {
  return (
    <div className="col col-sm-12 col-md-12 col-lg-9">
      <div className="row mb-2">
        {deals.map((deal) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={deal._id}>
            <div className="deals_content_container card py-3 shadow-sm featured-card"  data-bs-toggle="modal" data-bs-target={`#id${deal._id}`} >
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
            </div>
            <div
              className="modal fade"
              id={`id${deal._id}`}
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
                          deal.store.logo
                            ? deal.store.logo
                            : process.env.STORE_IMAGE
                        }
                        alt={deal.store.name}
                        style={{
                          height: "80px",
                          width: "80px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <h4 className="mt-3">{deal.store.name}</h4>
                    <span>{deal.title || "Best Deals"}</span>
                  </div>
                  <div className="modal-footer">
                    <a href={deal.url} target="_blank" rel="noreferrer">
                      <button type="button" className="btn">
                        Activate Deal
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
