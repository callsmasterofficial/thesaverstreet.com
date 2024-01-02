import { React, useState } from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../cardflip/cardFlip";
export default function Slider({ stores, trendingDeals }) {
  const [trendingDealsArr] = useState(
    Object.values(trendingDeals).map((item) => JSON.parse(item))
  );

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-12 col-sm-12 mb-2"
            style={{ padding: "0", marginTop: "20px" }}
          >
            <Carousel
              className="carousel"
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={2000}
              swipeable={true}
              emulateTouch={true}
            >
              {/* {trendingDealsArr.map((item) => (
                <div onClick={() => window.open(item.link)}>
                  <img src={item.bg_image} loading="lazy" alt="" />
                </div>
              ))} */}
              <div
                onClick={() =>
                  window.open(
                    `https://super-dashboard-images-cdn.s3.amazonaws.com/images/1654692138332-walmart-banner.jpeg`
                  )
                }
              >
                <img
                  src={
                    "https://super-dashboard-images-cdn.s3.amazonaws.com/images/1654692138332-walmart-banner.jpeg"
                  }
                  loading="lazy"
                  alt="amazonaws"
                />
              </div>
              <div
                onClick={() =>
                  window.open(
                    `https://super-dashboard-images-cdn.s3.amazonaws.com/images/1654692138332-walmart-banner.jpeg`
                  )
                }
              >
                <img
                  src={
                    "https://super-dashboard-images-cdn.s3.amazonaws.com/images/1654692138332-walmart-banner.jpeg"
                  }
                  loading="lazy"
                  alt="amazonaws"
                />
              </div>
              <div
                onClick={() =>
                  window.open(
                    `https://super-dashboard-images-cdn.s3.amazonaws.com/images/1654692138332-walmart-banner.jpeg`
                  )
                }
              >
                <img
                  src={
                    "https://super-dashboard-images-cdn.s3.amazonaws.com/images/1654692138332-walmart-banner.jpeg"
                  }
                  loading="lazy"
                  alt="amazonaws"
                />
              </div>
            </Carousel>
            {/* <img src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1650276511803-The Saver Streetbanner1.jpeg" /> */}
          </div>
          <div className="col-lg-3 d-lg-block d-md-none d-none d-sm-none">
            <Card />
          </div>

          {/* </div> */}

          <div id="commission-msg" style={{ color: "black", marginTop: "5px" }}>
            Some links on this site may be affiliate links, meaning we could
            earn a affiliate commission at no extra cost to you.{" "}
            <Link href="/affiliate-disclosure">Read More…</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
