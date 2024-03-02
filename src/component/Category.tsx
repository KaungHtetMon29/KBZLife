import React, { useEffect } from "react";
import Side from "../assets/Side";
import { SubMenuInterface } from "../utils/Data";
import { useSelector } from "react-redux";

import { RootState } from "../utils/redux/store";
import { useTransition, a } from "react-spring";

export default function Category() {
  const submenu = useSelector(
    (state: RootState) => state.menu.selectedCat.submenus
  );
  const [show, setShow] = React.useState<SubMenuInterface[]>([]);

  useEffect(() => {
    if (submenu !== undefined) {
      setShow(submenu);
    }
  }, [submenu]);

  return (
    <div className="absolute justify-center flex items-center ">
      <Side className="absolute cursor-pointer" submenu={show} />
      <Label show={show} />
    </div>
  );
}

const Label = ({ show }: { show: SubMenuInterface[] }) => {
  const transition = useTransition(show, {
    trail: 400,
    expires: 10,
    delay: 600,
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });
  return (
    <>
      {transition((style, item, _, index) => (
        <a.div
          key={item.submenu}
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
    </>
  );
};
