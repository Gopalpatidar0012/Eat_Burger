import React from "react";
import CBApplicationHeadCard from "./CBApplicationHeadCard";
import { FeatureDataType } from "./Index";
import Typography, { TypographyVariant } from "../typography/Typography";

export interface CBApplicationHeadlessType {
  data: FeatureDataType[];
  isDarkBackground: boolean;
}

const CBApplicationHeadless = ({
  data,
  isDarkBackground,
}: CBApplicationHeadlessType) => {
  return (
    <div className="flex flex-col items-start gap-6">
      <Typography
        variant={TypographyVariant.H5}
        className={isDarkBackground ? "text-red" : ""}
      >
        Migrate your application to Headless
      </Typography>
      <div className="flex flex-col items-start justify-center gap-4 self-stretch">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-6">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index === 3 || index === 4
                  ? "col-span-2  w-full md:col-span-3"
                  : "col-span-2"
              }`}
            >
              <CBApplicationHeadCard
                title={item.title}
                isDarkBackground={isDarkBackground}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CBApplicationHeadless;
