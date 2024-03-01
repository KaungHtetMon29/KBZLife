import React, { useEffect } from "react";
import CenterCircle from "./assets/Center";
import { Test } from "./component/test";
import Side from "./assets/Side";
import SideBig from "./assets/SideBig";
import Menu from "./component/Menu";
import Category from "./component/Category";
import Submenu from "./component/Submenu";
import { data } from "./utils/Data";
import Moodle from "./component/moodle/Moodle";
import { useSelector } from "react-redux";

function App() {
  const show = useSelector((state: any) => state.menu.show);
  return (
    <div className="w-full h-[100vh] items-center justify-center flex relative">
      {show && <Moodle />}
      <Submenu />
      <Menu />
      <Category />
    </div>
  );
}

export default App;
