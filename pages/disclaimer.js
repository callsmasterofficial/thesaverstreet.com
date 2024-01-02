import React from "react";
import Footer from "../components/shared/Footer";

function Disclaimer() {
  return (
    <>
      <div className="container-fluid bg-white  py-5">
        <div className="container py-5" style={{ lineHeight: "2" }}>
          <h4>Disclaimer for The Saver Street</h4>
          <h6 className="my-3">
            The information provided on The Saver Street is for general
            informational purposes only. All information is provided in good
            faith, however, we make no representation or warranty of any kind,
            express or implied, regarding the accuracy, adequacy, validity,
            reliability, availability, or completeness of any information on the
            site.
          </h6>
          <h6 className="my-3">
            External Links Disclaimer The Saver Street may contain links to
            external websites that are not provided or maintained by or in any
            way affiliated with us. Please note that The Saver Street does not
            guarantee the accuracy, relevance, timeliness, or completeness of
            any information on these external websites.
          </h6>
          <h6 className="my-3">
            Affiliate Disclaimer This website may contain links to affiliate
            websites, and we receive an affiliate commission for any purchases
            made by you on the affiliate website using such links.
          </h6>
          <h6 className="my-3">
            Contact Us If you have any questions about this disclaimer, please
            contact us at contact@thesaverstreet.com.
            <br />
            The Saver Street Team
          </h6>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Disclaimer;
