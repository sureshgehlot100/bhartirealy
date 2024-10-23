import Image from "next/image";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import VirtualHome from "./component/VirtualHome";
import BuyHome from "./component/BuyHome";
import Property from "./component/Property";
import Testimonial from "./component/Testimonial";
import LandloardSumbmit from "./component/LandloardSumbmit";
import Footer from "./common/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <VirtualHome />
      <BuyHome />
      <Property />
      <Testimonial />
      <LandloardSumbmit />
      <Footer />
    </>
  );
}
