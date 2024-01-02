import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "../../lib/axios";
import Login from "../auth/Login";
import Register from "../auth/Register";

export default function Navigation() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState();
  const [active, setActive] = useState("");

  const router = useRouter();
  const mobilestylep = { cursor: "pointer" };
  useEffect(() => {
    const token = localStorage.getItem("session");
    if (token) {
      axios
        .post(`/api/user/verify-token`, { token: token })
        .then((res) => {
          setUser(res.user);
        })
        .catch((err) => {
          localStorage.removeItem("session");
        });
    }
  }, []);

  function check() {
    setOpen(true);
  }

  const formsubmitHandler = async (e) => {
    try {
      e.preventDefault();
      if (search.trim().length > 0) {
        router.push(`/search/${search}`);
      }
    } catch (err) {}
  };

  return (
    <div className="container-fluid navWrapper">
      <div className={"container desktop-menu"}>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <div className="logo">
              <Link href="/" passHref>
                <img
                  src="/images/logo3.svg"
                  style={{
                    cursor: "pointer",
                    width: "150px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                  alt="Deal2logo"
                />
              </Link>
            </div>
            <form
              className="navform d-flex"
              style={{ width: "40%" }}
              onSubmit={formsubmitHandler}
            >
              <span className="input-group-text" id="basic-addon1">
                <svg
                  stroke="currentColor"
                  fill="#000"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="searchSvg"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                className="form-control shadow-none header-input searchInput"
                type="search"
                placeholder="Search For Stores or Items"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </form>
            <ul className="navbar-nav nav-link menu-item d-flex align-items-center">
              <Link href="/all-stores" passHref>
                <li
                  style={{
                    fontSize: "15px !important",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Stores
                </li>
              </Link>
              <Link href="/deal-of-the-day" passHref>
                <li
                  style={{
                    fontSize: "15px !important",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Deals
                </li>
              </Link>
              {/* {!user ? (
                <>
                  <li
                    className="nav-item text-decoration-none"
                    style={{
                      cursor: "pointer",
                      fontSize: "15px !important",
                      fontWeight: "500",
                    }}
                  >
                    <span
                      // type="button"
                      // class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#registerModalCenter"
                    >
                      Join
                    </span>
                  </li>

                  <li
                    className="nav-item text-decoration-none"
                    style={{
                      cursor: "pointer",
                      fontSize: "15px !important",
                      fontWeight: "500",
                    }}
                  >
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#loginModalCenter"
                    >
                      Login
                    </span>
                  </li>
                </>
              ) : (
                <Link href="/dashboard" passHref>
                  <button type="button" className="btn shadow-none">
                    {user.profile ? (
                      <img
                        className="user-info-img"
                        alt="user"
                        src={
                          user
                            ? user.profile
                            : "https://super-dashboard-images-cdn.s3.amazonaws.com/images/1627990937677-placeholder-.jpeg"
                        }
                        loading="lazy"
                        height="35px"
                        width="35px"
                        style={{ borderRadius: "50%" }}
                      />
                    ) : (
                      <svg
                        stroke="currentColor"
                        fill="#0d6fa1"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                      </svg>
                    )}
                  </button>
                </Link>
              )} */}
            </ul>

            {/* {user ? (
              <div className="The Saver Street-menu-icon">
                <img
                  className="me-1"
                  src="images/The Saver Street-menu-icon.png"
                  alt=""
                />{" "}
                0 Coins
              </div>
            ) : (
              <button className="add-to-chrome-btn my-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  width="20"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-1"
                >
                  <path d="M371.8 512c0 77.5 62.7 140.2 140.2 140.2S652.2 589.5 652.2 512 589.5 371.8 512 371.8 371.8 434.4 371.8 512zM900 362.4l-234.3 12.1c63.6 74.3 64.6 181.5 11.1 263.7l-188 289.2c78 4.2 158.4-12.9 231.2-55.2 180-104 253-322.1 180-509.8zM320.3 591.9L163.8 284.1A415.35 415.35 0 0 0 96 512c0 208 152.3 380.3 351.4 410.8l106.9-209.4c-96.6 18.2-189.9-34.8-234-121.5zm218.5-285.5l344.4 18.1C848 254.7 792.6 194 719.8 151.7 653.9 113.6 581.5 95.5 510.5 96c-122.5.5-242.2 55.2-322.1 154.5l128.2 196.9c32-91.9 124.8-146.7 222.2-141z"></path>
                </svg>
                Add to Chrome
              </button>
            )} */}
          </div>
        </nav>
      </div>

      {/* mobile navbar */}
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
                      <p
                        className="px-5 py-2 border inline-block rounded-pill fw-bold"
                        data-bs-dismiss="modal"
                        data-bs-toggle="modal"
                        data-bs-target="#registerModalCenter"
                        style={mobilestylep}
                      >
                        join
                      </p>
                      <p
                        className="px-5 py-2 border inline-block rounded-pill fw-bold"
                        data-bs-dismiss="modal"
                        style={mobilestylep}
                        data-bs-toggle="modal"
                        data-bs-target="#loginModalCenter"
                      >
                        login
                      </p>
                    </div>
                    <Link href="/all-stores" passHref>
                      <p style={mobilestylep} data-bs-dismiss="modal">
                        Stores
                      </p>
                    </Link>
                    <Link
                      href="/deal-of-the-day"
                      data-bs-dismiss="modal"
                      passHref
                    >
                      <p style={mobilestylep}>Deal of the day</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div
        className="modal fade"
        id="registerModalCenter"
        aria-labelledby="registerModalCenterTitle"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLongTitle">
                Register
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Register setUser={setUser} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="loginModalCenter"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="loginModalCenter"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="loginModalLongTitle">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Login setUser={setUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
