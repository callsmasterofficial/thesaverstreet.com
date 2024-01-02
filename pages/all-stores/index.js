import Footer from "../../components/shared/Footer";
import Stores from "../../components/AllStore/Stores";
import stores from "../../data/stores";

export async function getStaticProps() {
  return {
    props: {
      stores: stores.slice(0, 30),
    },
  };
}

export default function AllStores({ stores }) {
  return (
    <>
      <Stores stores={stores} />
      <Footer />
    </>
  );
}