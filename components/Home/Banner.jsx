import React from "react";

function Banner() {
  return (
    <div className="w-75 m-auto">
      <h1 className="text-center" style={{ fontSize: "24px"}}>
        {" "}
        Authentic Coupons & Deals to Shop your favourite Brands
      </h1>
      <div className="container my-5">
        <img
          className="img-fluid w-100"
          src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1647859910938-clipper-extension.jpeg"
          alt="Deal2Coupon extension"
        />
      </div>
    </div>
  );
}

export default Banner;
