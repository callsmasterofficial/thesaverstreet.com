import React from "react";
import LoginWithGoogle from "../components/shared/Auth/LoginWithGoogle";
import LoginWithFacebook from "../components/shared/Auth/LoginWithFacebook";
import Link from "next/link";
import dynamic from "next/dynamic";
const LoginWithApple = dynamic(
  () => import("../components/shared/Auth/LoginWithApple"),
  {
    ssr: false,
  }
);

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title: "Welcome | Deal2Coupon",
        description:
          "Save more with best Coupons, Promo Code, Deals & Offers available at Deal2Coupon ✔  Thousands of online stores ✔ Apply coupon at single click ✔ Get Extension",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Deal2Coupon extension, Deal2Coupon coupon, how to use Deal2Coupon extension, Deal2Coupon login",
        pageUrl: "https://www.thesaverstreet.com/welcome",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

function welcome() {
  return (
    <div style={{ height: "100vh" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 px-5 bg-white" style={{ height: "100vh" }}>
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648028812332-Deal2Coupon-logo.png"
              alt="cliper-logo"
              style={{ position: "absolute", top: "3%" }}
            />
            <div className="welcome-wrapper">
              <h3 className="how-heading">The last step is a big deal</h3>
              <p style={{ fontSize: "12px" }}>
                Congrats! Deal2Coupon is installed. Unlock more features and get
                access to exclusive rewards by creating a free account
              </p>
              <div className="d-grid mb-3">
                <LoginWithGoogle text="Join with Google" className="pl-5" />
              </div>
              <div className="d-grid mb-3">
                <LoginWithFacebook text="Join with Facebook" />
              </div>
              <div className="d-grid mb-3">
                <LoginWithApple />
              </div>
              <span style={{ fontSize: "13px" }}>
                Already a member? <Link href="/login">Log in</Link>{" "}
              </span>
            </div>
          </div>
          <div className="col-lg-8 howitwork-video">
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648039070318-cart-icon.png"
              alt="Deal2Coupon coins"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default welcome;
