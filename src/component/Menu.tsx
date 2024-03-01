import React, { useEffect, useState } from "react";
import CenterCircle from "../assets/Center";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/redux/store";
import { MenuActions } from "../utils/redux/menu";

export default function Menu() {
  const dispatch = useDispatch();
  const cat = useSelector((state: RootState) => state.menu.selectedCat);
  const [selected, setselected] = useState("Menu");
  useEffect(() => {
    if (Object.keys(cat).length !== 0) {
      setselected(cat.category);
    }
  }, [cat]);
  return (
    <div
      className="absolute z-50 justify-center items-center flex "
      onClick={() => dispatch(MenuActions.menuswitch())}
    >
      <div className="absolute cursor-pointer">
        <h1 className="text-3xl font-semibold text-white">{selected}</h1>
      </div>
      <div className="w-fit border-[20px] border-white rounded-full cursor-pointer">
        <CenterCircle />
      </div>
    </div>
  );
}
