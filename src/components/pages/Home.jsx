import React from "react";
import BottomHeader from "../Header/BottomHeader";
import Herosection from "../Home/Herosection";
import PoularProducts from "../Home/PoularProducts";
import BestSellerProducts from "../Home/BestSellerProducts";
import Layout from "../commen/Layout";

function Home() {
  return (
    <Layout>
      <BottomHeader />
      <Herosection />
      <PoularProducts />
      <BestSellerProducts />
    </Layout>
  );
}

export default Home;
