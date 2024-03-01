import React from "react";
import CenterCircle from "../assets/Center";

export default function Menu() {
  return (
    <div className="absolute z-50 justify-center items-center flex ">
      <div className="absolute">
        <h1 className="text-3xl font-semibold text-white">Menu</h1>
      </div>
      <div className="w-fit border-[20px] border-white rounded-full cursor-pointer">
        <CenterCircle />
      </div>
    </div>
  );
}
