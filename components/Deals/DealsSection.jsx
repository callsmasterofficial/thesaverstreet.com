import DealsContent from "./DealsContent";
import DealsSidebar from "./DealsSidebar";
import React, { useState } from "react";

export default function DealsSection({ deals }) {
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
          src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648641277340-deal-of-the-day.jpeg"
          alt="topcouponsbanner"
        ></img>
      </div>
      <section>
        <div className="container pt-lg-2 mt-3">
          <div className="row">
            <DealsSidebar
              deals={deals}
              RemoveStore={removeStore}
              AddStore={addStore}
            />
            <DealsContent
              deals={deals.filter((deal) => {
                if (filteredStores.length === 0) {
                  return true;
                } else {
                  return filteredStores.indexOf(deal.store.name) > -1;
                }
              })}
            />
          </div>
        </div>
      </section>
    </>
  );
}
