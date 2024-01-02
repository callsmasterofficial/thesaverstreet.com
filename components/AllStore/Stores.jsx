import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import SectionLoader from "../shared/loader/SectionLoader";

export default function Stores({ stores }) {
  const [allstores, setAllstores] = useState(stores);
  const [page, setPage] = useState(1);
  const [hasMore, setMore] = useState(true);
  const [search, setSearch] = useState("");

  const formsubmitHandler = async (e) => {
    try {
      e.preventDefault();
      if (search.trim().length > 0) {
        setAllstores([]);
        setPage(1);
        const searchedStores = await axios.get(
          `/api/stores/searchStore?page=0&search=${search}`
        );
        if (stores.length > 0) {
          setAllstores(searchedStores.data);
          setMore(false);
        } else {
          setMore(false);
        }
      }
    } catch (err) {
     
    }
  };

  const loadProducts = async () => {
    try {
      const url =
        search && search.trim().length > 0
          ? `/api/stores/searchStore?page=${page}&search=${search}`
          : `/api/stores/get-stores?page=${page}`;
      const response = await axios.get(url);
      const scrolledStores = response.data.stores;

      if (stores.length > 0) {
        setAllstores([...allstores, ...scrolledStores]);
      } else {
        setMore(false);
      }
      setPage(page + 1);
    } catch (err) {
    
    }
  };
  return (
    <section>
      <img
        style={{width:"100%"}}
        src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648815293599-all-stores.jpeg"
        alt="top stores"
      ></img>
      <div className="container">
        <div className="allstoreHeader">
          <div className="sub-head d-flex justify-content-center align-items-center my-4">
            <h1>
              <strong>Find Best Stores on </strong>
              <span className="fw-light">Deal2Coupon</span>
            </h1>
          </div>

          <div className="searchContainer">
            <form onSubmit={formsubmitHandler}>
              <div className="row justify-content-center">
                <div className="col-8">
                  <input
                    type="text"
                    name="searchtext"
                    className="form-control shadow-none p-3 px-4"
                    placeholder="Search here for stores"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />
                </div>
                <div className="col-2">
                  <button
                    type="submit"
                    className="btn  btn btn-primary allstoreSearchBtn"
                  >
                    <FaSearch size={20} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* body content */}
      <InfiniteScroll
        dataLength={allstores.length}
        next={loadProducts}
        hasMore={hasMore}
        loader={<SectionLoader />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <div className="container text-start">
              <h3>ALL STORES</h3>
              <p>
                Think of a store and shop there from here. Deal2Coupon hunts for the
                best coupons for more than 44,000+ stores and applies on your
                cart for all the bargain hunters. We have every possible
                category in store for you. Look out for the heartiest deals and
                savings of your life and get drenched in the discount rain.
              </p>
              <h3>SHOP AND EARN WITH THESE STORES</h3>
              <p>
                Every time you shop with us, you earn Deal2Coupon coins worth real
                money. You can choose how you want to redeem your coins. You can
                withdraw your money or use those coins for discounts on more
                shopping.
              </p>
              <p>
                Note: The range of Deal2Coupon coins differs with every store shown
                below and applies to specific items. Terms and Exceptions apply.
              </p>

              <p>
                Exceptions - The number of Deal2Coupon coins will vary for each
                store you shop from, which will be set by the merchants. It also
                depends upon what and how much you shop. Furthermore, there
                could be certain products and categories that are not eligible
                for earning Deal2Coupon coins. However, these exceptions and
                exclusions vary and are decided by the stores. Please remember,
                Deal2Coupon can’t decide whether the products you have purchased are
                eligible for earning Deal2Coupon coins or not until after you have
                made the purchase. Therefore, if you have bought ineligible
                items for Deal2Coupon coins, you will not earn any Deal2Coupon coins
                through your purchases. Hence, the final number of coins earned
                will be rewarded directly to your Deal2Coupon wallet, and you will
                be able to see it on your dashboard.
              </p>
            </div>
          </p>
        }
      >
        <div className="container py-5">
          <div className="row py-3" id="stores-wrapper">
            {allstores.map((store) => (
              <div
                className="h-100 col-6 col-sm-4 col-md-3 col-lg-2 mb-5 cursor-pointer"
                key={`${store.type}-store-${store.id}`}
              >
                <div className="card border-0 storeItem shadow">
                  <div className="card-body">
                    <div className="no-gutter justify-content-center text-center">
                      <div>
                        <Link href={`/all-stores/${store.slug}`} passHref>
                          <img
                            src={
                              store.logo ? store.logo : process.env.STORE_IMAGE
                            }
                            width="100px"
                            height={"100px"}
                            alt={store.name}
                            style={{ objectFit: "contain", cursor: "pointer" }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-md font-weight-bold storeText text-center fw-bold">
                  {store.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </section>
  );
}
