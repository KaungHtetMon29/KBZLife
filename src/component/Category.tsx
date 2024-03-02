import React, { useEffect } from "react";
import Side from "../assets/Side";
import { MenuInterface, SubMenuInterface, data } from "../utils/Data";
import { useSelector } from "react-redux";
import { MenuState } from "../utils/redux/menu";
import { RootState } from "../utils/redux/store";
import { useTransition, a } from "react-spring";

export default function Category() {
  const categories = useSelector((state: RootState) =>
    state.menu.menustate.map((e: { category: string }) => e.category)
  );
  const submenu = useSelector(
    (state: RootState) => state.menu.selectedCat.submenus
  );
  const [show, setShow] = React.useState<SubMenuInterface[]>([]);
  const transition = useTransition(submenu, {
    trail: 100,
    config: { mass: 1, tension: 500, friction: 18, duration: 1000 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, duration: 100 },
  });
  useEffect(() => {
    if (submenu !== undefined) setShow(submenu);
    console.log(show);
  }, [submenu]);
  return (
    <div className="absolute justify-center flex items-center ">
      <Side className="absolute cursor-pointer" submenu={show} />
      {transition((style, item, _, index) => (
        <a.div
          style={{
            ...style,
            transform: `${
              index % 2
                ? index > 2
                  ? "translateX(100px)"
                  : "translateX(-100px)"
                : index === 0
                ? "translateY(100px)"
                : "translateY(-100px)"
            } rotate(${index * 90}deg)`,
          }}
          className="absolute origin-bottom items-center flex justify-center w-full"
        >
          <h2
            style={{
              transform: `rotate(${-index * 90}deg)`,
            }}
            className="absolute top-20 text-base font-semibold w-fit"
          >
            {item.submenu}
          </h2>
        </a.div>
      ))}
      {/* {show.map((item, index) => (
        <div
          style={{
            transform: `${
              index % 2
                ? index > 2
                  ? "translateX(100px)"
                  : "translateX(-100px)"
                : index === 0
                ? "translateY(100px)"
                : "translateY(-100px)"
            } rotate(${index * 90}deg)`,
          }}
          className="absolute origin-bottom items-center flex justify-center w-full"
        >
          <h2
            style={{
              transform: `rotate(${-index * 90}deg)`,
            }}
            className="absolute top-20 text-base font-semibold w-fit"
          >
            {item.submenu}
          </h2>
        </div>
      ))} */}
    </div>
  );
}
