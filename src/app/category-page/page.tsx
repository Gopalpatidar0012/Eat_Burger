import CategoryCard from "@/components/CategoryCard";
import React from "react";

export const data = [
  {
    id: 1,
    title: "Multivitamins for women",
    buttonTitle: "Women",
    image: require("../../../public/stethoscope.jpg"),
  },
];

const page = () => {
  return (
    <div className="flex flex-wrap">
      {data.map((item) => (
        <CategoryCard
          key={item.id}
          title={item.title}
          buttonTitle={item.buttonTitle}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default page;
