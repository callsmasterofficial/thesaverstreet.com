import React from "react";
import axios from "../../../lib/axios";
import { useRouter } from "next/router";
import FacebookLogin from "react-facebook-login";
import { FaFacebook } from "react-icons/fa";

const LoginWithFacebook = ({ text }) => {
  const router = useRouter();
  const responseFacebook = (response) => {
    const values = {
      accessToken: response.accessToken,
      userID: response.userID,
    };
    axios
      .post(`/api/user/login-with-facebook`, values)
      .then((res) => {
        localStorage.setItem("session", res.token);
        location.replace("/dashboard");
      })
      .catch((err) => {
    
      });
  };

  return (
    <div
      className="shadow loginWithFB"
    >
      <div className="d-inline-block bg-light" style={{ padding: "5px" }}>
        <FaFacebook size={25} className="me-1" color={"#4c69ba"} />
      </div>
      <div className="d-inline-block ms-1">
        <FacebookLogin
          appId="924106238290447"
          textButton={text}
          callback={responseFacebook}
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>Facebook</button>
          )}
        />
      </div>
    </div>
  );
};

export default LoginWithFacebook;
