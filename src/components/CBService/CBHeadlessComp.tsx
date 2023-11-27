import React from "react";
import Image from "next/image";
import Typography, { TypographyVariant } from "../typography/Typography";
import { IconsType } from "./Index";
import MyIcon from "../MyIcon";
import Link from "next/link";

export interface CBHeadlessCompType {
  isDarkBackground: boolean;
  title: string;
  subTitle: string;
  description: string;
  icons: IconsType[];
}

const CBHeadlessComp = ({
  isDarkBackground,
  subTitle,
  title,
  description,
  icons,
}: CBHeadlessCompType) => {
  return (
    <div className="flex w-full flex-col items-center gap-16 md:flex-row md:items-start">
      <div className="flex w-full flex-col items-start justify-center gap-12">
        <div className="flex flex-col items-start gap-4">
          <Typography
            variant={TypographyVariant.H2}
            className={isDarkBackground ? "text-white" : ""}
          >
            {title}
          </Typography>
          <div className="flex gap-6">
            {icons.map((item) => (
              <Link href={item.url} key={item.id}>
                <MyIcon color="white" size={24} icon={item.name} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col gap-9 md:items-start">
          <Typography
            variant={TypographyVariant.H5}
            className={isDarkBackground ? "text-red" : ""}
          >
            {subTitle}
          </Typography>
          <Typography
            variant={TypographyVariant.P}
            className={isDarkBackground ? "text-lightGray" : ""}
          >
            {description}
          </Typography>
        </div>
      </div>
      <div className="flex flex-col">
        <Image
          src="/assets/Headlessimage.png"
          alt="image"
          className="bg-cover bg-no-repeat object-cover"
          width={418}
          height={352}
        />
      </div>
    </div>
  );
};

export default CBHeadlessComp;
