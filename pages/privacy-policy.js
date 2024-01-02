import Footer from "../components/shared/Footer";
import Navigation from "../components/shared/Navigation";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title:
          "Privacy Policy - The Saver Street | Online Coupons, Promo Code & Deals",
        description:
          "Our privacy policy is subject to change at any time without notice. thesaverstreet.com respects your privacy and is committed to its protection.",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, The Saver Street extension, The Saver Street coupon, how to use The Saver Street extension, The Saver Street login",
        pageUrl: "https://www.thesaverstreet.com/privacy-policy",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function privacyPolicy() {
  return (
    <>
      <Navigation />

      <div id="banner" className="p-4">
        <h2 id="bannerHeadding" className="pt-2">
          Privacy Policy for The Saver Street
        </h2>
        <div className="d-flex justify-content-center"></div>
      </div>

      <div className="container my-4 copyright-p py-5">
        <div className="mb-4">
          <h5 className="mb-4">
            Welcome to The Saver Street! Your privacy is of paramount importance
            to us. This Privacy Policy outlines how we collect, use, and protect
            your information. Information Collection and Use We collect
            information to provide better services to all our users. This
            includes:
          </h5>
          <h5 className="mb-4">
            The Saver Street is committed to protecting your privacy even in
            otherwise circumstances. We highly believe that each person who
            experiences The Saver Street&apos;s services deserves complete
            security in all terms. You will read about our privacy and policies,
            but we would like to let you know our views about privacy before
            that.
          </h5>
          <h5 className="mb-4">
            Basic information such as your name and email when you subscribe or
            contact us.
            <br /> Data about your interactions with our deals and offers.
            <br />  Information from third-party partners about offers that
            might interest you.
          </h5>
        </div>
        <div className="mb-4">
          <h5>
            Data Protection We implement a variety of security measures to
            maintain the safety of your personal information.
          </h5>
        </div>
        <div className="mb-4">
          <h5>
            Information Sharing We do not sell, trade, or otherwise transfer
            your personally identifiable information to outside parties. This
            does not include trusted third parties who assist us in operating
            our website, conducting our business, or servicing you, so long as
            those parties agree to keep this information confidential.
          </h5>
        </div>
        <div className="mb-4">
          <h5>
            Third-Party Links Occasionally, at our discretion, we may include or
            offer third-party products or services on our website. These
            third-party sites have separate and independent privacy policies.
            Therefore, we have no responsibility or liability for the content
            and activities of these linked sites.
          </h5>
          <h5 className="mb-4">
            Your Consent By using our site, you consent to our website&#39;s
            privacy policy.
          </h5>
          <h5 className="mb-4">
            Changes to our Privacy Policy If we decide to change our privacy
            policy, we will update the Privacy Policy modification date below.
          </h5>
          <h5 className="mb-4">
            Contact Us If there are any questions regarding this privacy policy,
            you may contact us using the information below:
            <br />
            <h5 className="fw-bold">Email: contact@thesaverstreet.com</h5>
            <h5 className="fw-bold">
              Address: 1002 Fuller Wiser Rd, Euless, TX 76039, USA
            </h5>
          </h5>
          <h5>
            Jurisdiction The terms of this Privacy Policy and any disputes
            arising hereof shall be governed and construed in accordance with
            the laws of the State of Texas, USA.
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
}
