import React from "react";
import TopHeader from "../Header/TopHeader";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="w-full h-[60px] bg-[#1e28320d]">
      <TopHeader />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
