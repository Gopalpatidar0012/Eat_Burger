import { FeaturedProductsType, SliderDataType } from "./interface";

export const sliderData: SliderDataType[] = [
  {
    id: "1",
    title: "hello duniya",
    image: require("../public/food_images/slide1.png"),
  },
  {
    id: "2",
    title: "Always fresh & Always Crispy & Always hot",
    image: require("../public/food_images/slide2.png"),
  },
  {
    id: "3",
    title: "life is ready",
    image: require("../public/food_images/slide1.png"),
  },
];

export const featuredProducts: FeaturedProductsType[] = [
  {
    id: "1",
    title: "Burger",
    price: 10,
    description:
      " description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi tempora consequuntur ullam. Cum veniam pariatur sunt distinctio dolorem illo corrupti voluptas laudantium qui, necessitatibus maiores! Praesentium harum sit libero delectus.",
    img: require("../public/food_images/p5.png"),
    options: [
      {
        title: "small",
        additionalprice: "20",
      },
      {
        title: "medium",
        additionalprice: "200",
      },
      {
        title: "large",
        additionalprice: "400",
      },
    ],
  },
  {
    id: "2",
    title: "Burger",
    price: 10,
    description:
      " description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi tempora consequuntur ullam. Cum veniam pariatur sunt distinctio dolorem illo corrupti voluptas laudantium qui, necessitatibus maiores! Praesentium harum sit libero delectus.",
    img: require("../public/food_images/p1.png"),
    options: [
      {
        title: "small",
        additionalprice: "20",
      },
      {
        title: "medium",
        additionalprice: "200",
      },
      {
        title: "large",
        additionalprice: "400",
      },
    ],
  },
  {
    id: "3",
    title: "Burger",
    price: 10,
    description:
      " description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi tempora consequuntur ullam. Cum veniam pariatur sunt distinctio dolorem illo corrupti voluptas laudantium qui, necessitatibus maiores! Praesentium harum sit libero delectus.",
    img: require("../public/food_images/p2.png"),
    options: [
      {
        title: "small",
        additionalprice: "20",
      },
      {
        title: "medium",
        additionalprice: "200",
      },
      {
        title: "large",
        additionalprice: "400",
      },
    ],
  },
  {
    id: "4",
    title: "Burger",
    price: 10,
    description:
      " description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi tempora consequuntur ullam. Cum veniam pariatur sunt distinctio dolorem illo corrupti voluptas laudantium qui, necessitatibus maiores! Praesentium harum sit libero delectus.",
    img: require("../public/food_images/p3.png"),
    options: [
      {
        title: "small",
        additionalprice: "20",
      },
      {
        title: "medium",
        additionalprice: "200",
      },
      {
        title: "large",
        additionalprice: "400",
      },
    ],
  },
];
