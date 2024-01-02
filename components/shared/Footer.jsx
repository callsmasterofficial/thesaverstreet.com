import React from "react";
import Link from "next/link";
import { CgChevronDoubleRight } from "react-icons/cg";
import { Facebook, Instagram, Pintrest, Twitter } from "./icons";
function Footer() {
  return (
    <div
      className="container-fluid footer pt-5 px-0"
      style={{ background: "white" }}
    >
      <div className="container">
        <div className="footerCont">
          <div className="col-lg-3 first-footer-column">
            <div className="footer-logo">
              <Link href="/">
                <img
                  src="./images/logo3.svg"
                  style={{ cursor: "pointer" }}
                  className="footerDeal2CouponImg"
                  alt="Deal to Coupon"
                  style={{ width: "200px" }}
                />
              </Link>
              <div className="social-media mt-3" style={{ cursor: "pointer" }}>
                <Link
                  href="https://www.facebook.com/joinDeal2Coupon"
                  target="_blank"
                  className="footer_logo"
                >
                  <Facebook height="2rem" width="2rem" color="#000" />
                </Link>
                <Link
                  href="https://www.instagram.com/joinDeal2Coupon/"
                  target="_blank"
                  className="footer_logo"
                >
                  <Instagram height="2rem" width="2rem" color="#000" />
                </Link>
                <Link
                  href="https://in.pinterest.com/joinDeal2Coupon2911/_saved/"
                  target="_blank"
                  className="footer_logo"
                >
                  <Pintrest height="2rem" width="2rem" color="#000" />
                </Link>
                <Link
                  href="https://twitter.com/Deal2CouponJoin"
                  className="footer_logo"
                  target="_blank"
                >
                  <Twitter height="2rem" width="2rem" color="#000" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 findDeals">
            <h6 className="bottomHeading ">FIND DEALS </h6>
            <Link href="/top-coupons" passHref>
              <div>
                <CgChevronDoubleRight color="" /> Top Coupons
              </div>
            </Link>
            <Link href="/deal-of-the-day" passHref>
              <div>
                <CgChevronDoubleRight /> Deal Of The Day
              </div>
            </Link>
            <Link href="/cyber-monday" passHref>
              <div>
                <CgChevronDoubleRight /> Cyber Monday Deals
              </div>
            </Link>
            <Link href="/black-friday" passHref>
              <div>
                <CgChevronDoubleRight /> Black Friday Deals
              </div>
            </Link>
          </div>
          <div className="col-lg-2 footer-logo">
            <h6 className="bottomHeading">LEGALS</h6>
            <Link href="/privacy-policy" passHref>
              <div>
                <CgChevronDoubleRight /> Privacy Policy
              </div>
            </Link>
            <Link href="/copyright" passHref>
              <div>
                {" "}
                <CgChevronDoubleRight /> Copyright
              </div>
            </Link>
            <Link href="/accessibility-statement" passHref>
              <div>
                <CgChevronDoubleRight /> Accessibility
              </div>
            </Link>
            <Link href="/do-not-sell-my-info" passHref>
              <div>
                <CgChevronDoubleRight /> Do not sell info
              </div>
            </Link>
            <Link href="/terms-of-use" passHref>
              <div>
                <CgChevronDoubleRight /> Terms of Use
              </div>
            </Link>
          </div>
          <div className="col-lg-2 companyf">
            <h6 className="bottomHeading">COMPANY</h6>
            <Link href="/Deal2Coupon-coins" passHref>
              <div>
                <CgChevronDoubleRight /> Deal2Coupon Coins
              </div>
            </Link>
            <Link href="/about" passHref>
              <div>
                <CgChevronDoubleRight /> About
              </div>
            </Link>
            <Link href="/blog" passHref>
              <div>
                <CgChevronDoubleRight /> Blog
              </div>
            </Link>
            <Link href="/extension" passHref>
              <div>
                <CgChevronDoubleRight /> Extension
              </div>
            </Link>
            <Link href="/frequently-asked-questions" passHref>
              <div>
                <CgChevronDoubleRight /> FAQ&apos;s
              </div>
            </Link>
          </div>
          <div className="col-lg-3 newsletter">
            <h6 className="bottomHeading">NEWSLETTER</h6>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "2",
                marginBottom: "10px",
              }}
            >
              You can get latest update from us by subscribing to our
              newsletter.
            </p>
            <input className="input_footer" type="text" />
            <button
              type="submit"
              className="btn btn-color mx-auto popularDealsBtn"
            >
              {" "}
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-bar text-center mt-5 ">
        <p
          style={{ fontSize: "13px", lineHeight: "2" }}
          className="footerContP"
        >
          Deal2Coupon is registered trademark of Callsmaster Services LLP.
          Third-party trademarks are the property of their respective
          third-party owners. Presence of a third-party trademark does
          <br></br> not mean that Deal2Coupon has any relationship with that
          third-party or that the third-party endorses Deal2Coupon or its
          services.
        </p>
      </div>

      <div
        className="container-fluid bottom-footer text-center py-3"
        style={{ background: "black" }}
      >
        <small className="text-white">
          © Copyright 2022, All Rights Reserved Callsmaster Services LLP
        </small>
      </div>
    </div>
  );
}

export default Footer;
