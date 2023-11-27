// example
{
  /* <AnimateComponent className='relative flex aspect-[3/2]  h-80 w-full justify-center overflow-hidden sm:h-64'>
<LazyImage
  src={imageUrl || '/assets/images/Ai.png'}
  className='w-full rounded-xl bg-cover bg-no-repeat object-cover'
  alt='image'
  fill
/>
</AnimateComponent> */
}

("use client");
import { useState } from "react";
import Image from "next/image";

export interface LazyImageProps {
  src: string;
  fill: boolean;
  className: string;
  alt: string;
  animationCallback?: () => void;
  height?: number;
  width?: number;
}

const LazyImage = ({
  src,
  fill,
  className,
  alt,
  animationCallback,
  width,
  height,
}: LazyImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const onLoadCallback = () => {
    setIsImageLoaded(true);
  };

  return (
    <Image
      src={src}
      fill={fill}
      className={`${
        isImageLoaded ? "animate-fadeInAnimation" : "opacity-0"
      }  ${className}`}
      alt={alt}
      onLoad={onLoadCallback}
      onAnimationEnd={animationCallback}
      width={width}
      height={height}
    />
  );
};

export default LazyImage;
