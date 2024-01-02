import React from "react";
import Footer from "../components/shared/Footer";
import Navigation from "../components/shared/Navigation";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title: "FAQs - Deal2Coupon | Online Coupons, Promo Code & Deals",
        description:
          "We have compiled a list of the top faq our site visitors ask most often. If your question is not answered here please email us your question.",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Deal2Coupon extension, Deal2Coupon coupon, how to use Deal2Coupon extension, Deal2Coupon login",
        pageUrl: "https://www.thesaverstreet.com/frequently-asked-questions",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

const faq = () => {
  return (
    <>
      <Navigation />
      <div className="mb-4 mt-4">
        <img
          style={{ width: "100%" }}
          src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648642371546-faq.jpeg"
          alt="cyber monday deals"
        ></img>
      </div>
      <div className="container my-5">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is a Deal2Coupon browser Extension?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Deal2Coupon is a free extension with a simple interface. It was
                created with shopaholics in mind who get carried away while
                buying online. Thus, Deal2Coupon is the ideal tool for saving
                money, time, and effort. This eliminates the need to scour the
                internet for discounts. Deal2Coupon will function independently
                after being installed and supply you with the most fantastic
                promo codes and savings. You can also collect Deal2Coupon coins
                while shopping, which you can redeem for additional discounts.
                On the other hand, you are not required to take any action.
                While you shop your heart out, this application will
                automatically find and apply promo codes to your cart.
                <div className="my-3">
                  <span className="fw-bold">SIGN UP</span>
                  <p>
                    Enjoy the best deals from us in a click. Click on the "join"
                    button on the top in our header and sign up for a new
                    account. You must choose one and sign up using Google,
                    Facebook or create an account with your email address.
                    <br />
                    Moreover, you also need to install the Deal2Coupon
                    extension. Therefore, click here and download within
                    seconds.
                  </p>
                </div>
                <div className="my-3">
                  <span className="fw-bold">MAXIMUM STORES</span>
                  <p>
                    Several of the best things about Deal2Coupon is that nothing
                    needs to be changed. Simply shop as usual on your favorite
                    websites. Deal2Coupon collaborates with over 40,000 leading
                    retailers and major brands. Why would you pass up on a deal
                    like this? Whether you're shopping for a new outfit,
                    planning a long-overdue vacation, or simply ordering pizza?
                    Our selection of retailers is constantly expanding. Do you
                    have a store you'd like us to add? Please keep the
                    suggestions coming.
                  </p>
                </div>
                <div className="my-3">
                  <span className="fw-bold">Deal2Coupon COINS</span>
                  <p>
                    Deal2Coupon Coins can be earned by shopping with
                    Deal2Coupon. As a result, the more you shop, the more money
                    you make. Deal2Coupon coins can be redeemed for further
                    savings at some stores. Depending on how many Deal2Coupon
                    coins you have, each retailer will provide different
                    discounts. Read more about Deal2Coupon coins here.
                  </p>
                </div>
                <div className="my-3">
                  <span className="fw-bold">SPECIAL OFFERS</span>
                  <p>
                    It's simply too fantastic to pass up! You never know when
                    you'll be overwhelmed due to so many discounts. As a result,
                    your pockets will not be empty when you go shopping. Each
                    time you shop with Deal2Coupon, your pockets will fill up
                    even more.
                  </p>
                </div>
                <div className="my-3">
                  <span className="fw-bold">REDEEM YOUR Deal2Coupon COINS</span>
                  <p>
                    You may exchange your Deal2Coupon coins for real money or
                    additional savings at other stores while shopping. Depending
                    on the number of Deal2Coupon coins set, each store will
                    provide a different discount.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Add Deal2Coupon to Whitelist For Ad Blockers
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Rewarding you with Deal2Coupon Coins is our way of saying thank
                you to you that are our loyal customers. On the other hand,
                certain ad blockers may prohibit you from earning your rewards
                points. We must authenticate your purchase by interacting with
                the retailer where you made your transaction to allow you to
                earn your Deal2Coupon coins. We can't do this because of some ad
                blocker settings. Don't be concerned. Here's how to change your
                preferences. Click here to add Deal2Coupon to your filter list
                if you're using Adblock Plus, uBlock Origin, or AdBlock.
                Therefore, Deal2Coupon will then be "whitelisted," allowing you
                to earn your well-deserved Deal2Coupon coins while continuing to
                use your ad blocker.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What Are Deal2Coupon Coins Reward Points?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                As you may know, Deal2Coupon finds the best coupons and
                automatically applies them to your shopping cart. Did you know,
                though, that you can earn money while shopping at Deal2Coupon?
                Yes, you can earn Deal2Coupon coins depending on where and how
                much you spend. You can exchange your Deal2Coupon coins for cash
                or use them to get more savings on your next purchase. This is
                the best thing ever for all shopaholics who want to shop and
                earn at the same time. When you use the Deal2Coupon extension to
                shop at our partner stores, you can earn points on your
                purchases. Deal2Coupon coins are awarded based on the total
                amount spent on eligible items, excluding tax and any other fees
                such as shipping. To be clear, Deal2Coupon coins aren't
                available at every store that supports Deal2Coupon. Policies for
                every store are different. If a shopping site offers points,
                they will be mentioned in the browser extension.
                <br />
                <br />
                When Deal2Coupon displays during checkout, select Apply Coupons,
                and Deal2Coupon coins will be automatically activated.
                Deal2Coupon will then apply the most significant discount we
                discover to your order automatically, allowing you to earn
                rewards while also saving money. Now that's shopping.
                Deal2Coupon coins appear pending in your Account Overview within
                1-14 days of completing your eligible purchase though this might
                vary depending on the purchase and merchant.
                <br />
                <br />
                <strong>Exceptions:</strong>
                The number of Deal2Coupon coins will vary for each store you
                shop from, which will be set by the merchants. It also depends
                upon what and how much you shop. Furthermore, there could be
                specific products and categories that are not eligible for
                earning Deal2Coupon coins. However, these exceptions and
                exclusions vary and are decided by the stores. Please remember,
                Deal2Coupon can't decide whether the products you have purchased
                are eligible for earning Deal2Coupon coins or not until after
                you have made the purchase. Therefore, if you have bought
                ineligible items for Deal2Coupon coins, you will not acquire any
                Deal2Coupon coins through your purchases. Hence, the final
                number of coins earned will be rewarded directly to your
                Deal2Coupon wallet, and you can see it on your dashboard.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How To Install The Deal2Coupon Browser Extension?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Welcome to our community. Here are the steps to install the
                Deal2Coupon extension. However, please note that you need Google
                Chrome or Microsoft Edge browser to install the Deal2Coupon
                extension. Apart from this, the extension is supported by macOS,
                Chromebooks, Windows, Laptops, and PCs.
                <ul>
                  <li>
                    Firstly, click here to install the Deal2Coupon extension.
                  </li>
                  <li>
                    Then, choose the blue "ADD TO CHROME" option mentioned on
                    the screen.
                  </li>
                  <li>Thereafter, click on the "ADD EXTENSION" option.</li>
                  <li>
                    The extension has been installed. However, now you need to
                    pin the extension, an alphabet C. Therefore, pin the
                    extension icon from the toolbar on your browser.
                  </li>
                  <li>
                    If the extension icon is not visible there, click on the
                    puzzle icon on the top-right corner of your browser. You
                    will find the extension icon for Deal2Coupon there, which
                    you need to pin.
                  </li>
                </ul>
                That's it. Installing the Deal2Coupon extension is this easy,
                and you can start saving money. As we like to say, Ditch the
                FOMO and start saving money now.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                How To Make Sure If Deal2Coupon Is Working?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                First of all, make sure to install the Deal2Coupon browser
                extension if you can't see the extension icon in your browser's
                toolbar. If you're using Chrome or Edge, look for a "C"
                extension icon in the top-right corner of your toolbar to see if
                Deal2Coupon is installed and operating. Deal2Coupon is supported
                on that purchasing site if the C is blue. Also, the site's
                available coupons will be highlighted in green.
                <br />
                <br />
                Finally, Deal2Coupon is installed, and you have made sure that
                the extension icon is visible. Therefore, absolute madness
                begins since you can shop like a freak shopaholic. Shop as usual
                on any of the 30,000+ sites we support, and we'll display and
                apply the best money-saving coupons automatically at purchase we
                discover. If we locate a valid code, we'll use the one that
                saves you the most money for your order automatically and
                accordingly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Is Deal2Coupon Available on International Sites?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Deal2Coupon currently supports shopping sites in the US,
                Australia, the UK, Canada, and other countries. We're currently
                adding support for more international sites!
                <br />
                <br />
                How to make sure if Deal2Coupon is available on your preferred
                shopping websites?
                <br />
                <br />
                To begin, make sure that you install the Deal2Coupon extension
                for free. Moreover, do it now by clicking here if you haven't
                already. A "C" icon will show in your browser's toolbar once
                you've done so. Deal2Coupon is supported on that site if the C
                icon becomes blue. This is how Honey for Chrome and Edge looks
                when a particular store is supported.
                <br />
                <br />
                Let us know if there's a particular store that we don't
                currently support and you want us to add it. We'll try and see
                what we can do to include it in the near future. Keep a watch
                out for improvements as we continue to expand our functionality
                to overseas sites.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Can We Disable Google Login With 3rd Party Cookies?
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Do you use Google Log-In to sign up for Deal2Coupon or log in?
                If this is the case, Google Log-In will not operate if
                third-party cookies are disabled. You must enable third-party
                cookies in your browser to fix this problem. If you do not want
                to allow third-party cookies, you can log in using Facebook or
                an email address. Please follow these instructions to enable
                third-party cookies in your browser:
                <br />
                <br />
                Google Chrome (PC)
                <br />
                <ul>
                  <li>Select Chrome Settings from the Chrome menu.</li>
                  <li>Select Settings from the drop-down menu.</li>
                  <li>Scroll down to the section on privacy and security.</li>
                  <li>
                    Select Cookies and other site data from the drop-down menu.
                  </li>
                  <li>Select "Allow" for all cookies (recommended).</li>
                  <li>After that, click Done.</li>
                </ul>
                <br />
                Google Chrome (MAC)
                <br />
                <ul>
                  <li>
                    Open Chrome's settings. Then, choose Show Advanced Settings
                    from the drop-down menu under Settings.
                  </li>
                  <li>Select Content Settings from the Privacy menu.</li>
                  <li>
                    Uncheck the box that says, "Block third-party cookies and
                    site data.
                  </li>
                </ul>
                <br />
                Microsoft Edge
                <br />
                <ul>
                  <li>Open the Microsoft Edge browser.</li>
                  <li>
                    Select Settings from the More actions button on the toolbar.
                  </li>
                  <li>
                    View advanced options can be found by searching for it and
                    clicking on it.
                  </li>
                  <li>Allow third-party cookies under the Cookies section.</li>
                  <li>Microsoft Edge should be restarted.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                How Does Deal2Coupon Make Money?
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Deal2Coupon receives a percentage of sales (commission) from our
                merchant partners. When a member uses Deal2Coupon to find
                available savings or activate Deal2Coupon Coins reward points by
                earning incentives, we receive compensation. We collaborate with
                affiliates to validate your transaction to get paid by the
                retailer.
                <br />
                Deal2Coupon is unusual in that we give back a portion of our
                profits to our members in the form of Deal2Coupon Coin, which is
                our free rewards program through which we thank our customers
                for choosing us. This is a considerable win for both our members
                and us, and it's how we're able to provide a free service
                (without selling anyone's information).
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default faq;
