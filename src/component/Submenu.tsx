import React, { useEffect, useState } from "react";
import SideBig from "../assets/SideBig";
import { useSelector } from "react-redux";
import { RootState } from "../utils/redux/store";
import { SubMenuInterface } from "../utils/Data";

import { useTransition, a } from "react-spring";

export default function Submenu() {
  const subitem = useSelector((state: RootState) => state.menu.selectedSubItem);
  const show = useSelector((state: RootState) => state.menu.selectedItem);

  const [HoverItem, setHoveredItem] = useState(null);

  return (
    <div className="absolute items-center flex justify-center group">
      {show.itemmenu && (
        <SideBig item={show.itemmenu} HoverItem={setHoveredItem} />
      )}
      <Label show={show} subitem={subitem} HoverItem={HoverItem} />
    </div>
  );
}

const Label = ({
  show,
  subitem,
  HoverItem,
}: {
  show: SubMenuInterface;
  subitem: string;
  HoverItem: any;
}) => {
  const rotation = [60, 180, 300];
  const transition = useTransition(show.itemmenu, {
    trail: 400,
    expires: 10,
    delay: 600,
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });
  return (
    <>
      {Object.keys(show).length !== 0 &&
        show.itemmenu !== null &&
        transition((style, item, _, index) => (
          <a.div
            style={{ ...style, transform: `rotate(${rotation[index]}deg)` }}
            className={`absolute origin-bottom `}
          >
            <div
              className={`absolute transform origin-bottom items-center flex justify-center translate-x-[320px] w-full`}
            >
              {item && (
                <h2
                  className={`absolute w-full ${
                    subitem === item?.item ? "text-[#005F9A]" : "text-black"
                  } text-base font-semibold w-fit rotate-[270deg] transform scale-x-[1] text-center ${
                    HoverItem === index ? "text-white" : "text-black"
                  }`}
                >
                  {item?.item}
                </h2>
              )}
            </div>
          </a.div>
        ))}
    </>
  );
};
