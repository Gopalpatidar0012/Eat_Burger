import ProductCard from "@/components/product/ProductCard";
import React from "react";

export const data = [
  {
    id: 1,
    image: require("../../../public/copy-space.jpg"),
    description:
      "Revital H Men Multivitamin with Calcium, Zinc & Ginseng for Immunity, Strong Bones & Energy",
    quantityTitle: "bottle of 60 soft gelatin capsules",
    price: 500,
    offerPercentage: 34,
  },
  {
    id: 2,
    image: require("../../../public/stethoscope.jpg"),
    description: "Wireless Bluetooth Headphones with Noise Cancelling",
    quantityTitle: "headphones with built-in microphone",
    price: 149.99,
    offerPercentage: 15,
  },
  {
    id: 3,
    image: require("../../../public/medical-prescription.jpg"),
    description: "Samsung 55-inch 4K UHD Smart TV",
    quantityTitle: "television with HDR and Alexa compatibility",
    price: 899.99,
    offerPercentage: 10,
  },
  {
    id: 4,
    image: require("../../../public/colorful-pills-package.jpg"),
    description: "Apple iPhone 13 Pro Max",
    quantityTitle: "smartphone with triple-camera system",
    price: 1099.99,
    offerPercentage: 5,
  },
  {
    id: 5,
    image: require("../../../public/pills-beside.jpg"),
    description: "Dell XPS 13-inch Laptop",
    quantityTitle: "laptop with Intel Core i7 processor",
    price: 1299.99,
    offerPercentage: 8,
  },
];
const page = () => {
  return (
    <div className="p-8 gap-8 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          description={item.quantityTitle}
          quantityTitle={item.description}
          price={item.price}
          offerPercentage={item.offerPercentage}
        />
      ))}
    </div>
  );
};

export default page;
