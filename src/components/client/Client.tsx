import React from "react";
import Image from "next/image";

const Client = () => {
  const imageData = [
    {
      id: "1",
      image: "/assets/user.png",
      title: "hello world",
      description: "MullenLowe Lintas Group  Android app and website",
    },
    {
      id: "2",
      image: "/assets/user.png",
      title: "hello world",
      description: "MullenLowe Lintas Group  Android app and website",
    },
    {
      id: "3",
      image: "/assets/user.png",
      title: "hello world",
      description: "MullenLowe Lintas Group  Android app and website",
    },
    {
      id: "4",
      image: "/assets/user.png",
      title: "hello world",
      description: "MullenLowe Lintas Group  Android app and website",
    },
    {
      id: "5",
      image: "/assets/user.png",
      title: "hello world",
      description: "MullenLowe Lintas Group  Android app and website",
    },
    {
      id: "6",
      image: "/assets/user.png",
      title: "hello world",
      description: "MullenLowe Lintas Group  Android app and website",
    },
  ];

  return (
    <div>
      {imageData.map((item) => (
        <div key={item.id}>
          <Image src={item.image} alt="image" width={100} height={100} />
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Client;
