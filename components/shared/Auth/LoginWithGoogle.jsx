import React from "react";
import GoogleLogin from "react-google-login";
import axios from "../../../lib/axios";
import { useRouter } from "next/router";

const LoginWithGoogle = ({text}) => {
  const router = useRouter();
  const responseSuccessGoogle = (response) => {
    const values = {
      tokenId: response.tokenId,
    };
    axios
      .post(`/api/user/login-with-google`, values)
      .then((res) => {
        localStorage.setItem("session", res.token);
        // router.push("/dashboard");
        location.replace("/dashboard");
        // document.querySelector("#loginModalCenter .btn-close")?.click();
        // document.querySelector("#registerModalCenter .btn-close")?.click();
      })
      .catch((err) => {
     
      });
  };

  const responseErrorGoogle = (response) => {
  };
  return (
    <div className="d-grid">
    <GoogleLogin
      clientId={process.env.GOOGLE_AUTH_CLIENTID}
      buttonText={text}
      onSuccess={responseSuccessGoogle}
      onFailure={responseErrorGoogle}
      cookiePolicy={"single_host_origin"}
      className="btn btn-google btns fw-light"
    />
    </div>
  );
};

export default LoginWithGoogle;
