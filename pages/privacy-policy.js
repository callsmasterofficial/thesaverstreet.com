import Footer from "../components/shared/Footer";
import Navigation from "../components/shared/Navigation";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title:
          "Privacy Policy - Deal2Coupon | Online Coupons, Promo Code & Deals",
        description:
          "Our privacy policy is subject to change at any time without notice. thesaverstreet.com respects your privacy and is committed to its protection.",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Deal2Coupon extension, Deal2Coupon coupon, how to use Deal2Coupon extension, Deal2Coupon login",
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

      {
        <div id="banner" className="p-4">
          <h2 id="bannerHeadding" className="mb-3 pt-2">
            Deal2Coupon Privacy and Security Policy
          </h2>
          <div className="d-flex justify-content-center"></div>
        </div>
      }
      <div className="container my-4 copyright-p py-5">
        <div className="mb-4">
          <h5>Your Privacy, Our Priority</h5>
          <p>
            Deal2Coupon is committed to protecting your privacy even in
            otherwise circumstances. We highly believe that each person who
            experiences Deal2Coupon&apos;s services deserves complete security
            in all terms. You will read about our privacy and policies, but we
            would like to let you know our views about privacy before that.
          </p>
          <p>
            We never go down to the level of stealing and selling your private
            information. There is no chance at all that you found us doing such
            disheartening things. Deal2Coupon make all the effort to provide you
            with the best deals that you ever expect.
          </p>
        </div>
        <div className="mb-4">
          <h5>Here is the way how we earn:</h5>
          <p>
            When you shop using Deal2Coupon COINS, promo code, or offer, the
            store pays us a fixed fee. We always get enough on each purchase, so
            we do not need to steal and sell your personal information.
          </p>
        </div>
        <div className="mb-4">
          <h5>
            Still Confused? Let us tell you how do we use your data privately:
          </h5>
          <p>
            To let you know about the great deals and Deal2Coupon COINS on the
            products, we take the knowledge about the website you are on and
            then survey basic information. Furthermore, we gather combined
            shopping data to help the Deal2Coupon circle by letting them know
            the latest deals. Through this process, Deal2Coupon members share
            real-time information about the deals, prices, and products with the
            rest of the people to let them know about the latest advantageous
            deals in order to save time and money.
          </p>
        </div>
        <div className="mb-4">
          <h5>Let us introduce you to the Promo Code and the way it works</h5>
          <p>
            All of you can save your time and money through Deal2Coupon.
            Let&apos;s know-how? The Members keep testing codes with Deal2Coupon
            in every division of minutes. Moreover, you will keep getting the
            latest update about the price of the products you are interested in.
          </p>
          <p>
            Our stance on your data privacy and security is Accurate and
            straightforward: We always keep ourselves transparent with what
            information we collect. Also, you will always acknowledge how we use
            your data to help save you time and money. In simple words, You can
            decide if you want to allow us to take this information or not:
          </p>
          <p>
            Sounds good, doesn&apos;t it? Let&apos;s take an innovative and
            modern move towards shopping together.
          </p>
          <p>
            P.S. If you have any queries or comments, you can reach out to us
            the way below mentioned:
            <br />
            <p className="fw-bold">contact@deal2coupon.com</p>
          </p>
        </div>
        <div className="mb-4 mt-4">
          <h3>Introducing the Privacy Policy</h3>
          <hr className="my-3" />
          <p>
            This privacy policy (&quot;Privacy Policy&quot;) explains how
            Deal2Coupon gathers and processes Data from members and users of the
            website, software applications, and other online services
            Deal2Coupon provides, including &quot;Deal2Coupon&apos;s products.
            Deal2Coupon&apos;s products include without limits the
            Deal2Coupon&apos;s extension for web browsers (the &quot;Extension
            URL&quot;), and the website located at &quot;INSERT WEBSITE.&quot;
          </p>
          <p>
            Apart from this, when we require some additional personal
            information of the user for a valid reason, we make sure to ask you
            first for permission to use it. Moreover, Deal2Coupon has various
            links to other websites, for instance, Retailers, but they carry
            their personal controlling policies, and we do not have the
            authority to manage them. So, deeply read out the entire procedure
            of any specific website that links up with Deal2Coupon.
          </p>
        </div>
        <div className="mb-4 mt-4">
          <h3>What Data We Collect And Why Do We Require</h3>
          <hr className="my-3" />
          <p>
            Deal2Coupon only gathers data you have provided directly to us while
            using our Website extension. However, we require his information to
            provide you with the products. We would like to say that you are not
            bound to share email, but if you share, you can set your account
            with Deal2Coupon, which allows you to add items to your Drop List,
            earn Deal2Coupon Coins, see a personalised recommendation feed, and
            more. Apparently, you can design your profile with your name and
            required information to experience personalization.
          </p>
          <p>
            Additionally, Deal2Coupon collects little technical information
            about your device that is mandatory. It requires us to ensure that
            our products are working correctly and you are getting us helpful.
            These are ways to provide Deal2Coupon users a better way to shop
            online and to help us to grow, develop, improve, and market our
            services.
          </p>
          <p>
            Also, Deal2Coupon never tracks your search engine history, emails,
            or browsing on any site that does not relate to shopping or
            purchasing. In addition, it requires your pre-approval to track on
            specific retail sites or not to help you in saving money and time.
            Deal2Coupon is a perfect way to know about the latest discounts
            through Coupons and promos to give a special smile on your face. We
            also gather information about items prices to share with the other
            Community of Deal2Coupon.
          </p>

          <div className="mb-4 mt-4">
            <h5>How do we share your data?</h5>
            <p>
              We never want to share personal information with anyone we doubt,
              but here you will receive the absolute protection of your data the
              way you want. So, in the indeed and specific situation, we legally
              share your data to complete your purchase correctly with the
              Linkups who help us execute Deal2Coupon.
            </p>
          </div>
          <div className="mb-4 mt-4">
            <h5>How We Keep Your Data Private</h5>
            <p>
              Our users data privacy comes first for us, and we never sacrifice
              it. We have an expert and devoted team that always ensures not to
              harm your personal sentiments related to your privacy. Our team
              keeps themselves indulged in protecting your data in all the ways,
              for instance, physical, electronic, and procedural safeguards.
            </p>
          </div>
          <div className="mb-4 mt-4">
            <h5>How we use cookies and similar technologies</h5>
            <p>
              Deal2Coupon uses cookies to gather essential data of users
              discussed in this Privacy Policy, just like most other online
              services do. Collecting the required data helps us operate our
              products exactly the way we want, analyse engagement and usage,
              and offer a relevant and personalised shopping experience.
            </p>
          </div>
          <div className="mb-4 mt-4">
            <h5>Your choices for managing your data</h5>
            <p>
              Being a Deal2Coupon user, you have complete authority to design
              your profile the way you want. Adjust your settings of what
              information you want to share. Here, Deal2Coupon Communicates with
              you by reaching your account page and pressing the
              &quot;personalise&quot; or &quot;emails&quot; headings located on
              your account. It is suggested to all the Deal2Coupon users not to
              limit the information you offer as it may affect the
              Deal2Coupon&apos;s ability to make you aware of specific
              advantageous deals and products.
            </p>
          </div>
          <div className="mb-4 mt-4">
            <h5>Supplementary Rights Regarding Your Information</h5>
            <p>
              Additional rights related to personal information ultimately
              depend on the place you are located in.
            </p>
          </div>
          <div className="mb-4 mt-4">
            <h5>Supplementary Rights Regarding Your Information</h5>
            <p>
              Additional rights related to personal information ultimately
              depend on the place you are located in.
            </p>
          </div>
          <div className="mb-4 mt-4">
            <h5>Data Transfers from the E.U.</h5>
            <p>
              Suppose it is required to share your data outside of the European
              Economic Area. In that case, the process will be completed by
              ensuring safeguards of Binding Corporate Rules, Model Contract
              Clauses, and the EU-US Privacy Shield framework as well.
            </p>
          </div>
          <div className="mb-4 mt-4">
            <h5>About Minors</h5>
            <p>
              Deal2Coupon is made for adults, for instance, 18 and older, as we
              aim not to collect personal information of Minors. However, if you
              are below 18, we request you keep yourself away from the
              Deal2Coupon&apos;s registration process or send any personal
              information to us.
            </p>
          </div>
          <div className="mb-4 mt-4">
            <h5>About Updation Of Policies</h5>
            <p>
              To keep ourselves up-to-date, we keep updating our policies by
              adding extra features and required information with the time.
              Also, we make sure to notify Deal2Coupon users of the newest
              update and changes in the policies. So, whenever you visit this
              Privacy and Policies page, you can see the last update date on the
              top of the same.
            </p>
          </div>
          <div className="mb-4 mt-4">
            <h5>How to contact us</h5>
            <p>
              To rectify any of your queries about our privacy policies and
              practice or to get them all errors sorted within a time at :-
              <br />
              <p className="fw-bold">Callsmaster Services LLP</p>
              <p className="fw-bold">contact@deal2coupon.com</p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
