import React, { useEffect } from "react";
import CenterCircle from "./assets/Center";
import { Test } from "./component/test";
import Side from "./assets/Side";
import SideBig from "./assets/SideBig";
import Menu from "./component/Menu";
import Category from "./component/Category";
import Submenu from "./component/Submenu";
import { data } from "./utils/Data";

function App() {
  return (
    <div className="w-full h-[100vh] items-center justify-center flex relative">
      <Submenu />
      <Menu />
      <Category />
    </div>
  );
}

export default App;
