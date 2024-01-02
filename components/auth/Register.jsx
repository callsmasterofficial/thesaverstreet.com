import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { successMessage, errorMessage } from "../../lib/dom-function";
import LoginWithGoogle from "../shared/Auth/LoginWithGoogle";
import LoginWithFacebook from "../shared/Auth/LoginWithFacebook";
const LoginWithApple = dynamic(() => import("../shared/Auth/LoginWithApple"), {
  ssr: false,
});

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formSchema = {
    userName: (value) => /^[a-zA-Z]([a-zA-Z0-9]+)$/.test(value),
    email: (value) =>
      /^([a-zA-Z0-9.-_]+)\@([a-zA-Z]+)\.([a-zA-Z]){2,6}$/.test(value),
    password: (value) => (value ? true : false),
    confirmPassword: (value) =>
      formData.password && value === formData.password,
  };

  const blurHandler = (key) => {
    setFormError({ ...formError, [key]: !formSchema[key](formData[key]) });
  };
  const changeHandler = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const registerSubmitHandler = (e) => {
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
          .post("/api/user/register", formData)
          .then((res) => {
            document.getElementById("message-box").innerHTML = successMessage(
              res.data.message
            );
            setFormData({
              userName: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
            setIsLoading(false);
          })
          .catch((err) => {
            document.getElementById("message-box").innerHTML = errorMessage(
              err.response.data.message
            );
            setIsLoading(false);
          });
      }
    } catch (err) {
      
    }
  };

  const fieldClass = "form-control border-0 border-bottom shadow-none";

  return (
    <form onSubmit={registerSubmitHandler} id="registerForm">
      <div className="mb-2">
        <input
          id="userName"
          type="text"
          className={
            formError.userName ? `${fieldClass} is-invalid` : fieldClass
          }
          placeholder="Name"
          value={formData.userName}
          onBlur={(e) => blurHandler("userName")}
          onChange={(e) => changeHandler(e, "userName")}
        />
        <small className="form-text text-danger invalid-feedback">
          Your username must be 2-10 characters long and should not start with
          Digit
        </small>
      </div>
      <div className="mb-2">
        <input
          id="userEmail"
          type="email"
          className={formError.email ? `${fieldClass} is-invalid` : fieldClass}
          placeholder="Email address"
          value={formData.email}
          onBlur={(e) => blurHandler("email")}
          onChange={(e) => changeHandler(e, "email")}
        />
        <small className="form-text text-danger invalid-feedback">
          Please Enter valid E-Mail
        </small>
      </div>
      <div className="mb-2">
        <input
          id="password"
          type="password"
          className={
            formError.password ? `${fieldClass} is-invalid` : fieldClass
          }
          value={formData.password}
          placeholder="Password"
          onBlur={(e) => blurHandler("password")}
          onChange={(e) => changeHandler(e, "password")}
        />
        <small className="form-text text-danger invalid-feedback">
          Password is required
        </small>
      </div>
      <div className="mb-2">
        <input
          id="confirmPassword"
          type="password"
          className={
            formError.confirmPassword ? `${fieldClass} is-invalid` : fieldClass
          }
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onBlur={(e) => blurHandler("confirmPassword")}
          onChange={(e) => changeHandler(e, "confirmPassword")}
        />
        <small className="form-text text-danger invalid-feedback">
          password doesn&apos;t match!
        </small>
      </div>
      <div className="d-grid">
        <button className="btn btn-primary btn-login fw-bold" type="submit">
          {isLoading ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Sign up"
          )}
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-2">
        <span>Have an account?</span>
        <Link href="/login">
          <a className="ms-2">Login</a>
        </Link>
      </div>
      <hr />
      <div className="d-grid mb-2">
        <LoginWithGoogle text="Continue with Google" className="pl-5" />
      </div>
      <div className="d-grid mb-2">
        <LoginWithFacebook text="Continue with Facebook" />
      </div>
      <div className="mb-2">
        <LoginWithApple />
      </div>
    </form>
  );
}
