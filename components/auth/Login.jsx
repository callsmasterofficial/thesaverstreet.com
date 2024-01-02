import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import axios from "../../lib/axios";
import LoginWithGoogle from "../shared/Auth/LoginWithGoogle";
import LoginWithFacebook from "../shared/Auth/LoginWithFacebook";
const LoginWithApple = dynamic(() => import("../shared/Auth/LoginWithApple"), {
  ssr: false,
});

export default function Login({setUser}) {
  const [formError, setFormError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const fieldClass = "form-control border-0 border-bottom shadow-none";
  const history = useRouter();

  const formSchema = {
    email: (value) =>
      /^([a-zA-Z0-9.-_]+)\@([a-zA-Z]+)\.([a-zA-Z]){2,6}$/.test(value),
    password: (value) => (value ? true : false),
  };

  const blurHandler = (key) => {
    setFormError({ ...formError, [key]: !formSchema[key](formData[key]) });
  };
  const changeHandler = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const loginSubmitHandler = (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const errorObj = {};
      for (const key in formSchema) {
        errorObj[key] = !formSchema[key](formData[key]);
      }
      setFormError(errorObj);
      if (Object.values(errorObj).indexOf(true) === -1) {
        axios
          .post("/api/user/login", formData)
          .then((res) => {

            localStorage.setItem("session", res.token);
            location.replace("/dashboard");
            // document.querySelector("#loginModalCenter .btn-close")?.click();
          })
          .catch((err) => {
            if (err.message === "Credential doesn't match") {
              const serverMessage = document.getElementById("serverMessage");
              setFormError({ ...formError, error: err.message });
              serverMessage.innerText = err.message;
              setIsLoading(false);
            } else {
              const registerFirstMessage = document.getElementById(
                "registerFirstMessage"
              );
              registerFirstMessage.classList.add("show");
              setFormError({ ...formError, error: err.message });
              registerFirstMessage.classList.remove("d-none");
              setIsLoading(false);
            }
          });
      }
    } catch (err) {
    
    }
  };

  return (
    <div className="card-body p-4 p-sm-4">
      <div
        id="registerFirstMessage"
        className="alert alert-danger alert-dismissible fade d-none"
        role="alert"
      >
        {formError.error}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <h5 className="card-title text-center mb-3 fw-bold fs-5">Log In</h5>
      <form id="loginForm" onSubmit={loginSubmitHandler}>
        <div className="mb-3">
          <input
            value={formData.email}
            id="userEmail"
            type="email"
            className={
              formError.email ? `${fieldClass} is-invalid` : fieldClass
            }
            placeholder="Enter Email"
            onBlur={(e) => blurHandler("email")}
            onChange={(e) => changeHandler(e, "email")}
          />
          <small className="form-text text-danger invalid-feedback">
            Please Enter valid E-Mail
          </small>
        </div>
        <div className="mb-2">
          <input
            value={formData.password}
            id="userPassword"
            type="password"
            className={
              formError.password ? `${fieldClass} is-invalid` : fieldClass
            }
            placeholder="Enter Password"
            onBlur={(e) => blurHandler("password")}
            onChange={(e) => changeHandler(e, "password")}
          />
          <small className="form-text text-danger invalid-feedback">
            Password is required
          </small>
          <small id="serverMessage" className="form-text text-danger"></small>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary btns fw-bold mt-2" type="submit">
            {isLoading ? (
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Log in"
            )}
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-between">
        <Link href="/register">
          <a className="d-block text-center mt-2">Signup?</a>
        </Link>
        <Link href="/forgot-password">
          <a className="d-block text-center mt-2 ">Forgot password?</a>
        </Link>
      </div>

      <hr className="my-4" />

      <div className="mb-2">
        <LoginWithGoogle text="Login with Google" />
      </div>
      <div className="mb-2">
        <LoginWithFacebook text="Login with Facebook" />
      </div>
      <div className="mb-2">
        <LoginWithApple />
      </div>
    </div>
  );
}
