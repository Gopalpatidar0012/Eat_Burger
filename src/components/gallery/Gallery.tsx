"use client";

import Image from "next/image";
import React from "react";
import Draggable from "react-draggable";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
        <div className="grid gap-4">
          <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../public/food_images/slide3.jpg")}
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
                src={require("../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../public/food_images/slide3.jpg")}
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
                src={require("../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../public/food_images/slide3.jpg")}
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
                src={require("../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
          <Draggable>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={require("../../public/food_images/slide3.jpg")}
                alt=""
              />
            </div>
          </Draggable>
        </div>
      </div>
      <Button variant="outline" size="small">
        Outline Small
      </Button>
      <Button variant="outline" size="medium">
        Outline Medium
      </Button>
      <Button variant="outline" size="large">
        Outline Large
      </Button>

      {/* Filled Buttons */}
      <Button variant="filled" size="small">
        Filled Small
      </Button>
      <Button variant="filled" size="medium">
        Filled Medium
      </Button>
      <Button variant="filled" size="large">
        Filled Large
      </Button>

      {/* Text Buttons */}
      <Button variant="text" size="small">
        Text Small
      </Button>
      <Button variant="text" size="medium">
        Text Medium
      </Button>
      <Button variant="text" size="large">
        Text Large
      </Button>

      {/* Buttons with Icon (icon on the left) */}
      <Button
        variant="filled"
        size="medium"
        icon={<FontAwesomeIcon icon={faAdd} />}
        iconPosition="left"
      >
        Icon Left
      </Button>
      <Button
        variant="filled"
        size="medium"
        icon={<FontAwesomeIcon icon={faAdd} />}
        iconPosition="left"
      >
        Icon Left
      </Button>

      {/* Buttons with Icon (icon on the right) */}
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
