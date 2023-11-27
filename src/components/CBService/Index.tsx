import React from "react";
import CBHeadlessComp from "./CBHeadlessComp";
import CBApplicationHeadless from "./CBApplicationHeadless";

export interface FeatureDataType {
  id: string;
  title: string;
  description: string;
}

export interface IconsType {
  id: string;
  name: string;
  url: string;
}
export interface ServiceDataType {
  featureData: FeatureDataType[];
  icons: IconsType[];
}
const data: ServiceDataType = {
  featureData: [
    {
      id: "1",
      title: "Multi-Channel Deployment",
      description:
        " Content and services can be deployed across web applications,mobile apps, and connected devices, reaching a diverse audience",
    },
    {
      id: "2",
      title: "Multi-Channel Deployment",
      description:
        " Content and services can be deployed across web applications,mobile apps, and connected devices, reaching a diverse audience",
    },
    {
      id: "3",
      title: "Multi-Channel Deployment",
      description:
        " Content and services can be deployed across web applications,mobile apps, and connected devices, reaching a diverse audience",
    },
    {
      id: "4",
      title: "Multi-Channel Deployment",
      description:
        " Content and services can be deployed across web applications,mobile apps, and connected devices, reaching a diverse audience",
    },
    {
      id: "5",
      title: "Multi-Channel Deployment",
      description:
        " Content and services can be deployed across web applications,mobile apps, and connected devices, reaching a diverse audience",
    },
  ],
  icons: [
    { id: "1", name: "shopify", url: "/shopify" },
    { id: "2", name: "sanity", url: "/sanity" },
    { id: "3", name: "contentful", url: "/contentful" },
    { id: "4", name: "iconcs", url: "/iconcs" },
    { id: "5", name: "strapi", url: "/strapi" },
  ],
};

const CBService = () => {
  return (
    <div className="flex h-full w-full flex-col gap-16 bg-blackDark px-4 py-8 md:px-24 md:py-16 ">
      {/* first */}
      <CBHeadlessComp
        icons={data.icons}
        isDarkBackground
        title="Headless Development"
        subTitle=" What is headless development?"
        description="Headless development is a strategic approach to building pluggable
            and highly manageable backends and content systems, seamlessly
            integrable with a diverse range of frontends. This methodology
            empowers you to deploy multiple frontends — be it mobile apps, web
            apps, connected devices, and more — on the same backend
            independently. By decoupling the frontend presentation layer from
            the backend logic, headless development provides unparalleled
            flexibility, enabling swift adaptation to emerging technologies and
            ensuring a future-ready architecture. Embrace the freedom to
            innovate and scale your digital ecosystem with the versatility of
            headless development."
      />
      {/* second div */}
      <CBApplicationHeadless data={data.featureData} isDarkBackground />
    </div>
  );
};

export default CBService;
