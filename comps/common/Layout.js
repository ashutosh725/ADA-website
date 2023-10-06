import React from "react";
import { MainNav, Footer } from "comps";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full relative h-20 PagesMenu">
        <MainNav />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
