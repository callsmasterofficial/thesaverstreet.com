import Footer from "../components/shared/Footer";
import Navigation from "../components/shared/Navigation";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title:
          "Terms of Use - Deal2Coupon | Online Coupons, Promo Code & Deals",
        description:
          "Terms & Conditions mentioned here contain the legal information that you agree while using the services provided by thesaverstreet.com.",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Deal2Coupon extension, Deal2Coupon coupon, how to use Deal2Coupon extension, Deal2Coupon login",
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
            Terms Of Use
          </h2>
          <div className="d-flex justify-content-center"></div>
        </div>
      }
      <div className="my-4 copyright-p">
        <div className="container">
          <div className="mb-4">
            <h5>Introduction</h5>
            <p>
              The terms that are available here are the contract between you and
              Deal2Coupon. It will govern your access to the Deal2Coupon browser
              extension and the Deal2Coupon website located at “WEBSITE”. The
              website consists of all other Deal2Coupon-branded websites and
              other software along with online services given by Deal2Coupon.
            </p>
          </div>
          <div className="mb-4">
            <h5>Users Based Outside the United States</h5>
            <p>
              If you are based in Canada, Australia, New Zealand, India, Mexico,
              or Brazil, you agree to the applicable supplemental terms that are
              included at the end of this Agreement, so please review them
              carefully.
            </p>
            <p>
              If you are based in the UK or Europe, then the applicable Terms of
              Use that govern your use of the Service are set forth here:
              &quot;BACK LINK&quot;.
            </p>
            <p>
              If you are based in Poland, then the applicable Terms of Use that
              govern your use of the Service are set forth here: &quot;BACK
              LINK&quot;.
            </p>
          </div>
          <div className="mb-4">
            <h5>Agree With The Terms</h5>
            <p>
              When you use the Deal2Coupon Service it means you are accepting to
              obey the agreement. You will be bound towards this agreement
              whether you are a &quot;Member&quot; (which means you have created
              an account with Deal2Coupon) or are a &quot;Visitor&quot; (which
              means that you are using the Service but have not created an
              account with Deal2Coupon). We would like to clear here that The
              term &quot;you&quot; or &quot;User&quot; refers to a Visitor or a
              Member on other hand The terms &quot;we&quot; or &quot;our&quot;
              or &quot;us&quot; refer to Deal2Coupon. To use services precisely
              you must be an individual and at least 18 years old, or the age of
              majority in your state, province, or country of residence, to use
              the Service. That simply means, you have to be of legal age and
              competent to form a binding contact with Deal2Coupon. Using
              Deal2Coupon’s services represents that you accept this contract
              with Deal2Coupon. Moreover, the services are available for
              personal and non-commercial purposes. Acceptance of this agreement
              is the confirmation that you are not using services for or on
              behalf of any third-party, or for any commercial purpose.
            </p>
            <p>
              THIS AGREEMENT CONTAINS (1) AN ARBITRATION PROVISION; (2) A WAIVER
              OF RIGHTS TO BRING A CLASS ACTION LAWSUIT AGAINST US; AND (3) A
              RELEASE BY YOU OF CLAIMS FOR DAMAGE AGAINST US THAT MAY ARISE OUT
              OF YOUR USE OF THE SERVICE, TO THE GREATEST EXTENT PERMITTED BY
              APPLICABLE LAW. BY USING THE SERVICE, YOU AGREE TO THESE
              PROVISIONS.
            </p>
          </div>
          <div className="mb-4">
            <h5>Amendments to this Agreement</h5>
            <p>
              Deal2Coupon always makes sure to amend the required commitments in
              this Agreement including other policies that govern the service
              from time to time. The changes to this Agreement will be shown on
              “WEBSITE LINK.” and the posted Agreement will indicate the date
              the Agreement was last revised. However, if you find something
              unacceptable and you do not agree to the amendments then you can
              easily uninstall any applicable Deal2Coupon software and stop
              using the Service. By regular use the services after changes to
              this Agreement are posted on the Website will be proof that you
              agree to be bound by those changes.
            </p>
          </div>
          <div className="mb-4">
            <h5>Privacy and your Personal Information</h5>
            <p>
              Being a responsible services user you should read Deal2Coupon’s
              Privacy Policy found by visiting a “WEBSITE LINK”. On our Privacy
              Policy page you can go through the all activities of Deal2Coupon’s
              that how we collect, use and share your information when you visit
              our Website, use the Deal2Coupon Mobile App or otherwise access
              the Service. When you service, that means you agree to
              Deal2Coupon&apos;s collection, use, and sharing of your
              information as set forth in our Privacy Policy.
            </p>
          </div>
          <div className="mb-4">
            <h5>Description of the Service</h5>
            <p>
              Deal2Coupon’s service includes a suite of tools that grants you to
              search for best deals, coupons, amazing discount codes,
              significant offers, to know pricing and complete product
              information, and to save more money while shopping online. As
              explained in detail below, members can also use the Service to
              earn Deal2Coupon Coins loyalty rewards points. There are a variety
              of ways that Deal2Coupon offers to access aspects of our services,
              along with the Website, browser extension and, in some countries,
              the Deal2Coupon Mobile App. All the aspects will not be available
              through all channels and all the locations. For instance, some
              aspects of our service are available only through Deal2Coupon
              Browser extension, or for users in certain countries.
              <br />
              <br />
              <p>
                Additionally, you have to become a Member to access some
                portions of our incredible Service, including earn and redeem
                Deal2Coupon Coin loyalty rewards points.
              </p>
            </p>
            <p>
              You won’t be charged for Deal2Coupon’s service. It tries to locate
              the best publicly available offers, discounts and coupons, track
              product pricing that may be better than other publicly available
              deals. Deal2Coupon make money to comfort the Service when you shop
              or engage with such lovely offers. Also, there will be some
              possibilities when Deal2Coupon misses savings or rewards
              opportunities. Hence, Deal2Coupon is not responsible for not
              identifying low prices and all the time finding you the best
              available discounts and coupons.{" "}
            </p>
            <p>
              While attempting to give you exact descriptions for the
              products,offers, coupons, discount codes, sales and other
              information shown within or through the Service, the information
              we show (including many coupons and offer descriptions) is
              provided by third-parties that is out of our control. Hence,
              Deal2Coupon does not warrant that the product descriptions,
              third-party offers or discount codes, or related merchant
              information or terms shown through the Service (including the
              browser extension, Website, Deal2Coupon Mobile App or emailed
              offers) are accurate, wholly, trustable, current, or error-free.
              Also, if you see any products on the Website or on the Deal2Coupon
              Mobile App at a specific time does not mean or warrant that these
              products will be available all the time or any other time.
            </p>
            <p>
              All the offers, discount codes and coupons will be given according
              to the availability. Restrictions, terms and conditions and
              exclusions including third-party merchant exclusions,
              restrictions, and terms and conditions will apply. Deals get
              updated often that causes your application of offers, coupons and
              discount codes at checkout may or may not result in savings for
              your order.
            </p>
          </div>
          <div className="mb-4">
            <h5>Merchant Websites and Purchases</h5>
            <p>
              You will have authority to view the products information listed
              for sale by third-party merchants online, you will find available
              offers on those products, and navigate the pricing information.
              Deal2Coupon may provide product information and saving
              opportunities through the browser extension when you visit the
              third-party merchant&apos;s website. There will be another way to
              visit a third-party merchant website that is through a link from
              the Website or emailed offer. Also, you may get the merchant
              website through the Deal2Coupon’s Mobile App. Though, all the
              merchant products will be purchased directly from the merchant and
              through the merchant’s website. That means, you are not purchasing
              the products from Deal2Coupon as we are not resellers or
              distributors of any products of third-party merchants.
              Deal2Coupon’s are only responsible for selling gift cards, as
              detailed in the Gift Cards Purchased From Deal2Coupon section
              below.
            </p>
          </div>
          <div className="mb-4">
            <h5>Merchant Returns</h5>
            <p>
              If there is something you don’t like about the product you
              purchase from merchant and you want it to return, if the merchant
              product you ordered has not arrived yet or if you want to talk
              with customer executive regarding your purchased merchant product,
              you highly-require to contact the third-party merchant from whom
              you just shopped the product. Deal2Coupon is not in between you
              and the merchant. Deal2Coupon is not able to guide you with any
              customer service inquiries or returns related to that shopping.
            </p>
          </div>
          <div className="mb-4">
            <h5>Deal2Coupon Gold Offers and Third-Party Links</h5>
            <p>
              Deal2Coupon will show you best offers and other personalized and
              non-personalized pricing along with complete product information
              regarding goods and services provided by third-party merchants.
              These offers and product information may be offered in kind of
              ways, such as links to third-party websites or as coupons or
              discount codes you can apply to your purchase of products provided
              by third-party merchants.
            </p>
            <p>
              In addition, Deal2Coupon will also display to you specific offers
              on any product that may offer you a certain amount of Deal2Coupon
              Coin loyalty rewards points when you purchase a specific item from
              a specific third-party merchant (&quot;Deal2Coupon Coin
              Offers&quot;). Also, all the devices and channels will not show
              you all Deal2Coupon Coins offers. For instance, we will display
              some specific Deal2Coupon Coins Offer to the users through your
              mobile phone, but you can not find those offers via desktop
              computer or other device. Likewise, we may display a specific
              Deal2Coupon Coins Offer to you while you are using a specific web
              browser at the same time the same Deal2Coupon Coins Offer may not
              be accessible to you using a different web browser or through a
              different channel, for example the Deal2Coupon Mobile App. If you
              see a Deal2Coupon Coin Offer then you have to follow the
              instructions displayed to you on a similar device and channel (and
              if, applicable, in the same web browser which the Deal2Coupon
              Coins Offer was displayed to you) with the intention to take
              advantage of the offer.
            </p>
            <p>
              Also, to improve our services, Deal2Coupon will track how you use
              our services, including whether you click on Deal2Coupon’s link to
              third-party websites, your moves on the third-party merchant
              websites, and if you are using the discount or coupon codes shown
              by Deal2Coupon.
            </p>
          </div>
          <div className="mb-4">
            <h5>Deal2Coupon Is Not Responsible for Third-Parties</h5>
            <p>
              The products you buy from a third-party merchant, including those
              linked with the Website or Deal2Coupon emailed offer, or displayed
              by the Deal2Coupon Mobile App or through Deal2Coupon Browser
              extension, are: (a) priced by the relevant third-party merchant
              (including whether such prices include applicable local, state,
              provincial or federal taxes, and any additional fees, such as
              handling and shipping); and (b) fulfilled, shipped, and otherwise
              serviced (including but not limited to the processing of returns,
              refunds, and cancellations) by the applicable third-party merchant
              and not by Deal2Coupon. Deal2Coupon is not answerable for any
              third-party merchant products or any information contained on the
              third-party merchant&apos;s website (including if the third-party
              merchant&apos;s website is displayed through the Deal2Coupon
              Mobile App).
            </p>
            <p>
              You are accepting that your all shopping from a third-party
              merchant is related to that merchant&apos;s own terms and
              conditions applicable to such purchase. Also, you accept that
              Deal2Coupon is not answerable or liable for the products you buy
              using the Service, including for product improper charges, pricing
              errors, delivery failures, liability claim, or inaccurate product
              descriptions. Also, you agree with the statement that Deal2Coupon
              is not responsible for any breaches of credit card or debit card
              security or privacy by any third-party merchants.
            </p>
            <p>
              Deal2Coupon does not guarantee, endorse and warrant the products
              or services that are shown through Service, including through
              Deal2Coupon Coins Offers and other advertised links to third-party
              websites. Deal2Coupon is not an agent, broker, distributor,
              re-seller or otherwise answerable for third-party merchants or
              policies or activities of those merchant websites, and the
              products or services available on them. Deal2Coupon does not
              promise or take guarantee that the product prices, coupon
              availability, details or other terms of the services rates or
              rewards provided by any specific advertiser or other third-party
              using our Service are the best prices, best terms or lowest rates
              available in the market.
            </p>
            <p>
              If you use our Service to access third-party websites, you agree
              to accept risks in doing so, and that Deal2Coupon is not
              responsible for such kinds of risks taken by you. We encourage
              users to be aware of all the terms and conditions and when you are
              on a third-party merchant website. Also, you should be aware of
              the privacy policy of each third-party website or service that you
              visit or utilize.
            </p>
            <p>
              Deal2Coupon does not control and assumes no authority for, the
              accuracy, privacy policies, content, or practices or opinions
              mentioned in any third-party websites or by any third-party that
              you meet with through the Service. Additionally, Deal2Coupon does
              not at all censor, monitor, verify or edit any content of
              third-party sites or services.
            </p>
            <p>
              Through use of the Service, you leave us harmless from any and all
              the possible liability developed by your use of any third-party
              website or service. If there is some misunderstanding or any kind
              of dispute between you and third-party (including a merchant from
              whom you purchase a product in connection with the Service), you
              accept that Deal2Coupon is under no commitment to become
              answerable or involved. To the all extent allowed by applicable
              law, you release Deal2Coupon, Inc., our affiliates and each of
              their honourable officers, agents, employees and successors from
              claims, damages of every kind or nature, demands, disclosed or
              undisclosed, suspected or unsuspected, known or unknown, arising
              out of or in any way related to any dispute you have with a
              third-party in connection with the Service. Moreover, if you are a
              California resident, you shall and hereby do waive California
              Civil Code Section 1542, which says: &quot;A GENERAL RELEASE DOES
              NOT EXTEND TO CLAIMS THAT THE CREDITOR OR RELEASING PARTY DOES NOT
              KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF
              EXECUTING THE RELEASE AND THAT, IF KNOWN BY HIM OR HER, WOULD HAVE
              MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR
              RELEASED PARTY.&quot;
            </p>
          </div>
          <div className="mb-4">
            <h5>Gift Cards Purchased From Deal2Coupon </h5>
            <p>
              You may get an opportunity through Deal2Coupon to purchase gift
              cards offered by and redeemable with third-party merchants that
              are sold by Deal2Coupon through the Browser Extension, Deal2Coupon
              or Website, many or some of which may be provided at a discount.
              You may then be capable of using the gift cards to buy merchandise
              from the third-party merchant in accordance with the terms of the
              applicable gift card program.
            </p>
            <p>
              You can use any payment method you provide to Deal2Coupon,
              including, no limitation on the credit card you give when making
              payment at the time when you purchase a gift card using
              Deal2Coupon.
            </p>
            <p>
              Please keep in mind that, when you use Deal2Coupon to purchase a
              gift card so that you can make a merchant purchase, you may not
              get the same reward via your debit or credit card (for example, 5%
              back or 2x points) that you will get when you purchased the
              product from the merchant without using the gift card.
            </p>
            <p>
              The gift cards of third-party are available for shopping through
              Deal2Coupon, or can be the saving option as part of the
              Deal2Coupon Coins Reward Program (As Detailed Below) are related
              to the terms and conditions of the applicable merchant and/or the
              merchant’s card provider. Although, the merchant or its card
              provider is responsible for the card balances and gift cards (and
              are solely the liabilities of) not Deal2Coupon. Also, you agree
              with the statement that Deal2Coupon is not holder of any
              liabilities subject to unredeemed gift cards, and not provider of
              any gift cards, and also Deal2Coupon is not giving warranties of
              the gift cards and not representing such things. The gift cards
              are final and can’t be refundable.
            </p>
            <p>
              When you buy a gift card using Deal2Coupon we will keep your
              payment mode information for future purchase from Deal2Coupon.
              However, you can delete or make changes in your payment method
              information by using personalised account settings.
            </p>
          </div>
          <div className="mb-4">
            <h5>Deal2Coupon Mobile App</h5>
            <p>
              There are certain countries where you can use our Deal2Coupon
              Mobile App. Also, there are many possibilities that it is not
              accessible in your current location or country.
            </p>
            <p>
              There are specific devices and operating systems you can link
              applications to using Deal2Coupon Mobile App for example
              Apple&apos;s iOS operating system. The Deal2Coupon Mobile App you
              use may related to different agreements you may invade into by
              your mobile device operating system giver (e.g., Apple®, Google®
              or Microsoft® your mobile device manufacturer (e.g., Apple®,
              Samsung®), your mobile service carrier (e.g., AT&T® or Verizon®),
              including other parties jumbled in giving your mobile assistance
              (which we individually refer to as a “Covered Third Party”
              including collectively refer to as &quot;Covered Third
              Parties&quot;). You acknowledge and agree to observe all relevant
              third-party terms of service while using the Deal2Coupon Mobile
              App. We are not indulged and are not responsible for the services
              and products given by third parties. You agree with all the terms
              and this agreement between Deal2Coupon and you, which is not with
              any Covered Third Party. You admit that Deal2Coupon (and not any
              Covered Third Party) are only answerable for the Deal2Coupon
              Mobile App and for giving any support services or maintenance for
              the Deal2Coupon Mobile App.
            </p>
            <p>
              Third Parties have no warranty commitments related with
              Deal2Coupon Mobile App, and any other claims, damages,
              liabilities, losses, costs or expenses attributable to any failure
              of the Deal2Coupon Mobile App to follow any warranty given by us
              (if any), will be our only responsibility.
            </p>
            <p>
              We are solely responsible for representing any claims subject to
              the Deal2Coupon Mobile App but not any Covered Third Parties. Also
              Deal2Coupon is not limited to: (i) any claim that the Deal2Coupon
              Mobile App fails to conform to any applicable legal or regulatory
              requirement; (ii) (i) product liability claims; (iii) intellectual
              property claims; (iv) claims arising under consumer protection,
              privacy, or similar legislation.
            </p>
            <p>
              Moreover, If you are taking Deal2Coupon Mobile App service on an
              Apple® or Google® device, you agree that Apple® or Google® (as
              applicable), and its subsidiaries (as applicable), are third party
              beneficiaries of this Agreement, and that it will have the power
              (and will be deemed to have accepted the right) to impose this
              written agreement opposite you as as a third-party beneficiary.
              These rights will also arise to other handset manufacturers and
              operating systems which are related with the Deal2Coupon Mobile
              App.
            </p>
            <p>
              To the large extent the other terms and conditions of the rest of
              this agreement dispute with the terms and conditions of this
              portion, this section of terms and conditions apply, but only the
              time when you use Deal2Coupon Mobile App which is downloaded via
              Apple App Store or Google Play Store.
            </p>
          </div>
          <div className="mb-4">
            <h5>Account Information from Third Party Sites</h5>
            <p>
              Deal2Coupon will allow you to log-in, register your account or
              link your Deal2Coupon account with an account you manage with any
              third-party, such as Google® or Facebook® (&quot;Linked
              Account&quot;), but you need to create an account first with
              Deal2Coupon. You constitute any linked account which is related to
              you and you are allowed to link it to your Deal2Coupon account.
              Deal2Coupon has not control over practises and policies of any
              service and site of the third-party, including any of your
              connected account to the Service and Deal2Coupon is not answerable
              for any actions or exclusions of givers of a Linked Account, also
              not responsible of related to legality, accuracy or
              non-infringement. Deal2Coupon is also not answerable and has no
              responsibility for the services and products given by or through
              your connected or Linked Account. If it is allowed or permitted
              through your Linked Account, Deal2Coupon may import the required
              information from your Linked Accounts to help provide the best
              deals and offers the Service to you.
            </p>
          </div>
          <div className="mb-4">
            <h5>Deal2Coupon Coins Rewards Program</h5>
            <p>
              Deal2Coupon always keeps updating its loyalty rewards points
              (&quot;Deal2Coupon Coins loyalty rewards points&quot;) accessible
              to you when carefully finishing the specific actions and moves
              through our Service, related to our loyalty rewards program (the
              &quot;Deal2Coupon Gold Rewards Program&quot;). When Deal2Coupon
              Coins loyalty rewards points are there for you so that you can
              make eligible purchases made from a certain merchant, or for
              another action, we may stipulate this to you within our Service.
              You have to maintain an Active Account (as detailed below) in
              trust to be the part of Deal2Coupon Coins Rewards Program, and to
              get and save Deal2Coupon Coins loyalty rewards points or obtain
              the value of the Deal2Coupon Coins Rewards Program. Specific
              Deal2Coupon Coins loyalty rewards points absolutions options may
              need that you have a valid payment method account in good faith
              linked to your Deal2Coupon Account to select and successfully
              complete a specific redemption option.
            </p>
            <p>
              The Deal2Coupon Coins Rewards program is available in certain
              countries and locations and not applicable in all the countries.
              Being a part of Deal2Coupon Coins Rewards program is completely
              unauthorised in any jurisdiction where the chances of Deal2Coupon
              violation in any legal requirements, and you do not participate if
              you are a dweller of related jurisdiction. You can use Deal2Coupon
              Coins Reward Program for personal and non-commercial purposes
              only. You accept that you are not willing to use the Deal2Coupon
              Coins Rewards Program on behalf of or for any related and
              unrelated third party, for association, for any company, or for
              any commercial purpose. Also, you are accepting that you won’t use
              multiple accounts to participate in the Deal2Coupon Coins Rewards
              Program. These things confirm to avoid any prohibition from this
              Agreement or to earn and save Deal2Coupon Coin loyalty rewards
              points in surplus of that may otherwise be allowed under this
              Agreement.
            </p>
            <p>
              You acknowledge that all the decisions of Deal2Coupon which are
              subject to Deal2Coupon Coins Rewards Program and your involvement
              in it are full and final and you accept to abide by all such
              decisions taken by Deal2Coupon. We are solely arbiter in all the
              cases that suspect abuse, deceit or violation of its rules and any
              decision it makes in connection of suspension, termination, or
              disabling of your participation in the Deal2Coupon Coins Rewards
              Program and/or the expiration or ending of any Deal2Coupon Coins
              loyalty rewards points or other program advantages.
            </p>
            <p>
              You need to use our Service to make an eligible purchase from any
              of the participated third-party merchants so that you can earn
              Deal2Coupon Coins loyalty rewards points. There are some specific
              third-party merchants or items where you can get Deal2Coupon Coins
              loyalty rewards points and it is not available for all items.
              Moreover, it is highly-required that the third Party merchant must
              participate in the Deal2Coupon Coins Rewards Program so that you
              can earn Deal2Coupon Coins loyalty rewards points through
              purchasing eligible items from that participating third-party
              merchant. You must obey the instructions and links as revealed
              within the Service or in other Deal2Coupon Coins Rewards Program
              materials so that it can be complete the the eligible and
              acceptable purchase and/or other certified or necessary action(s)
              and move(s) (for instance, by clicking the “Activate Rewards”
              button from within the Deal2Coupon browser extension before
              completing your purchase credentials).
            </p>
            <p>
              We may show the exact amount and price of Deal2Coupon Coins
              loyalty rewards points which you can get or earn which related
              from an eligible shopping in a many ways, including unlimited to
              the following: (1) a percentage reward rate range applicable for
              eligible purchases, (2) a fixed number of points for an eligible
              purchase (for example, 500 Deal2Coupon Coins loyalty rewards
              points), (3) a fixed, percentage reward rate applicable for
              eligible purchases (for example, 3% in Deal2Coupon Coins loyalty
              rewards points based on the subtotal of eligible items), (4) a
              range of Deal2Coupon Coins loyalty rewards points for an eligible
              purchase (for example, 300-500 points).
            </p>
            <p>
              The applied percentage is the subtotal of eligible purchased items
              which were made through participating third-party merchants, no
              tax addition or any kind of additional fees such as shipping and
              other. These percentage is relevant with percentage reward rate or
              percentage reward rate range. Only your eligible purchases and
              specific product categories and items can make you earn
              Deal2Coupon Coins loyalty rewards points. Barring differs by
              Merchant. Before you complete your purchase, we won’t be able to
              show you if that specific product can make you get any Deal2Coupon
              Coins Offers or not.
            </p>
            <p>
              Once you complete your eligible purchase then only Deal2Coupon
              will show you the exact number of Deal2Coupon Coins loyalty reward
              points that can be earned by you on a specific item or product,
              but, related to the terms of this on-going Agreement and provided
              all of your items are capable, will fall around the range or up to
              the maximum number released to you, and will root on a number of
              factors of our selections which may include unknown chance.
            </p>
            <p>
              You will get so many ways to earn Deal2Coupon Coins loyalty
              rewards points. These earning chances may be related to additional
              terms, as stated at the offer time. Deal2Coupon Coins loyalty
              rewards points will show as pending and available in your Account
              Overview, generally within 2-14 days after your purchase, though
              this may differ root on the transaction and third-party merchant.
              Such things take place before our announcements of available
              Deal2Coupon Coins loyalty rewards points on all your eligible
              purchases. The Deal2Coupon Coins loyalty rewards points stay
              pending 60-90 days (though this reach is based on the third-party
              merchant and may be longer or shorter in some chances). If all of
              your purchase or any part of it is unacceptable or ineligible for
              Deal2Coupon Coins reward points, or if there are some reasons from
              which you want to return part or all of your purchase or want to
              receive the refund on it ( either through the merchant or via a
              chargeback or reversal of any kind), then the number of
              Deal2Coupon Coins loyalty rewards points you get based on your
              purchase, may or may not showing as &quot;pending,&quot; will be
              deducted accordingly rooted on the latest subtotal of eligible
              items. Also, we don’t find any eligible items in your order, you
              will not be able to earn any Deal2Coupon Coins loyalty rewards
              points on that transaction or order. Similarly, there are no
              Deal2Coupon Coins loyalty rewards points that will be available
              for you if you return the product or item.
            </p>
            <p>
              You can not use or redeem Deal2Coupon Coint loyalty rewards points
              that are pending. There is an Account Overview option for you
              where you can see Deal2Coupon Coins loyalty rewards points are no
              longer pending and become available to redeem.
            </p>
            <p>
              We are all capable of giving Deal2Coupon Coins loyalty rewards
              points to you that are satisfying our agreements with third-party
              affiliate networks and/or third-party merchants related to your
              purchases. Similarly, your action must be completed successfully
              so that we can be able to give Deal2Coupon Coins loyalty rewards
              points directly after tracked and the relevant third-party
              completes its commitments and obligations to Deal2Coupon
              respectfully. If a third-party will not complete its commitments
              and obligations to us under this relevant agreement, then
              Deal2Coupon may opt to not provide or give the Deal2Coupon Coins
              loyalty reward points related with that transaction to you. The
              instances are included where there are obstacles in tracking a
              transaction due to your use of an ad blocker or another that is
              similar to Deal2Coupon. You can prevent these obstacles and
              difficulties by not downloading or avoiding another browser
              extension that provides similar services as Deal2Coupon does and
              that route to a third-party merchant site by clicking on a link
              from another website that gives discount codes or price tracking
              services.
            </p>
            <p>
              If there are some questions roaming in your mind and some issues
              related to earning Deal2Coupon Coins loyalty rewards points for
              your transaction, kindly feel free to contact us at “WEBSITE
              LINK.” There are many possibilities that we will ask you to
              provide copies of your order confirmation, order number or other
              proof that show your purchase. We may select to give you
              Deal2Coupon Coins loyalty reward points in our sole circumspection
              or discretion based on the information you provide.
            </p>
            <p>
              Your account must be active and in good standing, once you collect
              enough Deal2Coupon Coins loyalty rewards points, you can save or
              redeem those Deal2Coupon Coins for a third-party merchant gift
              card, or for other available redemption or saving options as
              disclosed or impart within the Service. You do require to gather a
              minimal or specific amount of Deal2Coupon Coins reward points, as
              disclosed within our Service, earlier to be eligible for a
              specific redemption selection. Also, choosing the merchant gift
              cards differ based on availability. Merchant’s and gift card
              issuer&apos;s do carry their own terms of service and the gift
              cards you use of specific third-party merchants will be based on
              those merchants only. Once you initiate the redemption or redeem
              then you can not reverse or cancel it. There are some conditions
              made by us to limit your ability to redeem Deal2Coupon Coins
              loyalty rewards points. Deal2Coupon can change or modify the price
              or range, redemption-rate or availability of any product or item
              for which you can or may redeem Deal2Coupon Coins loyalty rewards
              points in our sole discretion and we do not need to issue prior
              notice.
            </p>
            <p>
              Redemption options are provided subject to availability and also
              depend on your residence, and other limitations or factors and may
              be related to some additional and relevant certain terms or
              limitations. All the users can not get all the redemption options
              or in all the countries or locations. You can see the available
              redemption options within the service. Once you initiate the
              particular redemption option, it will take a specific time to get
              your award following completion of your redemption (for instance,
              24 hours, but this may be enhanced in some cases depending on the
              particular redemption option).
            </p>
            <p>
              You cannot purchase Deal2Coupon Coins loyalty rewards points, are
              not money, are not property, can expire as detailed below, and do
              not carry value prior to redemption. There are additional terms
              that may apply upon redemption. You can transfer the Deal2Coupon
              Coins loyalty reward points in any circumstances as it is not
              transferable (only when Clippre expressly makes transfer or
              account linking functionality available within the Deal2Coupon
              Coins Rewards Program, and then subject or related to any
              additional terms or limitations set out by Deal2Coupon). With no
              limit to the foregoing, Deal2Coupon Coins loyalty rewards points
              can not descend, and may not be transferred by function of law
              (even in case of bankruptcy, inheritance, or in the event of
              divorce). You need to understand that advantages and benefits you
              get through the redemption of Deal2Coupon Coins loyalty rewards
              points may be licensed or qualify as taxable income under
              applicable or relevant law and you are solely or only responsible
              for all the tax or similar liability in connection with your
              participation in the Deal2Coupon Coins Rewards Program.
            </p>
            <p>
              Please note that the Deal2Coupon reserves the right to cancel,
              modify, terminate, or restrict the Deal2Coupon Coins program, or
              any part of Deal2Coupon coins program, at any time. It can be for
              some or all users, it may or may not be limited to the Deal2Coupon
              coins redemption ratios, expiration terms, or redemption offers.
              Deal2Coupon reserves the right to start the modification posterior
              or retroactively to Deal2Coupon Coins rewards program already
              ensued. The user agrees that Deal2Coupon has the right to reduce
              or limit the number of Deal2Coupon Coins the user may earn, refuse
              to provide you Deal2Coupon coins, or otherwise modify, restrict or
              limit your ability to earn or redeem the Deal2Coupon coins in our
              sole discretion and without prior notice to you. This includes
              (but is not limited to) instances where Deal2Coupon reasonably
              suspects that you have abused any Deal2Coupon coins benefits or
              privileges, or have violated or acted inconsistently with this
              Agreement or applicable law. Abuse or violations that may result
              in suspension or termination include (but are not limited to): (i)
              using automated or fraudulent means (including artificially
              manufacturing transactions/spend) to earn Deal2Coupon coins or
              participate in the Deal2Coupon Coins Program; (ii) your failure to
              abide by the requirements of this Agreement; (iii) the attempted
              or actual purchase, sale, or transfer of any Deal2Coupon coins
              program, and (iv) making a misrepresentation to Deal2Coupon in
              connection with your participation in the Deal2Coupon Coins
              Rewards Program. You understand and agree that termination of your
              participation in the Deal2Coupon Coins Rewards Program will result
              in the immediate expiration of all Deal2Coupon coins.
            </p>
          </div>
          <div className="mb-4">
            <h5>Maintenance Of Deal2Coupon Coins Rewards Program</h5>
            <p>
              The user must have an active account and earn at least 100
              Deal2Coupon Coins rewards points during each consecutive 365 day
              period (for example, from Jan 10th of this year to Jan 10th of
              next year) to maintain their Deal2Coupon Coins rewards program. By
              an active account, Deal2Coupon means a Deal2Coupon account which
              you have made a purchase through, or logged into, during the prior
              365 Day Period and earned at least 100 new Deal2Coupon Coins
              rewards points during that 365 Day Period (an &quot;Active
              Account&quot;). This means that, to the maximum extent permitted
              by applicable law, if you have not entered into your Deal2Coupon
              account or made a purchase through it, and earned at least 100 new
              Deal2Coupon Coins rewards points in the last 365 Day Period,
              Deal2Coupon has the right to reduce your Deal2Coupon Coins rewards
              points. To the maximum extent permitted by applicable law, you
              agree that any disputes about any such reduction of your
              Deal2Coupon Coins rewards will be resolved by Deal2Coupon in its
              sole discretion, and you agree to abide by Deal2Coupon&apos;s
              resolution of such dispute. If your Deal2Coupon account is
              terminated for any reason whatsoever, you will no longer be able
              to redeem any Deal2Coupon Coins rewards.
            </p>
          </div>
          <div className="mb-4">
            <h5>Referral Program</h5>
            <p>
              Deal2Coupon may, from time to time, allow you to earn Deal2Coupon
              Coins rewards in connection with taking actions to promote the
              Service. It means including a friend by referring them to the
              Service (&quot;Referral Program&quot;). To be eligible to earn
              Deal2Coupon Coins rewards through the Referral Program (i) The
              user must refer a new user to the Service by providing their
              personalized link, (ii) the new user must use the active user’s
              link to create their own user account and become a Member and
              (iii) the new user must make a qualifying purchase using their
              Member account and earn Deal2Coupon Coins rewards.
            </p>
            <p>
              The user must not attempt to earn Deal2Coupon coins rewards in
              connection with the Referral Program through fraud, deceit, or
              illegal means, including by creating multiple or duplicate
              accounts, engaging in a bot network, spam, advertising or any paid
              promotional channel. Deal2Coupon reserves the right, in its sole
              discretion, to withhold Deal2Coupon coins rewards for any reason
              in connection with the Referral Program with or without cause. We
              may also limit retroactively, in our sole discretion and without
              prior notice, the number of Deal2Coupon coins rewards you may earn
              through the Referral Program or any aspect thereof. Failure to
              comply with this Agreement or any fraudulent or abusive actions
              may result in the removal of Deal2Coupon coins rewards from the
              user’s account, and may also result in Deal2Coupon suspending or
              closing the user’s account and/or suspending or terminating their
              access to the Service.
            </p>
          </div>
          <div className="mb-4">
            <h5>User’s Log-In And Account Information</h5>
            <p>
              The user agrees and understands that they are responsible for
              maintaining the confidentiality of their Log-in ID, email address,
              password and any other personal identifying information or other
              codes used to access their Deal2Coupon account or the Service
              (&quot;Log-In Information&quot;). If you become aware of any
              unauthorized use of your Log-In Information, you agree to notify
              Deal2Coupon immediately. The accurate and correct records allow
              Deal2Coupon to provide the Service to the user. Therefore, you
              agree to keep your email address, your other contact information
              and any payment information in your Deal2Coupon account profile
              accurate and updated. If you do not do this, the accuracy and
              effectiveness of the Service to you will be affected and you may
              not receive account notices related to your Deal2Coupon account
              that we deliver to you. If you fail to keep your contact
              information updated and accurate, you will still be deemed to have
              received any notices we deliver to the email address you last
              provided.
            </p>
          </div>
          <div className="mb-4">
            <h5>Electronic Notices</h5>
            <p>
              By providing us with your email address, you agree to receive all
              Deal2Coupon account related notices electronically, to the e-mail
              address you last provided. It is your responsibility to update or
              change the accurate and latest address, as appropriate. Notices
              will be provided in HTML (or, if your system does not support
              HTML, in plain-text) in the text of the e-mail or through a link
              to the appropriate page on our website, accessible through any
              standard modern, commercially available internet browser. We may
              also use your email address to contact you about our own and
              third-parties goods and services that may be of interest to you.
              However, you can adjust your user preferences in your account
              profile and click “Unsubscribe” in any e-mail communications that
              Deal2Coupon sends to you, if you do not want us to use your
              information in this way.
            </p>
          </div>
          <div className="mb-4">
            <h5>Electronic Notifications</h5>
            <p>
              Deal2Coupon may provide you with electronic notifications by the
              means of email, push engage notification or other electronic
              means. The user understands that some electronic notifications are
              mandatory, including security-related notifications, such as when
              the user updates their log-in information or password. Some types
              of notifications are voluntary and may be modified through the
              Service. They may be customized, deactivated or reactivated by the
              user. These notifications allow you to choose alert messages for
              your account. Deal2Coupon may add new notifications from time to
              time, or terminate to provide certain notifications at any time
              upon its sole discretion. Each alert has different options
              available, and you may be asked to select from among these options
              upon activation of your notifications service. Electronic
              notifications will be sent to the email address you have provided
              as your primary email address for the Service. Because
              notifications are not encrypted, Deal2Coupon will never include
              your password. However, notifications may include your Deal2Coupon
              login information and some information about your accounts. Anyone
              with access to your email will be able to view the content of
              these notifications. While you may disable certain voluntary
              notifications, Deal2Coupon will still send you Service-related
              notices as needed to allow us to provide you the Service.
            </p>
          </div>
          <div className="mb-4">
            <h5>Deal2Coupon’s Intellectual Property Rights</h5>
            <p>
              The contents of the Deal2Coupon website and Service, including its
              &quot;look and feel&quot; (e.g., text, graphics, images, logos and
              button icons), photographs, editorial content, notices, software
              (including html-based computer programs) and other material are
              protected under copyright, trademark and other laws. The contents
              of the Service belong or are licensed to Deal2Coupon or its
              software or content suppliers. Deal2Coupon gives you the right to
              view and use the Service subject to this Agreement. Any
              distribution, reprint or electronic reproduction of any content
              from Deal2Coupon or its Services, other than as expressly
              permitted in this Agreement or with our prior written consent, is
              prohibited. If you would like to request such permission, shoot us
              an email at “INSERT EMAIL.” The user’s right to access and use the
              Service is personal to them and is not transferable by them to any
              other human or entity. The user is only entitled to access and use
              Deal2Coupon’s Service for lawful, internal, and non-commercial
              purposes. Subject to your compliance with this Agreement,
              Deal2Coupon hereby grants to you, a personal, worldwide,
              non-assignable, non-sublicensable, non-transferrable, and
              non-exclusive license to (i) use the software and content provided
              to you as part of the Service (for personal, non-commercial
              purposes; and (ii) download a single copy of our software for such
              use. The user agrees that Deal2Coupon may use their feedback,
              suggestions, or ideas in any way, including in future
              modifications of the Service, other products or services,
              advertising or marketing materials (although any use of your
              personal information will be subject to our privacy policy).
            </p>
          </div>
          <div className="mb-4">
            <h5>Technology Disclaimer</h5>
            <p>
              Your use of the Service may be interrupted sometimes due to
              third-party failures outside our control (such as unavailability
              of general Internet infrastructure or connection). Access may also
              be interrupted for periodic updating, maintenance or repair of the
              Service by Deal2Coupon. While we will make reasonable efforts to
              make the Service available to you, we do not promise that it will
              be available at all times. Deal2Coupon cannot always foresee
              technical or other difficulties which may result in failure to
              obtain data or loss of data, personalization settings or other
              service interruptions. Deal2Coupon cannot assume responsibility
              for the timeliness, accuracy, deletion, non-delivery or failure to
              store any user data, communications or personalization settings.
            </p>
          </div>
          <div className="mb-4">
            <h5>Rules for Posting User Content</h5>
            <p>
              As part of the Service, Deal2Coupon may allow the user to post
              content on various publicly available locations in the Service
              (&quot;User Content&quot;). Hence, the user agrees in posting
              their User Content to follow the following rules:
              <ul className="mt-3">
                <li>
                  <p>
                    The user is responsible for all the content they submit to
                    the service.
                  </p>
                </li>
                <li>
                  <p>
                    By submitting User Content to us, you represent that you
                    have all necessary rights and hereby grant us a perpetual,
                    worldwide, irrevocable, non-exclusive, royalty-free,
                    sublicensable and transferable license to use, reproduce,
                    distribute, prepare derivative works of, modify, display,
                    and perform all or any portion of the User Content in
                    connection with the Service and our business, including
                    without limitation for promoting and redistributing part or
                    all of the site (and derivative works thereof) in any media
                    formats and through any media channels. You also hereby
                    grant each User a non-exclusive license to access and use
                    your User Content through the Service, and to use,
                    reproduce, distribute, prepare derivative works of, display
                    and perform such User Content as permitted through the
                    functionality of the Service and under this Agreement.
                  </p>
                </li>
                <li>
                  <p>
                    You agree to not post or transmit any message, data, image
                    or program that would violate the property rights of others,
                    including unauthorized copyrighted text, images or programs,
                    trade secrets or other confidential proprietary information,
                    and trademarks or service marks used in a violating manner.
                  </p>
                </li>
                <li>
                  <p>
                    The user may not interfere with other Users use of the
                    Service, including, without limitation, disrupting the
                    normal flow of dialogue in an interactive area of the
                    Service, deleting or revising any content posted by another
                    person or entity, or taking any action that imposes a
                    disproportionate burden on the Service infrastructure or
                    that negatively affects the availability of the Service to
                    others.
                  </p>
                </li>
              </ul>
            </p>
          </div>
          <div className="mb-4">
            <h5>Activities Which Are Prohibited</h5>
            <p>
              The user represents, warrants, and agrees that they will not
              contribute any content or otherwise use the Service or interact
              with the Service in a manner that:
            </p>
            <ol>
              <li value="number">
                Violates or infringes on someone else&apos;s intellectual
                property rights or any other rights, including
                Deal2Coupon&apos;s.
              </li>
              <li value="number">
                Any law or regulation, as well as this Agreement, is broken.
              </li>
              <li value="number">
                Is harmful, misleading, threatening, harassing, defamatory,
                vulgar, or otherwise offensive.
              </li>
              <li value="number">
                Puts your Deal2Coupon account&apos;s or anyone else&apos;s
                security in jeopardy (for example, allowing someone else to log
                in to the Service as you)
              </li>
              <li value="number">
                Attempts to gain another User&apos;s password, account, or other
                security information in any way.
              </li>
              <li value="number">
                Any computer network&apos;s security is breached, and any
                passwords or security encryption codes are cracked.
              </li>
              <li value="number">
                Runs Maillist, Listserv, any type of auto-responder or
                &quot;spam&quot; on the Service, or any processes that run or
                are activated while you are not logged into the Service, or that
                otherwise interfere with the proper functioning of the Service
                (including by putting an unreasonable load on the Service&apos;s
                infrastructure), or that would bypass the Service&apos;s
                navigational structure or presentation.
              </li>
              <li value="number">
                Any page, data, or portion of or connected to the Service or
                Content is &quot;crawled&quot; or &quot;scraped&quot; manually
                or by any automated means.
              </li>
              <li value="number">
                Any major chunk of the Content is copied or saved.
              </li>
              <li value="number">
                Decompiles, reverse engineers, or otherwise seeks to get the
                Service&apos;s source code or underlying concepts or
                information.
              </li>
              <li value="number">
                Any protective or security measure, as well as any content
                protections, that Deal2Coupon has established as part of the
                Service is circumvented, removed, altered, deactivated,
                degraded, or thwarted.
              </li>
            </ol>
            <p>
              If you breach or infringe on any of the restrictions listed above,
              your permission to use or access the Services of Deal2Coupon may
              be suspended or terminated immediately.
            </p>
          </div>
          <div className="mb-4">
            <h5>Disclaimer of Warranties and Representations</h5>
            <p>
              THE CONTENT AND ALL SERVICES AND PRODUCTS ASSOCIATED WITH OR
              PROVIDED THROUGH THE SERVICE (WHETHER OR NOT SPONSORED) ARE
              PROVIDED TO YOU ON AN &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; BASIS TO THE MAXIMUM EXTENT PERMITTED BY
              APPLICABLE LAW. Deal2Coupon MAKES NO EXPRESS OR IMPLIED
              REPRESENTATIONS OR WARRANTIES ABOUT THE CONTENT OR OPERATION OF
              THE SERVICE OR OF THE SERVICE. YOU AGREE THAT USE OF THE SERVICE
              IS AT YOUR SOLE RISK.
            </p>
            <p>
              Deal2Coupon MAKES NO EXPRESS OR IMPLIED REPRESENTATIONS,
              WARRANTIES, CONDITIONS, OR GUARANTEES ABOUT THE ACCURACY,
              RELIABILITY, OR COMPLETENESS OF THE CONTENT ON THE SERVICE OR OF
              THE SERVICE (WHETHER OR NOT SPONSORED), AND EXPRESSLY DISCLAIMS
              ANY REPRESENTATIONS, WARRANTIES, CONDITIONS, OR GUARANTEES OF
              NON-Deal2Coupon MAKES NO REPRESENTATION, WARRANTY, OR GUARANTEE
              THAT THE CONTENT AVAILABLE THROUGH THE SERVICE IS FREE OF VIRUSES
              OR OTHER CODE OR COMPUTER PROGRAMMING ROUTINES WITH CONTAMINATING
              OR DESTRUCTIVE PROPERTIES, OR THAT ARE INTENDED TO DAMAGE,
              SURREPTITIOUSLY INTERCEPT, OR EXPROPRIATE ANY SYSTEM, DATA OR
              PERSONAL INFORMATION. YOU ARE RESPONSIBLE FOR THE ACCURACY OF ANY
              USER CONTENT YOU PROVIDE, AND WE DISCLAIM ALL LIABILITY AND
              RESPONSIBILITY FOR SUCH CONTENT.
            </p>
          </div>
          <div className="mb-4">
            <h5>Disclaimer on Notifications</h5>
            <p>
              You acknowledge and agree that a variety of events may cause any
              alerts given to you through the Service to be delayed or
              prohibited. Deal2Coupon makes every effort to send notifications
              with correct information in a timely manner. However, we cannot
              guarantee that any notification will be delivered or that the
              content will be accurate. You further agree that Deal2Coupon will
              not be liable for any notification delays, failures, or
              misdirected deliveries; any inaccuracies in the content of a
              notification; or any actions taken or not taken by you or any
              third-party in reliance on a notice.
            </p>
          </div>
          <div className="mb-4">
            <h5>Liability Limitations for Deal2Coupon</h5>
            <p>
              Deal2Coupon WILL NOT BE RESPONSIBLE OR LIABLE TO YOU OR ANY THIRD
              PARTY, WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE),
              OR OTHERWISE, FOR ANY INDIRECT, SPECIAL, INCIDENTAL,
              CONSEQUENTIAL, EXEMPLARY, LIQUIDATED, OR PUNITIVE DAMAGES,
              INCLUDING BUT NOT LIMITED TO LOSS OF PROFIT, REVENUE, OR BUSINESS
              ARISING IN WHOLE OR IN PART FROM YOUR ACCESS TO THE SERVICE, YOUR
              USE OF THE SERVICE, OR THIS AGREEMENT, OR ANY LOSS OR DAMAGE
              CAUSED BY YOUR RELIANCE ON INFORMATION OBTAINED ON OR THROUGH THE
              SERVICE, EVEN IF Deal2Coupon HAS BEEN ADVISED OF THE POSSIBILITY
              OF SUCH DAMAGES. DISREGARDING ANYTHING IN THIS AGREEMENT TO THE
              CONTRARY, Deal2Coupon&apos;S LIABILITY TO YOU FOR ANY CAUSE
              WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION WILL ALWAYS BE
              LIMITED TO $5 00.00. (FIVE HUNDRED UNITED STATES DOLLARS).
            </p>
            <p>
              BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR
              LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES,
              Deal2Coupon&apos;S LIABILITY SHALL BE LIMITED TO THE FULLEST
              EXTENT PERMITTED BY LAW IN SUCH STATES OR JURISDICTIONS. THUS, THE
              ABOVE LIMITATIONS SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY
              LAW. STATUTORY RIGHTS THAT CANNOT BE WAIVED OR LIMITED BY CONTRACT
              ARE NOT AFFECTED BY THIS AGREEMENT.
            </p>
          </div>
          <div className="mb-4">
            <h5>Disclaimer on Notifications</h5>
            <p>
              You acknowledge and agree that a variety of events may cause any
              alerts given to you through the Service to be delayed or
              prohibited. Deal2Coupon makes every effort to send notifications
              with correct information in a timely manner. However, we cannot
              guarantee that any notification will be delivered or that the
              content will be accurate. You further agree that Deal2Coupon will
              not be liable for any notification delays, failures, or
              misdirected deliveries; any inaccuracies in the content of a
              notification; or any actions taken or not taken by you or any
              third-party in reliance on a notice.
            </p>
          </div>
          <div className="mb-4">
            <h5>Liability Limitations for Deal2Coupon</h5>
            <p>
              Deal2Coupon WILL NOT BE RESPONSIBLE OR LIABLE TO YOU OR ANY THIRD
              PARTY, WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE),
              OR OTHERWISE, FOR ANY INDIRECT, SPECIAL, INCIDENTAL,
              CONSEQUENTIAL, EXEMPLARY, LIQUIDATED, OR PUNITIVE DAMAGES,
              INCLUDING BUT NOT LIMITED TO LOSS OF PROFIT, REVENUE, OR BUSINESS
              ARISING IN WHOLE OR IN PART FROM YOUR ACCESS TO THE SERVICE, YOUR
              USE OF THE SERVICE, OR THIS AGREEMENT, OR ANY LOSS OR DAMAGE
              CAUSED BY YOUR RELIANCE ON INFORMATION OBTAINED ON OR THROUGH THE
              SERVICE, EVEN IF Deal2Coupon HAS BEEN ADVISED OF THE POSSIBILITY
              OF SUCH DAMAGES. DISREGARDING ANYTHING IN THIS AGREEMENT TO THE
              CONTRARY, Deal2Coupon&apos;S LIABILITY TO YOU FOR ANY CAUSE
              WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION WILL ALWAYS BE
              LIMITED TO $5 00.00. (FIVE HUNDRED UNITED STATES DOLLARS).
            </p>
            <p>
              BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR
              LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES,
              Deal2Coupon&apos;S LIABILITY SHALL BE LIMITED TO THE FULLEST
              EXTENT PERMITTED BY LAW IN SUCH STATES OR JURISDICTIONS. THUS, THE
              ABOVE LIMITATIONS SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY
              LAW. STATUTORY RIGHTS THAT CANNOT BE WAIVED OR LIMITED BY CONTRACT
              ARE NOT AFFECTED BY THIS AGREEMENT.
            </p>
          </div>
          <div className="mb-4">
            <h5>Deal2Coupon&apos;s Indemnification by You</h5>
            <p>
              You agree to defend, indemnify, and hold Deal2Coupon and its
              officers, directors, shareholders, and employees harmless from and
              against any and all claims and expenses, including but not limited
              to attorney&apos;s fees and other legal expenses, arising out of
              or attributable to your use of the Service, any breach of this
              Agreement by you, or your violation of any law or the rights of a
              third-party when using Deal2Coupon.
            </p>
          </div>
          <div className="mb-4">
            <h5>The End Of Your Relationship With Deal2Coupon</h5>
            <p>
              This Agreement will be in effect until either you or Deal2Coupon,
              as specified below, terminates it.
            </p>
            <p>
              If you wish to terminate this Agreement, you may do so by closing
              your account for the Deal2Coupon Service at any time. If you have
              created a Membership, please follow the instructions below to
              cancel your account. Otherwise, cease using the Service and
              visiting our website. To cancel your Deal2Coupon account, send an
              email to “insert email”. As a result of this,
            </p>
            <ul>
              <li>
                Your Deal2Coupon account will be closed, your Deal2Coupon coins
                loyalty rewards balance will be zeroed out, and you will no
                longer be able to redeem Deal2Coupon coins and
              </li>
              <li>
                Any information in our records will be kept in accordance with
                our privacy policies.
              </li>
            </ul>
            <p>
              Deal2Coupon may terminate this Agreement (and thus your right to
              access and use the Service) at any time by sending you an email
              (if it is safe to do so) at the e-mail address you supplied as
              part of your Registration Information.
            </p>
          </div>
          <div className="mb-4">
            <h5>
              IMPORTANT: PLEASE REVIEW THE ARBITRATION CLAUSE AND THE CLASS
              ACTION WAIVER AS THEY AFFECT YOUR LEGAL RIGHTS.
            </h5>
            <p>
              Arbitration. YOU AGREE THAT ALL DISPUTES BETWEEN YOU AND US
              (WHETHER OR NOT SUCH DISPUTE INVOLVES A THIRD-PARTY) IN CONNECTION
              WITH YOUR RELATIONSHIP WITH US, INCLUDING WITHOUT LIMITATION
              DISPUTES RELATED TO THIS AGREEMENT, YOUR USE OF THE SERVICE,
              AND/OR RIGHTS OF PRIVACY AND/OR PUBLICITY, WILL BE RESOLVED BY
              INDIVIDUAL BINDING ARBITRATION UNDER THE AMERICAN ARBITRATION
              ASSOCIATION&apos;S RULES FOR ARBITRATION OF CONSUMER-RELATED
              DISPUTES, AND YOU AND WE HEREBY WAIVE TRIAL BY JURY; PROVIDED,
              HOWEVER, THAT WE MAY SEEK INJUNCTIVE OR OTHER APPROPRIATE RELIEF
              IN ANY STATE OR FEDERAL COURT IN THE STATE OF CALIFORNIA IF YOU
              HAVE VIOLATED OR THREATENED TO VIOLATE OUR INTELLECTUAL PROPERTY
              RIGHTS IN ANY MANNER. IN ARBITRATION, DISCOVERY AND APPEAL RIGHTS
              ARE GENERALLY LIMITED, AND OTHER RIGHTS THAT YOU AND WE WOULD HAVE
              IN COURT MAY NOT BE AVAILABLE IN ARBITRATION.
            </p>
            <p>
              You can also file your claim in your local &quot;small
              claims&quot; court, if allowed by the regulations of that court
              and if it falls within its jurisdiction, unless it is transferred,
              removed, or appealed to a higher court. You can only file claims
              on your own behalf. For any claims covered by this agreement to
              arbitrate, neither you nor we will participate in a class action
              or class-wide arbitration. YOU AND Deal2Coupon ARE GIVING UP THE
              RIGHT TO PARTICIPATE AS A CLASS REPRESENTATIVE OR CLASS MEMBER ON
              ANY CLASS CLAIM THAT EACH SIDE MAY HAVE AGAINST THE OTHER,
              INCLUDING ANY RIGHT TO CLASS ARBITRATION OR ANY CONSOLIDATION OF
              INDIVIDUAL ARBITRATIONS, BY AGREEING TO THIS ARBITRATION CLAUSE
              AND CLASS ACTION WAIVER. If we are a party to the case, you also
              agree not to engage in claims brought in a private attorney
              general or representative capacity, or consolidated claims
              involving another person&apos;s account. The Federal Arbitration
              Act, not any state law governing arbitration, will govern this
              dispute resolution provision. If the American Arbitration
              Association refuses or is unable to schedule a hearing within one
              hundred sixty (160) days of filing the case, either we or you can
              choose to have the arbitration handled by the Judicial Arbitration
              and Mediation Services. Any court with jurisdiction may enter a
              judgement on the arbitrator&apos;s award. Regardless of any
              applicable law, the arbitrator will not be able to award damages,
              remedies, or awards that are inconsistent with this Agreement. You
              agree that, regardless of any statute or law to the contrary, any
              claim or cause of action arising out of, related to, or connected
              with the use of the Service or this Agreement must be filed within
              one (1) year of the occurrence of the claim or cause of action, or
              you will be permanently barred from using the Service. You may opt
              out of this ARBITRATION CLAUSE & CLASS ACTION WAIVER by writing an
              email to “contact@deal2coupon.com” within thirty (30) days of the
              first day you access or use the Service if you do not want to
              arbitrate disputes with Deal2Coupon. Severability. All of the
              previous material in this Arbitration section will be null and
              void if the ban against class actions and other claims brought on
              behalf of third parties is deemed to be unenforceable. This
              arbitration agreement shall remain in effect even if your
              relationship with us comes to an end.
            </p>
            <p>Governing Law and Dispute Resolution Forum</p>
            <p>
              This Agreement, as well as your relationship with Deal2Coupon
              under it, will be governed by the laws of the State of California
              in the United States of America, without regard to its conflict of
              laws or choice of laws provisions. Any dispute with Deal2Coupon,
              or any of its officers, directors, employees, agents, or
              affiliates, arising out of or in connection with this Agreement
              will be resolved exclusively in accordance with the ARBITRATION
              CLAUSE & CLASS ACTION WAIVER clause above, except in the case of
              imminent harm requiring temporary or preliminary injunctive
              relief, in which case Deal2Coupon may seek such relief in any
              court with jurisdiction over the parties. You recognise that
              Deal2Coupon is able to provide the Service at the terms specified
              in exchange for your consent to this provision, and that your
              agreement to this provision is a necessary consideration to this
              Agreement.
            </p>
            <p>
              You also acknowledge and agree that any dispute with Deal2Coupon,
              its officers, directors, employees, agents, or affiliates arising
              out of or connected to your use of the Service or this Agreement
              will be resolved as follows:
            </p>
            <ul>
              <li>YOU ARE RENDERING YOUR RIGHT TO A JURY TRIAL; and</li>
              <li>
                YOU ARE WAIVING YOUR RIGHT TO SERVE AS A REPRESENTATIVE, A
                PRIVATE ATTORNEY GENERAL, OR IN ANY OTHER REPRESENTATIVE
                CAPACITY, OR TO PARTICIPATE IN ANY LAWSUIT INVOLVING ANY SUCH
                DISPUTE AS A MEMBER OF A CLASS OF CLAIMANTS.
              </li>
            </ul>
            <p>User Content and Copyright Disputes</p>
            <p>
              You&apos;ve probably heard of the Digital Millennium Copyright Act
              (the &quot;DMCA&quot;), which asks internet service providers like
              Deal2Coupon to remove user-generated content that purportedly
              infringes on someone&apos;s copyright. We respect the intellectual
              property rights of others, and we reserve the right to remove or
              disable User Content that is alleged to be infringing, as well as
              terminate the accounts of repeat alleged infringers; for a
              complete copy of our Copyright Dispute Policy and instructions on
              how to report potentially infringing content, go here. Visit here
              to learn more about the DMCA.
            </p>
            <p>Notices to Consumers</p>
            <p>
              Notice of Consumer Rights in California. California users of the
              Service are given the following special consumer rights
              notification under California Civil Code Section 1789.3: The
              Complaint Assistance Unit of the California Department of Consumer
              Affairs Division of Consumer Services can be reached at 1625 North
              Market Blvd., Suite N 112, Sacramento, CA 95834, or by phone at
              (800) 952- 5210.
            </p>
            <p>
              Notice of Consumer Rights in Maryland The Commissioner of
              Financial Regulation for the State of Maryland will accept all
              questions or complaints regarding our service provider Blackhawk
              Network California, Inc. (Lic # 1044077) at: Office of the
              Commissioner of Financial Regulation 500 N Calvert Street, Suite
              402 Baltimore, Maryland 21202, or by phone at (888) 784-0136 for
              Members using Deal2Coupon&apos;s checkout with gift card service.
            </p>
            <p>Assignment</p>
            <p>
              Deal2Coupon may assign any or all of its rights or
              responsibilities under this Agreement, including all or part of
              this Agreement and/or any liabilities relating to Deal2Coupon
              Coins rewards, without recourse. If Deal2Coupon assigns some or
              all of its liabilities connected to Deal2Coupon Coins rewards, the
              assignee will be the sole obligor for those points, and
              Deal2Coupon will have no further obligations with respect to them.
            </p>
            <p>Miscellaneous</p>
            <p>
              If any portion of this Agreement is found to be unlawful, void, or
              unenforceable by any arbitrator or court of competent
              jurisdiction, the entire Agreement will not be deemed unlawful,
              void, or unenforceable, but only the portion of this Agreement
              that is found to be unlawful, void, or unenforceable will be
              struck from this Agreement.
            </p>
            <p>
              You agree that Deal2Coupon&apos;s failure to exercise or enforce
              any legal right or remedy provided for in the Agreement (or which
              Deal2Coupon has the benefit of under any applicable law) will not
              be construed as a formal waiver of Deal2Coupon&apos;s rights, and
              that Deal2Coupon will still be able to exercise those rights or
              remedies.
            </p>
            <p>
              This Agreement&apos;s covenants, agreements, representations, and
              warranties will survive your acceptance of this Agreement as well
              as its cancellation.
            </p>
            <p>
              In this Agreement, the term &quot;including&quot; means
              &quot;including but not limited to.
            </p>
            <p>
              Supplementary Terms for Users in Canada, Australia, and New
              Zealand Accessing or Using Our Service
            </p>
            <br />
            <p className="fw-bold">CANADA</p>
            <p>
              The following additional rules apply and form part of the
              Agreement if you access or use our Service in Canada. With respect
              to your access or use of our Service in Canada, the following
              supplemental terms shall govern if there is any conflict or
              disagreement between them and the requirements of the main body of
              the Agreement:
            </p>
            <ul>
              <li>
                The application of provincial consumer laws in Canada. Nothing
                in this Agreement disclaims, excludes, prevents, or limits the
                application of Canadian provincial consumer laws, including any
                applicable statutory consumer guarantees and rights, or is
                intended to do so. Any claims or warranties disclaimer, release,
                or restriction of our liability to you will only apply to, and
                be enforceable under, this Agreement to the extent authorized by
                law.
              </li>
              <li>
                Consumers in Quebec are governed by the Quebec Consumer Law. If
                you live in Quebec, the Agreement shall be governed by the laws
                of the Province of Quebec, without regard to conflict of laws
                principles.
              </li>
              <li>
                Commercial Electronic Messages: Where needed by law, we will get
                your approval to send you Electronic Notifications, Push
                Notifications, or emails about our own and third-party goods and
                services that may be of interest to you.
              </li>
              <li>
                You agree to irrevocably submit to the non-exclusive
                jurisdiction of the courts of Ontario, and if you reside in
                Quebec, the courts of Quebec, for the purpose of any suit,
                action, or other procedure arising out of this Agreement, unless
                the parties otherwise agree.
              </li>
            </ul>
            <br />
            <p className="fw-bold">Australia</p>
            <p>
              The following additional rules apply and form part of the
              Agreement if you access or use our Service in Australia. With
              respect to your access or use of our Service in Australia, the
              following supplemental terms shall apply if there is any conflict
              or disagreement between them and the requirements of the main body
              of the Agreement:
            </p>
            <ul>
              <li>
                The Australian Consumer Law is being used. Nothing in this
                Agreement shall disclaim, exclude, prevent, or restrict the
                application of the Australian Consumer Law, as set out in
                Schedule 2 of the Competition and Consumer Act 2010 (Cth),
                including any applicable statutory consumer guarantees. Any
                claims or warranties disclaimer, release, or limitation of our
                responsibility to you will only apply to, and be enforced under,
                this Agreement to the extent authorized by law, including, where
                applicable, the Australian Consumer Law.
              </li>
              <li>
                Indemnity. You will not be obligated to indemnify Deal2Coupon
                under the section labelled &quot;Your Indemnification of
                Deal2Coupon&quot; to the extent that any claims and expenditures
                originate from Deal2Coupon, its officers, directors,
                shareholders, and employees&quot; carelessness or willful
                misconduct.
              </li>
              <li>
                Modification. If Deal2Coupon alters this Agreement, we will give
                you reasonable notice of the changes as soon as possible.
              </li>
              <li>
                Deal2Coupon coins is a product that is made by Deal2Coupon.
                Except in the case of fraud, any cancellation, modification, or
                restriction of any component of our Deal2Coupon Coins Rewards
                Program will take effect after we provide you with adequate
                notice, and will not be retroactive.
              </li>
              <li>
                Marketing and public relations. You consent to receiving, and
                our use and disclosure of your personal information in order to
                send you, sponsored links from advertisers, third-party offers,
                Deal2Coupon Offers, personalized links, or other electronic
                notifications that may be of interest to you, subject to your
                right to unsubscribe under &quot;Your Registration
                Information.&quot;
              </li>
              <li>
                Consent and notice of collection. You understand and agree that
                our Privacy Policy explains how and why we collect, use,
                disclose, and handle your personal information; how to access
                and correct your personal information; how to file a complaint
                about how your personal information is handled; and how we will
                handle any such complaint. We may not be able to give you access
                to elements of the Service if you do not furnish us with
                relevant personal information. You agree that your personal
                information may be shared with our connected businesses and
                other parties who assist us in providing our Service (subject to
                and in line with our privacy policy), including parties situated
                outside of Australia, such as the United States and the European
                Union.
              </li>
              <li>
                Jurisdiction. In relation to this agreement, you submit to the
                exclusive jurisdiction of the Australian Courts.
              </li>
            </ul>
            <br />
            <p className="fw-bold">New Zealand</p>
            <p>
              The following additional rules apply and form part of the
              Agreement if you access or use our Service in New Zealand. With
              respect to your access or use of our Service in New Zealand, the
              following supplemental terms shall apply if there is any conflict
              or disagreement between them and the requirements of the main body
              of the Agreement:
            </p>
            <ul>
              <li>
                Consumer regulations in New Zealand are being used. Nothing in
                this Agreement disclaims, excludes, prevents, or limits the
                applicability of mandatory provisions of New Zealand consumer
                law, such as the Consumer Guarantees Act 1993 or the Fair
                Trading Act 1986, and nothing in this Agreement is intended to
                do so. Any claims or warranties disclaimer, release, or
                restriction of our liability to you will only apply to, and be
                enforceable under, this Agreement to the extent authorised by
                law.
              </li>
              <li>
                Indemnity. You will not be obligated to indemnify Deal2Coupon
                under the section labelled &quot;Your Indemnification of
                Deal2Coupon&quot; to the extent that any claims and expenditures
                originate from Deal2Coupon, its officers, directors,
                shareholders, and employees negligence or other unlawful act or
                omission.
              </li>
              <li>
                Modification. If Deal2Coupon alters this Agreement, we will give
                you reasonable notice of the changes as soon as possible.
              </li>
              <li>
                Deal2Coupon Coins is a product that is made by Deal2Coupon.
                Except in the case of fraud, any cancellation, modification, or
                restriction of any component of our Deal2Coupon CoinsProgram
                will take effect after we provide you with adequate notice, and
                will not be retroactive.
              </li>
              <li>
                Commercial Electronic Messages: Where needed by law, we will get
                your approval to send you Electronic Notifications, Push
                Notifications, or emails about our own and/or third-party goods
                and services that may be of interest to you. We shall adhere to
                all applicable legal obligations in regards to the electronic
                messages we send you, and we will ensure that any text messages
                you receive are not billed to you unless you have expressly
                agreed to the associated fees and charges.
              </li>
              <li>
                Jurisdiction. In relation to this agreement, you submit to the
                exclusive jurisdiction of the New Zealand Courts.
              </li>
            </ul>
            <br />
            <p className="fw-bold">India</p>
            <p>
              The following additional rules apply and form part of the
              Agreement if you use or use our Service in India. With respect to
              your access or use of our Service in India, the following
              supplemental terms shall govern if there is any conflict or
              disagreement between them and the provisions of the main body of
              the Agreement:
            </p>
            <ul>
              <li>
                Arbitration and Governing Law The laws of India apply to this
                agreement. Any controversy, conflict, or dispute of any nature
                arising out of or relating to or in connection with this
                Agreement, including a dispute regarding the existence,
                validity, or termination of this Agreement, shall be settled
                finally by arbitration if you are a User based in India,
                notwithstanding anything contained in the Section titled
                &quot;Governing Law and Forum for Disputes.&quot; The
                arbitration will take place in Mumbai, and the hearings will be
                held in English. A single arbitrator will conduct the
                arbitration and reach a final decision, which will be mutually
                agreed in writing. The arbitrator will provide a reasoned
                conclusion or award, which will be final and binding, and will
                include the arbitration fees. Except as otherwise ordered by the
                arbitrator, each Party shall incur and pay its own costs,
                expenses, fees, disbursements, and other charges of its counsel
                in connection with the arbitration proceedings.
              </li>
              <li>
                You will not be able to withdraw the amount corresponding to
                Deal2Coupon coins rewards into your bank account, any payment
                instruments, or request a withdrawal in the form of cash, bank
                draught, or any other method under any circumstances. The sum
                corresponding to your Deal2Coupon coins rewards can only be used
                to buy gift cards from our partner institutions, which can then
                be used to buy qualifying items or services from those partners.
              </li>
              <li>
                Deal2Coupon does not issue, operate, or manage the gift cards
                purchased with Deal2Coupon coins rewards. They are issued by
                third-party merchants with whom we have an agreement.
                Deal2Coupon coin reward accumulation is always related to your
                purchases of goods and services from third-party merchants, as
                well as other identifiable acts like opening an account,
                updating account information, and so on. You will not be able to
                purchase Deal2Coupon coins rewards separately against payment of
                legal currency under any circumstances. To avoid misuse of this
                scheme, we retain the right to use reasonable technological and
                other techniques.Furthermore, you accept that Deal2Coupon&apos;s
                decision to take some steps, such as limiting access to your
                offer, may be based on confidential criteria that are necessary
                for our risk management, account security, compliance with
                applicable laws, and other Deal2Coupon system protection. You
                acknowledge that Deal2Coupon is under no duty to provide you
                with information about its risk management or security
                practices.
              </li>
            </ul>
            <br />
            <p className="fw-bold">Mexico</p>
            <p>
              The following additional rules apply and are included into the
              Agreement if you access or use our Service in Mexico. With respect
              to your access or use of our Service in Mexico, the following
              supplemental terms shall prevail if there is any conflict or
              disagreement between them and the requirements of the main body of
              the Agreement:
            </p>
            <ul>
              <li>
                Consumer Protection Laws in Mexico. Nothing in this Agreement
                disclaims, excludes, prevents, or limits the application of
                Mexican consumer laws, including any applicable statutory
                consumer guarantees and rights, or is intended to do so. Any
                claims or warranties disclaimer, release, or restriction of our
                liability to you will only apply to, and be enforceable under,
                this Agreement to the extent authorized by law.
              </li>
              <li>
                Jurisdiction and the law that governs it. The Agreement will be
                governed by and interpreted in line with Mexican federal laws if
                you live in Mexico. You agree to irrevocably submit to the
                jurisdiction of the courts located in Mexico City, with express
                waiver of any other court, however privileged, for the purpose
                of any suit, action, or other proceeding arising out of this
                Agreement or your use or access of our Services, unless the
                parties otherwise agree.
              </li>
              <li>
                Services that are available. The Deal2Coupon web browser
                extension and the Deal2Coupon coins Rewards will be the only
                services offered to Mexican residents. Deal2Coupon reserves the
                right to offer additional services or capabilities at any time.
              </li>
              <li>
                Electronic Commercial Messages We will follow all applicable
                regulations when sending you electronic messages and will get
                your approval where necessary before sending you electronic
                notifications, push messages, or emails regarding our own and/or
                third-party goods and services.
              </li>
              <li>
                Consent and notice of collection. Deal2Coupon&apos;s Privacy
                Policy describes why we collect, use, disclose, and handle your
                personal information, as well as how we share it with third
                parties. It describes how to exercise your rights, such as
                gaining access to and correcting your personal information, as
                well as how to file a complaint about how your personal
                information is handled and how we would treat any such
                complaint.
              </li>
            </ul>
            <br />
            <p className="fw-bold">Brazil</p>
            <p>
              The following additional rules apply and form part of the
              Agreement if you access or use our Service in Brazil. In the case
              of a disagreement or inconsistency between the provisions of the
              main body of the Agreement and the accompanying supplemental
              terms, the following supplemental terms will apply to your access
              or use of our Service in Brazil:
            </p>
            <ul>
              <li>
                The Brazilian Consumer Laws are being used. Nothing in this
                Agreement disclaims, excludes, prevents, or limits the
                implementation of Brazilian consumer laws, including any
                applicable statutory consumer guarantees and rights, or is
                intended to do so. Any claims or warranties disclaimer, release,
                or restriction of our liability to you will only apply to, and
                be enforceable under, this Agreement to the extent authorized by
                law.
              </li>
              <li>
                Jurisdiction and the law that governs it. If you live in Brazil,
                the Agreement shall be governed by and interpreted according to
                Brazilian law. Unless the parties agree otherwise, you
                irrevocably submit to the jurisdiction of the courts of the City
                of So Paulo, State of So Paulo, with express waiver of any other
                court, however privileged, for any suit, action, or other
                proceeding arising out of this Agreement or your use or access
                to our Services.
              </li>
              <li>
                Services that are available. Deal2Coupon&apos;s browser
                extension and Deal2Coupon coin Rewards will be the sole services
                offered to Brazilian residents. Deal2Coupon reserves the right
                to offer additional services or capabilities at any time.
              </li>
              <li>
                Electronic Commercial Messages We will follow all applicable
                regulations when sending you electronic messages and will get
                your approval where necessary before sending you electronic
                notifications, push messages, or emails regarding our own and/or
                third-party goods and services.
              </li>
              <li>
                Consent and notice of collection. Deal2Coupon&apos;s Privacy
                Policy describes why we collect, use, disclose, and handle your
                personal information, as well as how we share it with third
                parties. It describes how to exercise your rights, such as
                gaining access to and correcting your personal information, as
                well as how to file a complaint about how your personal
                information is handled and how we would treat any such
                complaint.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
