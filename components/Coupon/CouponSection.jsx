import CouponContent from "./CouponContent";
import CouponSidebar from "./CouponSidebar";
import { useState } from "react";

export default function CouponSection({ coupons }) {
  const [filteredStores, setFilteredStores] = useState([]);

  const addStore = (store) => {
    setFilteredStores([...filteredStores, store]);
  };

  const removeStore = (store) => {
    setFilteredStores((prevState) =>
      prevState.filter((item) => item !== store)
    );
  };
  return (
    <>
      <div className="mb-4">
        <img
          style={{ width: "100%" }}
          src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648641453668-top-coupons.jpeg"
          alt="topcouponsbanner"
        ></img>
      </div>
      <section className="container mt-3">

        <div className="row">
          <CouponSidebar
            deals={coupons}
            RemoveStore={removeStore}
            AddStore={addStore}
          />
          <CouponContent
            coupons={coupons.filter((coupon) => {
              if (filteredStores.length === 0) {
                return true;
              } else {
                return filteredStores.indexOf(coupon.store.name) > -1;
              }
            })}
          />
        </div>
      </section>
    </>

  );
}
