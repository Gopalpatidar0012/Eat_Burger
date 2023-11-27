import React from "react";
import Typography, { TypographyVariant } from "../typography/Typography";

export interface CBApplicationHeadCardType {
  isDarkBackground: boolean;
  title: string;
  description: string;
}
const CBApplicationHeadCard = ({
  isDarkBackground,
  title,
  description,
}: CBApplicationHeadCardType) => {
  return (
    <div className="flex w-full flex-grow flex-col items-start gap-4 bg-darkBackground p-4">
      <Typography
        variant={TypographyVariant.TITLE}
        className={isDarkBackground ? "text-white" : ""}
      >
        {title}
      </Typography>
      <Typography
        variant={TypographyVariant.P}
        className={isDarkBackground ? "text-lightGray" : ""}
      >
        {description}
      </Typography>
    </div>
  );
};

export default CBApplicationHeadCard;
