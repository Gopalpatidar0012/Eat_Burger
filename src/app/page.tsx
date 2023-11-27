import CBInsightGrid from "@/components/Insight/CBInsightGrid";
import Client from "@/components/client/Client";
import Featured from "@/components/featured/Featured";
import Gallery from "@/components/gallery/Gallery";
import Offer from "@/components/offer/Offer";
import Slider from "@/components/slider/Slider";
import { InsightGridDataType } from "@/interface/types";

export default function Home() {
  const data: InsightGridDataType[] = [
    {
      id: "1",
      date: "2023-10-26",
      title: "Sample Title 1",
      image: "",
      description: "Maecenas volutpat, diam enim sagittis uam",
    },
    {
      id: "2",
      date: "April 28, 2016",
      title: "Lessons and insights from 8 years of Pixelgrade",
      image: "/assets/food_images/p9.png",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu",
    },
    {
      id: "3",
      date: "August 7, 2017",
      title:
        "Starting your traveling blog with Vasco sdjvrndkg grkjgj tjgr ttnrg t4k gr t gtgg oltk gjkt gkt g  tgl tg",
      image: "/assets/food_images/p9.png",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
    },
    {
      id: "4",
      date: "August 7, 2017",
      title: "Starting your traveling blog with Vasco",
      image: "/assets/food_images/p9.png",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
    },
    {
      id: "5",
      date: "August 7, 2017",
      title: "Starting your traveling blog with Vasco",
      image: "/assets/food_images/p9.png",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
    },
    {
      id: "6",
      date: "August 7, 2017",
      title: "Starting your traveling blog with Vasco",
      image: "/assets/food_images/p9.png",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to sdlcs ",
    },
  ];

  return (
    <>
      <Slider />
      <Featured />
      {/* <Offer /> */}
      <Gallery />
      {/* <CBInsightGrid data={data} /> */}
      {/* <Client /> */}
    </>
  );
}
