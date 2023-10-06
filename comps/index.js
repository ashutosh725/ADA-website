import dynamic from "next/dynamic";

// Common Components
const Layout = dynamic(() => import("./common/Layout"));
const MainNav = dynamic(() => import("./common/header"));
const Footer = dynamic(() => import("./common/footer"));

// Home Components
const VisaService = dynamic(() => import("./home/visa"));
const Ecommerce = dynamic(() => import("./home/ecommerce"));
const Property = dynamic(() => import("./home/property"));
const OnlineTraveAgency = dynamic(() => import("./home/online-trave-agency"));
const DigitalMarketing = dynamic(() => import("./home/digital-marketing"));
const BdaService = dynamic(() => import("./home/bda-service"));
const HomeBanner = dynamic(() => import("./home/banner"));
const OurPartners = dynamic(() => import("./home/our-partners"));



export {
  Layout,
  MainNav,
  Footer,
  VisaService,
  Ecommerce,
  Property,
  OnlineTraveAgency,
  DigitalMarketing,
  BdaService,
  HomeBanner,
  
  OurPartners,
};
