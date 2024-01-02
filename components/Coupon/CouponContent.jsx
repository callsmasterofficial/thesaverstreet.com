export default function CouponContent({ coupons }) {
  const codeCoupons = coupons.filter((coupon) => coupon.code);
  const copyToClipboard = (id) => {
    var copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  };
  return (
    <div className="col col-sm-12 col-md-12 col-lg-9">
      {codeCoupons.map((coupon) => (
        <div
          className="pditem rounded p-3 mb-3 bg-white shadow-sm d-flex justify-content-between align-items-center"
          key={coupon._id}
        >
          <div className="d-flex imgText">
            <img
              className="mr-3 shadow-sm rounded-pill"
              loading="lazy"
              src={
                coupon.store.logo ? coupon.store.logo : process.env.STORE_IMAGE
              }
              style={{
                height: "100px ",
                width: "100px ",
                padding: "5px",
                objectFit: "contain",
              }}
            />
            <div className="ms-4 mt-2">
              <p className="mb-0 para">{coupon.store.name}</p>
              <p
                className="mb-0 textWidth"
                style={{
                  fontSize: "20px",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "500px",
                }}
              >
                {coupon.title || "Best Deals"}
              </p>
              <p className="text-secondary">
                {(coupon.cat[0] && coupon.cat[0]) || "OTHERS"}
              </p>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="popularDealsBtn"
              style={{ minWidth: 0, padding: "10px", borderRadius: "4px", border: "none" }}
              data-bs-toggle="modal"
              data-bs-target={`#id${coupon._id}`}
            >
              Show Code
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
                        coupon.store.logo
                          ? coupon.store.logo
                          : process.env.STORE_IMAGE
                      }
                      alt={coupon.store.name}
                      style={{
                        height: "80px",
                        width: "80px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <h4 className="mt-3">{coupon.store.name}</h4>
                  <span>{coupon.title || "Best Deals"}</span>
                </div>
                <div className="input-group mb-3 px-3">
                      <input
                        id={`couponinput${coupon._id}`}
                        type="text"
                        className="form-control"
                        placeholder={coupon.code}
                        value={coupon.code}
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        disabled
                      />
                      <button
                        className="btn btn-primary "
                        type="button"
                        id="button-addon2"
                        onClick={() => copyToClipboard(`couponinput${coupon._id}`)}
                      >
                        <a
                          href={coupon.url}
                          target="_blank"
                          className="text-white"
                          rel="noreferrer"
                        >
                          copy
                        </a>
                      </button>
                    </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
