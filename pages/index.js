import {
  MainNav,
  Footer,
  HomeBanner,
  BdaService,
  DigitalMarketing,
  OnlineTraveAgency,
  Property,
  Ecommerce,
  VisaService,
  OurPartners,
} from "comps";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="ADA Corp Official Website"
        description="Innovative Solutions Creative Thinking Fresh and unique ideas that we are sharing with you are based on guaranteed market research results from ADA Corp"
      />
      <main>
        <MainNav />
        <HomeBanner />
        <BdaService />
        <DigitalMarketing />
        <OnlineTraveAgency />
        <Property />
        <Ecommerce />
        <VisaService />
        <OurPartners />
        <Footer />
      </main>
    </div>
  );
}
