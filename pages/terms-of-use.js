import Footer from "../components/shared/Footer";
import Navigation from "../components/shared/Navigation";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title:
          "Terms of Use - The Saver Street | Online Coupons, Promo Code & Deals",
        description:
          "Terms & Conditions mentioned here contain the legal information that you agree while using the services provided by thesaverstreet.com.",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, The Saver Street extension, The Saver Street coupon, how to use The Saver Street extension, The Saver Street login",
        pageUrl: "https://www.thesaverstreet.com/terms-of-use",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function TermsOfUse() {
  return (
    <>
      <Navigation />

      {
        <div id="banner" className="p-4">
          <h2 id="bannerHeadding" className="mb-3 pt-2">
            Terms of Service for The Saver Street
          </h2>
          <div className="d-flex justify-content-center"></div>
        </div>
      }
      <div className="my-4 copyright-p">
        <div className="container">
          <div className="mb-4">
            <p style={{ fontSize: "18px" }}>
              1. Acceptance of Terms By accessing and using the website The
              Saver Street, you agree to comply with these Terms of Service. If
              you do not agree to these terms, please do not use our site.
            </p>
          </div>
          <div className="mb-4">
            <p style={{ fontSize: "18px" }}>
              2. Use of Website This website provides information about deals
              and coupons and is intended for personal, non-commercial use. You
              agree not to use the site for unlawful purposes, and you must
              comply with all applicable laws and regulations.
            </p>
          </div>
          <div className="mb-4">
            <p style={{ fontSize: "18px" }}>
              3. Intellectual Property All content on this site, including text,
              graphics, logos, and images, is the property of The Saver Street
              or its content suppliers and protected by international copyright
              laws.
            </p>
          </div>
          <div className="mb-4">
            <p style={{ fontSize: "18px" }}>
              4. User Contributions Any comments, feedback, or other submissions
              sent to The Saver Street shall be and remain the exclusive
              property of The Saver Street.
            </p>
          </div>
          <div className="mb-4">
            <p style={{ fontSize: "18px" }}>
              5. Links to Third-Party Websites Our website may contain links to
              websites operated by third parties. These links are provided for
              your convenience and do not signify our endorsement of such
              websites. We have no control over, and assume no responsibility
              for, the content, privacy policies, or practices of any
              third-party websites.
            </p>
          </div>
          <div className="mb-4">
            <p style={{ fontSize: "18px" }}>
              6. Disclaimer of Warranties The website is provided &quot;as
              is.&quot; The Saver Street, to the fullest extent permitted by
              law, disclaims all warranties, whether express or implied,
              including the warranty of merchantability, fitness for particular
              purpose, and non-infringement.
            </p>
          </div>
          <div className="mb-4">
            <p style={{ fontSize: "18px" }}>
              7. Limitation of Liability The Saver Street shall not be liable
              for any indirect, incidental, special, or consequential damages
              arising out of or in connection with the use or inability to use
              this website.
            </p>
          </div>
          <div className="mb-4 ">
            <p style={{ fontSize: "18px" }}>
              8. Indemnification You agree to indemnify, defend, and hold
              harmless The Saver Street, its officers, directors, employees,
              agents, licensors, and suppliers from and against all losses,
              expenses, damages, and costs, including reasonable attorneys&#39;
              fees, resulting from any violation of these Terms of Service or
              any activity related to your account.
            </p>
          </div>
          <div className="mb-4">
            <p style={{ fontSize: "18px" }}>
              9. Changes to Terms The Saver Street reserves the right to change
              these Terms of Service at any time. Your continued use of the
              website following any changes indicates your acceptance of the new
              Terms.
            </p>
          </div>
          <div className="mb-4">
            <p style={{ fontSize: "18px" }}>
              10. Governing Law These Terms of Service and any dispute or claim
              arising out of or in connection with them or their subject matter
              or formation are governed by and construed in accordance with the
              laws of Texas, USA.
            </p>
          </div>
          <div className="mb-4">
            <p style={{ fontSize: "18px" }}>
              11. Contact Information For any questions about these Terms of
              Service, please contact us at: <br />  The Saver Street <br />
              1002 Fuller Wiser Rd, Euless, TX 76039, USA
              <br />  Email: contact@thesaverstreet.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
