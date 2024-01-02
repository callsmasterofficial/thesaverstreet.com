import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { successMessage, errorMessage } from "../lib/dom-function";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title: "Forgot Password | Deal2Coupon Account | Deal2Coupon",
        description: "",
        keywords: "",
        pageUrl: "https://www.thesaverstreet.com/forgot-password",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function forgotPassword() {
  const [email, setEmail] = useState("");

  const cancelbtnHandler = () => {
    history.go(-1);
  };
  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const blurHandler = () => {
    const userEmail = document.getElementById("forgotpassword");
    let regex = /^([a-zA-Z0-9]+)\@([a-zA-Z]+)\.([a-zA-Z]){2,6}$/;
    if (!regex.test(email)) {
      userEmail.classList.remove("is-invalid");
    } else {
      userEmail.classList.add("is-invalid");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/user/forgot-password", { email: email })
      .then((res) => {
        document.getElementById("message-box").innerHTML = successMessage(
          res.data.message
        );
        setEmail("");
      })
      .catch((err) => {
        document.getElementById("message-box").innerHTML = errorMessage(
          err.response.data.message
        );
      });
  };
  return (
    <div className="login-bg">
      <p className="return-home">
        {" "}
        <svg
          stroke="currentColor"
          fill="#0d7ab2"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
        </svg>{" "}
        <Link href={"/"}> Return to Homepage </Link>
      </p>
      <div className="container">
        <div className="row vh-100 d-flex align-items-center justify-content-center">
          <div className="col-sm-9 col-md-7 col-lg-5">
            <div className="card border-0 shadow rounded-3">
              <div className="card-body p-4 p-sm-4">
                <div id="message-box" className="m-3"></div>
                <h5 className="card-title mb-3 fw-bold fs-5">
                  Find Your Account
                </h5>
                <hr />
                <p>Please enter your email to search for your account.</p>
                <form>
                  <div className="mb-3">
                    <input
                      id="forgotpassword"
                      type="text"
                      value={email}
                      className="form-control border shadow-none p-2"
                      placeholder="Enter email"
                      onBlur={blurHandler}
                      onChange={onChangeHandler}
                    />
                    <small
                      id="emailvalid"
                      className="form-text invalid-feedback text-danger"
                    >
                      Please Enter valid E-Mail
                    </small>
                  </div>
                  <div className="text-end">
                    <button
                      onClick={cancelbtnHandler}
                      id="cancelBtn"
                      type="button"
                      className="btn shadow-none me-2"
                      style={{
                        backgroundColor: "rgb(223 57 64)",
                        color: "white",
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={submitHandler}
                      type="submit"
                      className="btn shadow-none text-end"
                      style={{
                        backgroundColor: "rgb(13 111 161)",
                        color: "white",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
