import React from "react";
import Footer from "../components/shared/Footer";

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          "Copyright Policy - The Saver Street | Online Coupons, Promo Code & Deals",
        description:
          "Copyright Policy - All rights are reserved by the owner of thesaverstreet.com. Without written permission, no content should be copied.",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, The Saver Street extension, The Saver Street coupon, how to use The Saver Street extension, The Saver Street login",
        pageUrl: "https://www.thesaverstreet.com/copyright",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

const copyright = () => {
  return (
    <>
      {
        <div id="banner" className="p-4">
          <h2 id="bannerHeadding" className="mb-3 pt-2">
            Copyright Policy
          </h2>
          <div className="d-flex justify-content-center"></div>
        </div>
      }
      <div className="container my-5 copyright-p">
        <div>
          <h6>
            The Saver Street, owned and operated by Sparkling Innovation LLC,
            respects the intellectual property rights of others and expects its
            users to do the same.
          </h6>
          <h4>Copyright Notice</h4>
          <h6>
            Unless otherwise stated, all content, including but not limited to
            text, images, graphics, logos, button icons, and audio clips, on The
            Saver Street website is the property of Sparkling Innovation LLC and
            is protected by United States and international copyright laws.
          </h6>
        </div>
        <div className="my-4">
          <h5 className="mb-3">
            1. A description of the copyrighted work that you claim has been
            infringed.
          </h5>
          <h5 className="mb-3">
            2. A description of where the material that you claim is infringing
            is located on The Saver Street website, including the URL.
          </h5>
          <h5 className="mb-3">
            3. Your address, telephone number, and email address.
          </h5>
          <h5 className="mb-3">
            4. A statement by you that you have a good-faith belief that the
            disputed use is not authorized by the copyright owner, its agent, or
            the law.
          </h5>
          <h5 className="mb-3">
            5. A statement by you, made under penalty of perjury, that the above
            information in your notice is accurate and that you are the
            copyright owner or authorized to act on the copyright owner&apos;s
            behalf.
          </h5>
          <h6 className="mb-3">
            Upon receipt of a valid and complete notice, we will remove or
            disable access to the allegedly infringing content. Please note that
            this is a general template and may need to be customized based on
            your specific requirements and legal advice.
          </h6>
          <h4 className="mb-3">Copyright Policy Changes</h4>
          <h6 className="mb-3">
            Sparkling Innovation LLC reserves the right to modify this Copyright
            Policy at any time. Any changes or updates will be effective
            immediately upon posting to The Saver Street website. Your continued
            use of the website after the posting of any changes constitutes your
            acceptance of those changes.
          </h6>
          <h4 className="mb-3">Contact Information</h4>
          <h6 className="mb-3">
            If you have any questions or concerns about this Copyright Policy,
            please contact us at contact@thesaverstreet.com or by mail at:
          </h6>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default copyright;
