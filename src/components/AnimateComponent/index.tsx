"use client";

import { useEffect, useRef, useState } from "react";
import useInViewport from "../../../hooks/useInViewport";

const AnimateComponent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const childRef = useRef<HTMLDivElement>(null);
  const [isFirstChange, setIsFirstChange] = useState<boolean>(false);
  const isVisible = useInViewport(childRef);

  // only change the when first visible in viewport
  useEffect(() => {
    if (isVisible && !isFirstChange) {
      setIsFirstChange(true);
    }
  }, [isVisible, isFirstChange]);

  return (
    <div
      ref={childRef}
      className={`${
        isFirstChange ? "animate-fadeInAnimation delay-500" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};
export default AnimateComponent;
