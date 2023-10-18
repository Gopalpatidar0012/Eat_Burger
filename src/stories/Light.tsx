import React from "react";

export interface LightProps {
  text: string;
}

const Light = ({ text }: LightProps) => {
  return (
    <div className="p-4 w-full flex gap-6 bg-green-500">
      <p className="">gopal</p>
      <div className="p-8 border rounded">{text}</div>
    </div>
  );
};

export default Light;
