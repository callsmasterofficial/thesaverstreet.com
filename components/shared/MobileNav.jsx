import React from 'react'

export default function MobileNav() {
  return (
    <div>
        <div className="container-fluid Mobile-menu-item d-block d-lg-none">
        <div
          className="row"
          style={{ paddingTop: " 10px", paddingBottom: "10px" }}
        >
          <div className="d-flex align-items-center">
            <div>
              <Link href="/" passHref>
                <img
                  src="./images/logo.png"
                  style={{
                    cursor: "pointer",
                    marginRight: "15px",
                    height: "38px",
                  }}
                  alt="..."
                />
              </Link>
            </div>
            <div className="row">
              <form onSubmit={formsubmitHandler}>
                <span
                  className="input-group-text mobile-input"
                  id="basic-addon1"
                ></span>
                <input
                  className="form-control shadow-none"
                  style={{
                    background: "#f5f5f5",
                    padding: "10px 22px !important",
                    borderRadius: "20px",
                    fontSize: "12px",
                    width: "120%",
                  }}
                  type="search"
                  placeholder="Search for stores or items"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </form>
            </div>
            <div
              className="ms-auto mt-0.5 hamburger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
              </svg>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="d-flex justify-content-evenly">
                      <p className="px-5 py-2 border inline-block rounded-pill fw-bold" 
                       data-bs-dismiss="modal"  data-bs-toggle="modal"
                       data-bs-target="#registerModalCenter" style={mobilestylep}
                       onClick={()=>setActive("join")}
                       >
                        join
                      </p>
                      <p className="px-5 py-2 border inline-block rounded-pill fw-bold" data-bs-dismiss="modal"
                       style={mobilestylep}
                       data-bs-toggle="modal"
                       data-bs-target="#loginModalCenter"
                       onClick={()=>setActive("login")}
                       >
                        login
                      </p>
                    </div>
                    <Link href="/all-stores" passHref>
                     <p  style={mobilestylep} 
                      data-bs-dismiss="modal" >Stores</p>
                     </Link>
                     <Link href="/deal-of-the-day" data-bs-dismiss="modal"  passHref>
                     <p  style={mobilestylep}>Deal of the day</p>
                      </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
