import React from "react";
import Footer from "../components/shared/Footer";

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          "Copyright Policy - Deal2Coupon | Online Coupons, Promo Code & Deals",
        description:
          "Copyright Policy - All rights are reserved by the owner of thesaverstreet.com. Without written permission, no content should be copied.",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Deal2Coupon extension, Deal2Coupon coupon, how to use Deal2Coupon extension, Deal2Coupon login",
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
            Copyright
          </h2>
          <div className="d-flex justify-content-center"></div>
        </div>
      }
      <div className="container my-5 copyright-p">
        <div>
          <p>
            In honour of the Digital Millennium Copyright Act, Our copyright
            dispute policy is mentioned below in order to prevent copyright
            infringement. The policies we adopted are equipped with the right to
            block access to or remove the stuff which has been illegally copied.
            Furthermore, if the material is disturbing our advertisers, content
            providers, and users, it has the authority to block or discontinue
            Service to offenders.
          </p>
          <p>
            Always keep in mind that your use of Deal2Coupon’ Services is
            related to the Terms of Use. To know the terms that incorporate this
            copyright, please visit “INSERT LINK.”{" "}
          </p>
        </div>
        <div className="my-4">
          <h4 className="mb-3">
            1. Precise Procedure To Reporting Copyright infringement
          </h4>
          <p>
            In your views, if the stuff or content material touching Services
            Infringes your copyright or a copyright of a person which you are
            connected or authorized to work on behalf of, then you have
            authority to consign a notice of copyright infringement accommodate
            the following information to the Deal2Coupon Designated Agent. Then
            you will receive Notification of Claimed Infringement:
          </p>
          <p>
            Please go through the crucial information listed below that you
            require to mention in the notice of copyright infringement:
          </p>
          <ul>
            <li>
              Signature of the concerned person, either physical or electronic
              both are valid, who have authority to act on behalf of the owner
              of the copyright that has been allegedly infringed.
            </li>
            <li>
              Some evidence of the stuff that shows or claimed to be infringed
              or, in case there are multiple copyrighted materials you have,
              then send a representative list of all the materials at that site.
              Please ensure the evidence you send by which it gets removed must
              be sufficient enough to permit Deal2Coupon to locate the material
              on the Service.
            </li>
            <li>
              Kindly send the crucial information for Deal2Coupon to contact
              you, including address, telephone number, and, if available, email
              address.
            </li>
            <li>
              A written statement that consists of your acceptance about (1) (c)
              is entirely not authorized by the copyright owner, its agent, or
              the law.
            </li>
            <li>
              Another written statement is required that will be stuffed that
              the above information is factual and under penalty of perjury,
              that you are either the copyright owner or the person who have
              authority to work pr act on behalf of the copyright owner.
            </li>
          </ul>
        </div>
        <div className="my-4">
          <h4 className="mb-3">
            2. Moves Of Designated Agent After Receiving Authentic Infringement
            Notice
          </h4>
          <p>
            Based on receiving the legal copyright infringement notice, our
            Designated Agent will give a prompt response to remove or disable
            the authority of access to the infringing stuff. We retain a right
            to also:{" "}
          </p>
          <ul>
            <li>
              Identify the accused person on which we need to take action by
              removing or disabling access to the applicable material.
            </li>
            <li>
              Moreover, if we find them the repeat offender, we will conclude
              these content providers’ access to the Services.
            </li>
          </ul>
        </div>
        <div className="my-4">
          <h4 className="mb-3">
            3. Detailed Procedure To Send A Counter-Notice to the Designated
            Agent.
          </h4>
          <p>
            If the content provider found that their content was legally copied
            and still got removed, they can restore it. Once you believe that
            your content is not infringing and you have authority to use such
            material without going against the legal permissions, then the
            content provider has the right to send a counter-notice containing
            the following information to the Designated Agent:
          </p>
          <ul>
            <li>
              Some evidence about the material you have lost access to or have
              been removed.{" "}
            </li>
            <li>
              Accurate Signature, either physical or electronic, both are valid.
            </li>
            <li>
              A written statement under penalty of perjury that the content
              provider believes is wholly removed without letting them know.{" "}
            </li>
            <li>
              And most importantly, the Content provider’s name, address,
              telephone number, and, if available, email address, and another
              written statement showing that the entity consents to the
              jurisdiction of the Federal Court for the judicial district
              stuffed with the content provider’s address. Suppose content
              providers are based outside the United States for any judicial
              district Deal2Coupon is located. In that case, that entity will
              accept Service of process from the person who provided
              notification of the alleged infringement.
            </li>
          </ul>
          <p>
            Once the Designated Agent receives the Counter-Notice, Deal2Coupon
            will send the copy of this Counter-Notice to the original
            complaining party. This action is related to informing that person’s
            material that Deal2Coupon may cease will disable the access in 10
            Business days. Unless the copyright owner or the person who have
            authority to take action on behalf of the copyright owner has the
            right to seek a court order that will be against the accused of
            infringing, to get restored the removed material in 10 to 14
            business days or more from the day gets Counter-Notice, at
            Deal2Coupon Circumspection:
          </p>
          <p className="m-0">
            These are the Deal2Coupon’ contact information, kindly use
            precisely:{" "}
          </p>
          <p className="fw-bold" style={{ fontSize: "20px" }}>
            Callsmaster Services LLP
          </p>
          <p className="fw-bold" style={{ fontSize: "20px" }}>
            contact@deal2coupon.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default copyright;
