import React, { useEffect } from "react";
import SideBig from "../assets/SideBig";
import { useSelector } from "react-redux";
import { RootState } from "../utils/redux/store";
import { MenuInterface, SubMenuInterface } from "../utils/Data";

export default function Submenu() {
  // const [show, setShow] = React.useState<MenuInterface>();
  let test: any = [];
  const menustate = useSelector((state: RootState) => state.menu.menustate);
  const show = useSelector((state: RootState) => state.menu.selectedCat);
  const rotation = [60, 180, 300];
  useEffect(() => {
    console.log(show);
  }, [show]);
  return (
    <div className="absolute items-center flex justify-center">
      <SideBig item={show.submenus} />
      {Object.keys(show).length !== 0 &&
        show.submenus.map((i: SubMenuInterface, index: number) => (
          <div
            style={{ transform: `rotate(${rotation[index]}deg)` }}
            className={`absolute origin-bottom  w-full`}
          >
            <div
              className={`absolute transform origin-bottom items-center flex justify-center translate-x-[320px] w-full`}
            >
              <h2
                className={`absolute text-base font-semibold w-full rotate-[270deg] transform scale-x-[1] text-center`}
              >
                {i.submenu}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
}
