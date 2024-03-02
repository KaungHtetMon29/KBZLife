import React, { Dispatch, SetStateAction } from "react";
import { ItemMenuInterface, SubMenuInterface } from "../utils/Data";

export default function SideBig({
  item = [],
  HoverItem,
}: {
  item: ItemMenuInterface[];
  HoverItem: any;
}) {
  return (
    <svg
      className="cursor-pointer"
      width="790"
      height="790"
      viewBox="0 0 790 790"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className={`${item.length >= 1 ? "flex" : "hidden"}`}
        onMouseEnter={() => HoverItem(0)}
        onMouseLeave={() => HoverItem(null)}
      >
        <mask id="path-1-inside-1_1_10627" fill="white">
          <path d="M161.297 713.446C221.894 757.918 293.923 784.176 368.924 789.138C443.925 794.1 518.785 777.56 584.713 741.459C650.641 705.358 704.901 651.196 741.119 585.333C777.338 519.469 794.012 444.639 789.184 369.629L395 395L161.297 713.446Z" />
        </mask>
        <path
          className="hover:fill-[#007c92] "
          onClick={() => console.log(`triggered-1`)}
          d="M161.297 713.446C221.894 757.918 293.923 784.176 368.924 789.138C443.925 794.1 518.785 777.56 584.713 741.459C650.641 705.358 704.901 651.196 741.119 585.333C777.338 519.469 794.012 444.639 789.184 369.629L395 395L161.297 713.446Z"
          fill="#D0D0D0"
          stroke="white"
          stroke-width="20"
          mask="url(#path-1-inside-1_1_10627)"
        />
      </g>
      <g
        className={`${item.length >= 2 ? "flex" : "hidden"}`}
        onMouseEnter={() => HoverItem(1)}
        onMouseLeave={() => HoverItem(null)}
      >
        <mask id="path-3-inside-2_1_10627" fill="white">
          <path d="M228.253 36.9211C166.625 65.6197 113.446 109.739 73.8626 165.009C34.2791 220.28 9.63061 284.831 2.3019 352.418C-5.0268 420.005 5.21234 488.34 32.0287 550.81C58.8451 613.281 101.331 667.773 155.376 709.015L395 395L228.253 36.9211Z" />
        </mask>
        <path
          className="hover:fill-[#007c92] "
          onClick={() => console.log(`triggered-2`)}
          d="M228.253 36.9211C166.625 65.6197 113.446 109.739 73.8626 165.009C34.2791 220.28 9.63061 284.831 2.3019 352.418C-5.0268 420.005 5.21234 488.34 32.0287 550.81C58.8451 613.281 101.331 667.773 155.376 709.015L395 395L228.253 36.9211Z"
          fill="#D0D0D0"
          stroke="white"
          stroke-width="14"
          mask="url(#path-3-inside-2_1_10627)"
        />
      </g>
      <g
        className={`${item.length === 3 ? "flex" : "hidden"}`}
        onMouseEnter={() => HoverItem(2)}
        onMouseLeave={() => HoverItem(null)}
      >
        <mask id="path-4-inside-3_1_10627" fill="white">
          <path d="M787.858 353.917C781.411 292.271 760.547 233.006 726.954 180.917C693.36 128.827 647.98 85.3745 594.482 54.0721C540.984 22.7697 480.871 4.49648 419.003 0.729972C357.135 -3.03654 295.249 7.80943 238.349 32.3908L395 395L787.858 353.917Z" />
        </mask>
        <path
          className="hover:fill-[#007c92] "
          onClick={() => console.log(`triggered-3`)}
          d="M787.858 353.917C781.411 292.271 760.547 233.006 726.954 180.917C693.36 128.827 647.98 85.3745 594.482 54.0721C540.984 22.7697 480.871 4.49648 419.003 0.729972C357.135 -3.03654 295.249 7.80943 238.349 32.3908L395 395L787.858 353.917Z"
          fill="#D0D0D0"
          stroke="white"
          stroke-width="14"
          mask="url(#path-4-inside-3_1_10627)"
        />
      </g>
    </svg>
  );
}
