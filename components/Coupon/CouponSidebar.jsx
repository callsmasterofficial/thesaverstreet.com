import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function CouponSidebar({ deals, RemoveStore, AddStore }) {
  const [stores, setstores] = useState([]);
  const [filteredstores, setFilteredstores] = useState([]);

  useEffect(() => {
    document
      .getElementById("filterByStore")
      .addEventListener("click", function () {
        document
          .getElementById("formFilter")
          .classList.toggle("heightController");
      });
  }, []);

  useEffect(() => {
    let rawArr = [];
    deals.forEach((item) => {
      rawArr.push(item.store.name);
    });
    setstores([...new Set(rawArr)]);
    setFilteredstores([...new Set(rawArr)]);
  }, [deals]);

  function ChangeHandler(e) {
    const value = e.target.value;
    if (e.target.checked) {
      AddStore(value);
    } else {
      RemoveStore(value);
    }
  }

  const searchFilterHandler = (e) => {
    const search = e.target.value;
    if (search.length > 0) {
      setFilteredstores(
        stores.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredstores(stores);
    }
  };

  return (
    <div className="col col-sm-12 col-md-12 col-lg-3 rounded tcsidebar">
      <div className="shadow-sm rounded bg-white">
        {/* FILTER BY */}
        <div
          className="pl-4 pr-4 pt-3 pb-3 text-white text-center p-2"
          id="filterBy"
        >
          <h6 id="filterH6" >FILTER BY</h6>
        </div>

        <div className="filtersBody">
          <div className="filters-card border-bottom p-3">
            <div
              className="filters-card-header ps-2 d-flex justify-content-between"
              id="filterByStore"
            >
              <h6 className="mb-0 headingStore">STORES</h6>
              <FaAngleDown className="arrowDown" />
            </div>
            {/* form and filter */}
            {}
            <div className="formAndFilter" id="formFilter">
              <form className="filters-search my-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control csInput mt-2 ps-3 border filterByInput"
                    placeholder="Search Stores"
                    onChange={searchFilterHandler}
                    
                  />
                </div>
              </form>

              <div id="stores" className="ms-2">
                {filteredstores.sort().map((storeName, index) => (
                  <div
                    className="custom-control custom-checkbox p-1"
                    key={`filterStore${index}`}
                    id="inputStoreName"
                  >
                    <input
                      type="checkbox"
                      className="custom-control-input form-check-input shadow-none"
                      id={index}
                      value={storeName}
                      onChange={ChangeHandler}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={index}
                      style={{ width: "170px" }}
                      id="storename"
                    >
                      {storeName}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
