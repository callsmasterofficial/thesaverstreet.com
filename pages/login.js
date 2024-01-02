import Login from "../components/auth/Login";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title: "Login Deal2Coupon Account | Deal2Coupon",
        description: "",
        keywords: "",
        pageUrl: "https://www.thesaverstreet.com/login",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function login() {
  return <Login />;
}
