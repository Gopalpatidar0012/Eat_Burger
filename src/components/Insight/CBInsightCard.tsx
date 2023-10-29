// ==============================================
// Filename: CBInsightCard.tsx
// Type: Component
// Last Updated: Oct 27, 2023
// Project: cb-website - Front End
// ==============================================

import Image from "next/image";
import React from "react";
import placeholderImage from "../../../public/png.png";
import { InsightCardType } from "@/interface/types";
import Typography, { TypographyVariant } from "../typography/Typography";

const CBInsightCard = ({
  date,
  title,
  description,
  image,
}: InsightCardType) => {
  return (
    <div className="flex w-full max-w-[360px] flex-col items-start gap-6">
      <div className="flex aspect-[3/2] w-full justify-center">
        <Image
          src={image || placeholderImage}
          className="max-h-[240px] w-full rounded-xl bg-no-repeat object-cover"
          alt="image"
          layout="responsive"
        />
      </div>
      <div className="flex flex-col items-start gap-3.5 self-stretch">
        <div className="flex flex-col items-start gap-2 self-stretch">
          {date ? (
            <Typography variant={TypographyVariant.LABEL} color="#A3A6A8">
              {date}
            </Typography>
          ) : null}
          <Typography
            variant={TypographyVariant.H6}
            color="#323336"
            className="line-clamp-2"
          >
            {title}
          </Typography>
        </div>
        <div className="line-clamp-1 flex flex-col justify-center self-stretch">
          <Typography
            variant={TypographyVariant.P}
            color="#6B6D6F"
            className="line-clamp-2"
          >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CBInsightCard;
