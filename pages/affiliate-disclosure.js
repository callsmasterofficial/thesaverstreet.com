import React from "react";
import Footer from "../components/shared/Footer";

function affiliateDisclosure() {
  return (
    <>
      <div className="container-fluid bg-white  py-5">
        <div className="container py-5" style={{ lineHeight: "2" }}>
          <h4>Affiliate Disclosure for The Saver Street</h4>
          <h6 className="my-3">
            Welcome to The Saver Street! Our mission is to bring you the best
            deals and coupons, helping you save money every day. We believe in
            transparency, so we want to disclose that some of the links on our
            site are affiliate links.
          </h6>
          <h6 className="my-3">
            What does this mean for you? When you click on these links and make
            a purchase, we may receive a commission. This is at no extra cost to
            you. These commissions help us to keep finding great deals and
            support the running of our website.
          </h6>
          <h6 className="my-3">
            Our Promise to You We only promote products and services that we
            believe will provide value to our users. Our team carefully selects
            each deal and offer, ensuring they meet our high standards.
          </h6>
          <h6 className="my-3">
            Your Trust Matters Your trust is important to us. We strive to keep
            all our content unbiased and driven by our genuine belief in the
            quality and value of the products or services.
          </h6>
          <h6 className="my-3">
            Thank You By using The Saver Street, you’re supporting our efforts
            to bring you the best savings opportunities. We appreciate your
            trust and support.
          </h6>
          <h6 className="my-3">
            Questions? Feel free to contact us at contact@thesaverstreet.com for
            any questions about our affiliate relationships.
          </h6>
          <h6 className="my-3">
            Thank you for being part of our community!
            <br />
            The Saver Street Team
          </h6>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default affiliateDisclosure;
