import CategoryCard from "@/components/CategoryCard";
import React from "react";

export const data = [
  {
    id: 1,
    title: "Multivitamins for women",
    buttonTitle: "Women",
    image: require("../../../public/stethoscope.jpg"),
  },
  {
    id: 2,
    title: "Multivitamins for men",
    buttonTitle: "Women",
    image: require("../../../public/medical-prescription.jpg"),
  },
  {
    id: 3,
    title: "Multivitamins for kids",
    buttonTitle: "Women",
    image: require("../../../public/colorful-pills-package.jpg"),
  },
  {
    id: 4,
    title: "Multivitamins for Age 50+",
    buttonTitle: "Women",
    image: require("../../../public/user.png"),
  },
  {
    id: 5,
    title: "Vegetarian",
    buttonTitle: "Women",
    image: require("../../../public/measuring-pulse.jpg"),
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
