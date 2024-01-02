import React from "react";
import { FaSearch } from "react-icons/fa";
const Form = () => {
  return (
      <div className="allstoreHeader">
        <h1 className="text-center pt-3">
          <strong>Find Best Categories on </strong>
          <span className="fw-light">Deal2Coupon</span>
        </h1>
        <div className="searchContainer mt-4">
          <form>
            <div className="row mt-3 ms-2 d-flex justify-content-center">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control shadow-none rounded-pill p-3 ps-4"
                  placeholder="Search here for categories"
                />
              </div>
              <div className="col-2 rounded-pill">
                <button
                  type="submit"
                  className="btn rounded-pill btn btn-primary allstoreSearchBtn p-3"
                >
                  <FaSearch size={20} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Form;
