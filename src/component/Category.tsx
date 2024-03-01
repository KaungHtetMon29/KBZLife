import React, { useEffect } from "react";
import Side from "../assets/Side";
import { MenuInterface, data } from "../utils/Data";
import { useSelector } from "react-redux";
import { MenuState } from "../utils/redux/menu";
import { RootState } from "../utils/redux/store";

export default function Category() {
  const categories = useSelector((state: RootState) =>
    state.menu.menustate.map((e: { category: string }) => e.category)
  );
  const [show, setShow] = React.useState(categories);
  useEffect(() => {
    console.log(categories);
  }, []);
  return (
    <div className="absolute justify-center flex items-center w-full">
      <Side className="absolute cursor-pointer" category={show} />
      {show.map((item, index) => (
        <div
          style={{
            transform: `${
              index % 2
                ? index > 2
                  ? "translateX(120px)"
                  : "translateX(-120px)"
                : index === 0
                ? "translateY(120px)"
                : "translateY(-120px)"
            } rotate(${index !== show.length - 1 ? index * 90 : 270}deg)`,
          }}
          className="w-full absolute origin-bottom items-center flex justify-center"
        >
          <h2
            style={{
              transform: `rotate(${
                index !== show.length - 1 ? -index * 90 : -270
              }deg)`,
            }}
            className="absolute top-20 text-base font-semibold w-fit"
          >
            {item}
          </h2>
        </div>
      ))}
    </div>
  );
}
