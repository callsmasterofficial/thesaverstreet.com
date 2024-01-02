import React from "react";
import Link from "next/link";
import Footer from "../components/shared/Footer";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title: "Earn Deal2Coupon Coin at Your Favourite Stores | Deal2Coupon",
        description:
          "Deal2Coupon members earn Deal2Coupon Coin every day when shopping online at stores like Best Buy, Walmart, and more. Don't wait, earn cash today!",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Deal2Coupon extension, Deal2Coupon coupon, how to use Deal2Coupon extension, Deal2Coupon login",
        pageUrl: "https://www.thesaverstreet.com/Deal2Coupon-coins",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function Deal2CouponCoins() {
  return (
    <>
      <div className="container-fluid bg-white p-3 Deal2Couponcoin-p">
        <Link href="/" passHref>
          <img
            src=""
            style={{ cursor: "pointer", width: "120px" }}
            alt="Deals to Coupon"
          />
        </Link>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-5">
              <h1 className="Deal2Coupon-title">Shop More Earn More.</h1>
              <p className="pt-2 Deal2Coupon-sub">
                As you already know, Deal2Coupon finds the best coupons and
                applies them automatically to your shopping cart. But did you
                know that you can earn while shopping from Deal2Coupon? Yes, you
                can earn Deal2Coupon coins depending on where and how much you
                shop. You can redeem those Deal2Coupon coins as real cash or use
                them for further discounts on more shopping. This is the best
                thing that will ever happen to all the shopaholics to shop and
                earn simultaneously.
              </p>
              <button className="btn my-3 text-white py-2 px-3 popularDealsBtn">
                Start Earning Now
              </button>
            </div>
            <div className="col-lg-6 py-5">
              <video width="100%" height="100%" autoPlay loop muted>
                <source
                  src="https://super-dashboard-images-cdn.s3.amazonaws.com/videos/1648297584399-Deal2Couponcoinsvideo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="howcoinwork">
          <div className="container py-4">
            <h2 className="text-center my-4 coins-heading">
              How Deal2Coupon Coins Work?
            </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
              <div className="col">
                <div className="card h-100 borderRemove py-3 shadow">
                  <img
                    src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648814765194-Deal2Coupon-coins-icon.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title borderRemoveh5">
                      1. Create Account
                    </h5>
                    <p className="card-text borderRemoveP">
                      Create a free account by signing up and getting a personal
                      dashboard to track how many Deal2Coupon coins you have
                      earned.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 borderRemove py-3 shadow">
                  <img
                    src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648814758657-Deal2Coupon-coins-icon.png"
                    className="card-img-top"
                    alt="Contact logo"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title borderRemoveh5">
                      2. Shop And Earn
                    </h5>
                    <p className="card-text borderRemoveP">
                      The more you shop, the more you earn. Therefore, on all
                      your purchases, you will earn Deal2Coupon coins which will
                      keep adding to your Deal2Coupon wallet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 borderRemove py-3 shadow">
                  <img
                    src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648814750563-Deal2Coupon-coins-icon.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title borderRemoveh5">
                      3. Redeem Your Deal2Coupon Coins
                    </h5>
                    <p className="card-text borderRemoveP">
                      You can redeem your collected Deal2Coupon coins as real
                      cash or more discounts on different stores while shopping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="my-5 text-center">
            <h2 className="mb-4 coins-heading">
              The Best Place For Earning Rewards
            </h2>
            <p>
              We are here to make online shopping special and exciting for our
              customers. Not only do we provide automated coupon searches and
              apply them to your cart, but we also give you rewards on your
              purchases. Via Deal2Coupon coins, you can earn more money even
              while shopping.
            </p>

            <img
              id="Deal2Coupon-laptop"
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648811529582-Deal2Coupon-laptop.jpeg"
              alt="Deal2Coupon-coins"
            />
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 ">
            <div className="col">
              <div className="card border">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    <span
                      style={{
                        background: "#000",
                        padding: "4px 10px",
                        borderRadius: "100px",
                        marginRight: "10px",
                        color: "white",
                      }}
                    >
                      1
                    </span>
                    Different Stores, Different Rewards
                  </h5>
                  <p className="card-text ">
                    You can shop from any possible store, and we will help you
                    save money. Hence, keep shopping and earning Deal2Coupon
                    coins on your eligible purchases from different shops.
                    However, the number of Deal2Coupon coins gained differs with
                    each store depending on how much you shop.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    <span
                      style={{
                        background: "#000",
                        padding: "4px 10px",
                        borderRadius: "100px",
                        marginRight: "10px",
                        color: "white",
                      }}
                    >
                      2
                    </span>
                    More Coins, More Dollars
                  </h5>
                  <p className="card-text">
                    You can also redeem your Deal2Coupon coins as real cash. You
                    can track your Deal2Coupon coins on your dashboard every
                    time you shop. Every 1000 Deal2Coupon coins are worth $1.
                    Therefore, the more coins you collect, the more dollars you
                    get. You can withdraw your cash anytime you want.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    <span
                      style={{
                        background: "#000",
                        padding: "4px 10px",
                        borderRadius: "100px",
                        marginRight: "10px",
                        color: "white",
                      }}
                    >
                      3
                    </span>
                    More Coins, More Discounts
                  </h5>
                  <p className="card-text">
                    When you collect Deal2Coupon coins, there’s no restriction
                    on how you use them. Therefore, you can use your earned
                    coins on further shopping and get more discounts to save
                    money. However, every store will have a different discount
                    redemption amount for a different number of coins.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    <span
                      style={{
                        background: "#000",
                        padding: "4px 10px",
                        borderRadius: "100px",
                        marginRight: "10px",
                        color: "white",
                      }}
                    >
                      4
                    </span>
                    Occassional Deal2Coupon Coin Bouns
                  </h5>
                  <p className="card-text">
                    Once you start collecting Deal2Coupon coins, Your
                    Deal2Coupon coins pile up faster than you know. Therefore,
                    you keep shopping, and your Deal2Coupon coins keep
                    increasing in numbers. However, keep an eye on occasional
                    bonuses you might get through Deal2Coupon. You never know
                    when you might get free Deal2Coupon coins.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-5 pt-5">
            <h3 className="coins-heading text-center">
              Top Stores Means Bigger Deals{" "}
            </h3>
            <p className="text-center">
              Deal2Coupon looks out and applies money-saving coupon codes on
              more than 30,000 stores worldwide. Hence, it works in a way that
              you don’t have to do anything other than shop. Apart from that,
              while you’re shopping, it increases the number of Deal2Coupon
              coins on your dashboard. You can keep an eye on how many coins you
              have earned on your dashboard and redeem them however you like
              later. Therefore, keep in mind that the bigger the store, the
              bigger the deal and the bigger the number of Deal2Coupon coins.
            </p>
          </div>

          <div className="container text-center pb-5">
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648814772434-Deal2Coupon-coins-icon.png"
              alt="Deal2Coupon coin"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
