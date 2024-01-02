import React, { useEffect } from "react";
import scriptjs from "scriptjs";
// import { useRouter } from "next/router";
import axios from "axios";

const LoginWithApple = () => {
  //   const router = useRouter();

  async function appleSignIn() {
    var data = await AppleID.auth.signIn();
    axios
      .post("/api/user/login-with-apple", {
        tokenId: data.authorization.id_token,
      })
      .then((res) => {
        localStorage.setItem("session", res.token);
        location.replace("/dashboard");
      })
      .catch((err) => {});
  }

  useEffect(() => {
    scriptjs.get(
      "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
      () => {
        const params = {
          clientId: "com.thesaverstreet.com.sid",
          redirectURI: "https://www.thesaverstreet.com/dashboard",
          scope: "name email",
          usePopup: true,
        };
        window.AppleID.auth.init(params);
      }
    );
  }, []);

  return (
    <div onClick={appleSignIn} className="shadow loginWithApple">
      <div className="d-inline-block bg-light" style={{ padding: "5px" }}>
        <svg
          stroke="currentColor"
          fill="#909090"
          strokeWidth={0}
          viewBox="0 0 384 512"
          height="25px"
          width="25px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
      </div>
      <div className="d-inline-block ms-2">
        <span style={{ transition: "opacity 0.5s ease 0s" }}>
          <button
            type="button"
            className="kep-login-facebook metro border-0"
            style={{ backgroundColor: "#909090" }}
          >
            Login with Apple
          </button>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default LoginWithApple;
