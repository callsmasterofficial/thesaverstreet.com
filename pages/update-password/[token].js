import axios from "axios";
import db from "../../config/db";
import User from "../../models/user";
import { useRouter } from "next/router";
import { useState } from "react";
import { verify } from "jsonwebtoken";
import { errorMessage } from "../../lib/dom-function";

export async function getServerSideProps({ params: { token } }) {
  try {
    await db();
    const { email } = await verify(token, process.env.TOKEN_KEY);
    const user = await User.findOne({ email, token });
    if (user) {
      return {
        props: {
          token,
        },
      };
    }
    return {
      redirect: {
        permanent: false,
        destination: "/forgot-password",
      },
    };
  } catch (err) {
    return {
      props: { err: JSON.parse(JSON.stringify(err)) },
    };
  }
}

export default function token({ token, err }) {
  const history = useRouter();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    token,
  });

  const changeHandler = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };
  const passwordBlurHandler = () => {
    const password = document.getElementById("password");
    if (formData.password.length > 0) {
      password.classList.remove("is-invalid");
    } else {
      password.classList.add("is-invalid");
    }
  };

  const confirmPasswordHandler = () => {
    const confirmPassword = document.getElementById("confirmPassword");
    if (formData.confirmPassword === formData.password) {
      confirmPassword.classList.remove("is-invalid");
    } else {
      confirmPassword.classList.add("is-invalid");
    }
  };

  const SubmitHandler = (e) => {
    try {
      e.preventDefault();
      axios
        .post("/api/user/update-password", formData)
        .then((res) => {
          history.push("/login");
        })
        .catch((err) => {
          document.getElementById("message-box").innerHTML = errorMessage(
            err.response.data.message
          );
        });
    } catch (err) {
 
    }
  };

  return (
    <div className="container">
      <div className="row updatePasswordForm d-flex align-items-center justify-content-center">
        <div className="col-sm-9 col-md-7 col-lg-5">
          <div className="card border-0 shadow rounded-3">
            <div className="card-body p-4 p-sm-4">
              <div id="message-box" className="m-3"></div>
              <h5 className="card-title mb-3 fs-5">Update Password</h5>
              <hr />
              <form>
                <div className="mb-3">
                  <input
                    id="password"
                    type="password"
                    className="form-control border shadow-none p-2"
                    placeholder="Enter new password"
                    onChange={(e) => changeHandler(e, "password")}
                    onBlur={passwordBlurHandler}
                  />
                  <small
                    id="password"
                    className="form-text invalid-feedback text-danger"
                  >
                    password can't be empty.
                  </small>
                  <input
                    id="confirmPassword"
                    type="password"
                    className="form-control border shadow-none p-2 mt-3"
                    placeholder="Confirm new password"
                    onChange={(e) => changeHandler(e, "confirmPassword")}
                    onBlur={confirmPasswordHandler}
                  />
                  <small
                    id="confirmPassword"
                    className="form-text invalid-feedback text-danger"
                  >
                    password doesn't match!
                  </small>
                </div>
                <div className="text-start">
                  <button
                    onClick={SubmitHandler}
                    type="submit"
                    className="btn shadow-none text-end"
                    style={{
                      backgroundColor: "rgb(13 111 161)",
                      color: "white",
                    }}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
