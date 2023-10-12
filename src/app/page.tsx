import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/slider/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Slider />
      <Featured />
      <Offer />
    </>
  );
}
