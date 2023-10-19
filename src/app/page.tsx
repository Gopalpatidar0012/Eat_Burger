import Gallery from "@/components/Gallery";
import Offer from "@/components/Offer";
import Featured from "@/components/featured/Featured";
import Slider from "@/components/slider/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Slider />
      <Featured />
      <Offer />
      <Gallery />
    </>
  );
}
