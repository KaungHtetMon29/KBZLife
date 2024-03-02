import React, { useEffect } from "react";
import CenterCircle from "./assets/Center";
import Side from "./assets/Side";
import SideBig from "./assets/SideBig";
import Menu from "./component/Menu";
import Category from "./component/Category";
import Submenu from "./component/Submenu";
import { data } from "./utils/Data";
import Moodle from "./component/moodle/Moodle";
import { useSelector } from "react-redux";
import { useSpring } from "react-spring";

function App() {
  const show = useSelector((state: any) => state.menu.show);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
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
