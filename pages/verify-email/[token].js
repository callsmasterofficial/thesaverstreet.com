import { sign, verify } from "jsonwebtoken";
import Link from "next/link";
import User from "../../models/user";
import db from "../../config/db";
import { useEffect } from "react";

export async function getServerSideProps({ params: { token } }) {
  try {
    await db();
    const { _id: email } = await verify(token, process.env.TOKEN_KEY);
    const user = await User.findOneAndUpdate(
      { email, token },
      { token: "", isVerified: true }
    );
    if (user) {
      const userVerificationToken = await sign(
        { id: user._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: 600,
        }
      );
      return {
        props: {
          token: JSON.parse(JSON.stringify(userVerificationToken)),
        },
      };
    }
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  } catch (err) {
    return {
      props: { err: JSON.parse(JSON.stringify(err)) },
    };
  }
}
export default function index({ token, err }) {
  if (token) {
    useEffect(() => {
      localStorage.setItem("session", token);
    }, []);

    return (
      <div>
        <div className="d-flex justify-content-center align-items-center my-2 flex-column container p-5">
          <div>
            <div className="border p-5 d-inline-block">
              <h3 className="my-3">Thank You!</h3>
              <div>
                <p>you have been successfully registered in Deal2Coupon.</p>
              </div>
              <a href="/">
                <button type="button" className="btn btn-primary">
                  Go To HomePage
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>cannot verify</div>;
  }
}
