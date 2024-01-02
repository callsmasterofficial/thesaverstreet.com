import React from "react";
import axios from "axios";
import Link from "next/link";
import Error from "next/error";
import stores from "../../data/stores";
import Footer from "../../components/shared/Footer";

export async function getServerSideProps(context) {
  
  try {
    const search = context.params.search;
    const filteredStores = stores.filter(
      (store) =>
        (store.name &&
          store.name.toLowerCase().includes(search.toLowerCase())) ||
        (store.slug && store.slug.toLowerCase().includes(search.toLowerCase()))
    );
    return {
      props: { stores:filteredStores },
    };
  } catch (err) {
    
    return {
      props: {},
    };
  }
}

const search = ({ stores }) => {
  return (
    <>
      {stores && stores.length > 0 ? (
        <div className="container">
          <div className="text-center my-4">
            <h2>Searched Stores</h2>
          </div>
          <div className="row py-3">
            {stores.map((store) => (
              <div
                className="h-100 col-6 col-sm-4 col-md-3 col-lg-2 mb-4 cursor-pointer"
                key={`${store.type}-store-${store.id}`}
              >
                <div className="card border-0  storeItem shadow">
                  <div className="card-body">
                    <div className="no-gutter justify-content-center text-center">
                      <div>
                        <Link href={`/all-stores/${store.slug}`}>
                          <img
                            src={
                              store.logo ? store.logo : process.env.STORE_IMAGE
                            }
                            width="100px"
                            height={"100px"}
                            alt={store.name}
                            style={{
                              objectFit: "contain",
                              cursor: "pointer",
                            }}
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
      ) : (
        <Error statusCode={404} />
      )}
      <Footer />
    </>
  );
};

export default search;
