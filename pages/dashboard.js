import Footer from "../components/shared/Footer";
import React from "react";
import LeftBar from "../components/Dashboard/LeftBar";
import RightBar from "../components/Dashboard/RightBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: "Dashboard | Manage Deal2Coupon Account | Deal2Coupon",
        description: "",
        keywords: "",
        pageUrl: "https://www.thesaverstreet.com/dashboard",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function DashBoard() {
  const [activeTab, setActiveTab] = useState(0);
  const [user, setUser] = useState(null);
  const history = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("session");
    if (!token) {
      history.push("/login");
    } else {
      axios
        .post("/api/user/verify-token", { token })
        .then((response) => {
          setUser(response?.data.user);
        })
        .catch(error);
    }
  }, []);
  return (
    <>
      <section className="user-panel-body py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-sm-4">
              <LeftBar setActiveTab={setActiveTab} user={user} />
            </div>
            <div className="col-xl-9 col-sm-8">
              <RightBar activeTab={activeTab} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
