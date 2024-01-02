import React from "react";
import Footer from "../../components/shared/Footer";
import stores from "../../data/stores";
import { skimLinksDeals, skimLinksStore } from "../../lib/affiliate";
import SlugStore from "../../components/AllStore/SlugStore";
import Store from '../../models/store'
import Coupon from '../../models/coupon'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  try {
    const slug = context.params.slug;
    const store = stores.find((item) => item.slug === slug);
    const dbStore = await Store.findOne({slug});
    if (store) {
      const coupons = await skimLinksDeals({ storeId: store.id });
      const storeDetail = await skimLinksStore(store.id);
      const props = JSON.parse(JSON.stringify({ store: storeDetail, coupons }));
      return {
        props,
        revalidate: 86400,
      };
    }else if(dbStore){
      const newStore={
        metadata:{
          logo:dbStore.logo,
          special_conditions:dbStore.short_description
        },
        domain:dbStore.url.replace(/https?:\/\//g,''),
      };
      const coupons= await Coupon.find({store: dbStore._id, valid_till: { $gte: Date.now() } });
      return {
        props:JSON.parse(JSON.stringify({store:newStore, coupons}))
      }
    } else {
      return {
        props: {},
        notFound: true,
      };
    }
  } catch (err) {
 
    return {
      redirect: {
        destination: "/all-stores",
        permanent: false,
      },
    };
  }
}

export default function StoreCoupons({ coupons, store }) {
  return (
    <>
      <SlugStore coupons={coupons} store={store} />
      <Footer />
    </>
  );
}
