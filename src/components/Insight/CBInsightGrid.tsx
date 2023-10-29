// ==============================================
// Filename: CBInsightGrid.tsx
// Type: Component
// Last Updated: Oct 27, 2023
// Project: cb-website - Front End
// ==============================================

import React from "react";

import CBInsightCard from "./CBInsightCard";
import { InsightGridDataType } from "@/interface/types";
const CBInsightGrid = ({ data }: { data: InsightGridDataType[] }) => {
  return (
    <div className="flex flex-wrap content-start justify-center  items-center  gap-[30px] self-stretch ">
      {data.map((item) => (
        <CBInsightCard
          key={item.id}
          date={item.date}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CBInsightGrid;
