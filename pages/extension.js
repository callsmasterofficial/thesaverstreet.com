import React from "react";
import { useRouter } from "next/router";
import Button from "../components/button/Button";
import Footer from "../components/shared/Footer";
import Navigation from "../components/shared/Navigation";
export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title:
          "Deal2Coupon Extension - Automatic Apply the Best Promo Codes & Cashback",
        description:
          "Deal2Coupon Extension - Automatically finds and apply the best promo codes and cash back at checkout on your favorite stores in one click.",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Deal2Coupon extension, Deal2Coupon coupon, how to use Deal2Coupon extension, Deal2Coupon login",
        pageUrl: "https://www.thesaverstreet.com/extension",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function extension() {
  const router = useRouter();
  return (
    <div>
      <Navigation />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1646031846092-footerlogo.png"
              alt="footerlogo"
              onClick={() => router.push("/")}
              style={{ cursor: "pointer" }}
            />
            <h1 className="my-4 ext-title">
              Get Deal2Coupon Exclusive Offers!
            </h1>
            <p className="ext-txt">
              The Deal2Coupon browser extension <br></br>automatically finds the
              best promo codes<br></br> and cash back as you shop online.
            </p>
            <Button />
            <p className="people my-3">
              Over 20,000,000 people trust Deal2Coupon <br></br> to help them
              save every day.
            </p>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648212646867-extbanner.png"
              alt="extensionBanner"
            />
          </div>
        </div>
      </div>
      <div
        className="container-fluid how-it-works py-5"
        style={{ background: "#fff" }}
      >
        <div className="container">
          <h2 className="text-center ext-title" style={{ fontSize: "2.5rem" }}>
            How It Works
          </h2>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1639479948662-c.png"
              alt="c"
            />
          </div>
          <div className="col-lg-6">
            <h3 style={{ fontSize: "70px", fontWeight: "700", color: "#000" }}>
              01
            </h3>
            <h3 style={{ fontSize: "25px", fontWeight: "700" }}>
              Add in Seconds
            </h3>
            <p>
              Add Deal2Coupon Extension to your browser and start shopping.
              <br></br> It’s free and easy!
            </p>
            <Button />
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3
                style={{
                  fontSize: "70px",
                  fontWeight: "700",
                  color: "#000",
                }}
              >
                02
              </h3>
              <h3 style={{ fontSize: "25px", fontWeight: "700" }}>
                Shop Like Normal
              </h3>
              <p>
                Deal2Coupon Extension tests and applies codes and<br></br> cash
                back offers for you in seconds.
              </p>
              <Button />
            </div>
            <div className="col-lg-6">
              <img
                src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1639487011533-ext4.png"
                width="100%"
                alt="ext4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 py-5">
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1639487141553-extimage.png"
              style={{ width: "90%" }}
              alt="extimage"
            />
          </div>
          <div className="col-lg-6 py-5">
            <h3 style={{ fontSize: "70px", fontWeight: "700", color: "#000" }}>
              03
            </h3>
            <h3 style={{ fontSize: "25px", fontWeight: "700" }}>
              We’ll do the work
            </h3>
            <p>
              Shop confidently knowing that Deal2Coupon has got your back.
              <br></br> It’s free and easy!
            </p>
            <Button />
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="ext-title text-center" style={{ fontSize: "2.3rem" }}>
          Available Online at 45,000+ Stores and Counting
        </h3>
        <p className="text-center py-3">
          Whether you’re ordering pizza, picking up shoes, or booking travel,
          we’ll look for coupons when you shop on thousands of sites.
        </p>
        <div className="row my-5 align-items-center">
          <div className="col-lg-3 pb-5">
            <h2>Top Retailers</h2>
            <p className="my-4">
              Get cash back at hundreds of top national retailers, online or
              in-store.
            </p>
            <p
              className="my-4"
              style={{
                textDecoration: "underline",
                fontWeight: "600",
                fontSize: "20px",
                color: "#000",
              }}
            >
              See More
            </p>
          </div>
          <div className="col-lg-9 pb-5 top-retailers d-flex justify-content-between">
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1631270069188-hobby-lobby.png"
              alt="hobby-lobby"
            />
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1631270231108-walmart.png"
              alt="walmart"
            />
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1631270083665-best-buy.png"
              alt="best-buy"
            />
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1631270214298-target.png"
              alt="target"
            />
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1631270145937-expedia.png"
              alt="expedia"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row achieve py-5">
            <div className="col-lg-4 text-center extBox">
              <h3 className="py-3">$38M</h3>
              <p>Savings Found in 2020</p>
            </div>
            <div className="col-lg-4 text-center">
              <h3 className="py-3">45,000+</h3>
              <p>Supported Stores</p>
            </div>
            <div className="col-lg-4 text-center">
              <h3 className="py-3">550+</h3>
              <p>Cash Back Offers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 text-center">
        <h3 className="ext-title text-center pt-5" style={{ fontSize: "2rem" }}>
          Save Time And Money, Install Deal2Coupon Today!
        </h3>
        <p className="text-center pt-3">
          Deal2Coupon is also available for other Browsers
        </p>
        <div style={{ width: "60%", margin: "auto" }}>
          <Button />
        </div>
      </div>
      <Footer />
    </div>
  );
}
