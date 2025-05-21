import About from "@/components/home/about/index";
import Hero from "@/components/home/hero";
import TabsBodyCom from "@/components/home/tabsBody";
import HomeLocations from "@/components/home/homelocation";
import Solutions from "@/components/home/solutions";
import Blog from "@/components/home/blog";
import Whatsapp from "@/components/whatsapp";
import HomeCategories from "@/components/home/categories";
import HomeProducts from "@/components/home/products";
import HeroOuter from "@/components/home/hero-outer";
import BestSellerCom from "@/components/home/best-seller";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeCategories />
      <HeroOuter />
      <BestSellerCom />
      <HomeProducts />
      {/* <TabsBodyCom />
      <HomeLocations />
      <Solutions />
      <Blog /> */}
      <Whatsapp />
    </>
  );
}
