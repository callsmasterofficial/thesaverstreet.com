import Register from "../components/auth/Register";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta: {
        title: "Register Deal2Coupon Account | Deal2Coupon",
        description: "",
        keywords: "",
        pageUrl: "https://www.thesaverstreet.com/register",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

export default function register() {
  return <Register />;
}
