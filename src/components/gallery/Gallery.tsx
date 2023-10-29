"use client";

import Image from "next/image";
import React from "react";
import Draggable from "react-draggable";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEye } from "@fortawesome/free-solid-svg-icons";
import InputComp from "../input/InputComp";

const Gallery = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
        <div className="grid gap-4">
          <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
        </div>
        <div className="grid gap-4">
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
        </div>
        <div className="grid gap-4">
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
        </div>
        <div className="grid gap-4">
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
        </div>
      </div>
      <FontAwesomeIcon icon={faEye} size="lg" />
      {/* Email Input with Icon */}
      <InputComp
        type="email"
        size="medium"
        placeholder="Email Input"
        icon={<FontAwesomeIcon icon={faEye} />}
        iconPosition="right"
        customClasses="w-1/2"
      />

      <Button
        variant="filled"
        size="medium"
        icon={<FontAwesomeIcon icon={faAdd} />}
        iconPosition="right"
      >
        Icon Right
      </Button>
      <Button
        variant="filled"
        size="medium"
        icon={<FontAwesomeIcon icon={faAdd} />}
        iconPosition="right"
      >
        Icon Right
      </Button>
    </div>
  );
};

export default Gallery;
