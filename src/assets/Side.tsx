import React, { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuActions } from "../utils/redux/menu";
import { RootState } from "../utils/redux/store";
import { ItemMenuInterface, SubMenuInterface } from "../utils/Data";
import { useTrail, a, useInView, useTransition } from "react-spring";

export default function Side({
  className,
  submenu,
}: {
  className?: string;
  submenu: SubMenuInterface[];
}) {
  const dispatch = useDispatch();
  const svgitems = [
    <First submenu={submenu} dispatch={dispatch} />,
    <Second submenu={submenu} dispatch={dispatch} />,
    <Third submenu={submenu} dispatch={dispatch} />,
    <Fourth submenu={submenu} dispatch={dispatch} />,
  ];
  const [svgs, setsvgs] = useState<any[]>([]);
  const transition = useTransition(svgs, {
    config: { tension: 800, friction: 130, mass: 10 },
    trail: 100,
    delay: 100,
    from: { opacity: 0, scale: 0, rotate: 180 },
    enter: { opacity: 1, scale: 1, rotate: 0 },
    leave: { opacity: 0, scale: 0, rotate: -180 },
  });
  useEffect(() => {
    setsvgs(svgitems.slice(0, submenu.length));
  }, [submenu]);
  return (
    <a.svg
      className={className}
      width="554"
      height="554"
      viewBox="0 0 554 554"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {submenu !== undefined &&
        submenu.length !== 0 &&
        transition((style, item) => (
          <a.g style={{ ...style, transformOrigin: "center" }} fill="black">
            {item}
          </a.g>
        ))}
    </a.svg>
  );
}

const First = ({
  submenu,
  dispatch,
}: {
  submenu: SubMenuInterface[];
  dispatch: any;
}) => {
  const show = useSelector((state: RootState) => state.menu.selectedItem);
  return (
    <g className={`${submenu.length >= 1 ? "flex" : "hidden"}`}>
      {submenu[0] && (
        <>
          <mask id="path-3-inside-3_0_1" fill="white">
            <path d="M81.5448 472.635C133.406 524.497 203.746 553.632 277.089 553.632C350.433 553.633 420.772 524.497 472.634 472.636L277.09 277.09L81.5448 472.635Z" />
          </mask>
          <path
            className={` hover:fill-[#00A1DD] transform hover:scale-110 origin-bottom  ${
              show.submenu === submenu[0].submenu && "fill-[#3ac8fc]"
            }`}
            onClick={() => dispatch(MenuActions.selectsub(submenu[0]))}
            d="M81.5448 472.635C133.406 524.497 203.746 553.632 277.089 553.632C350.433 553.633 420.772 524.497 472.634 472.636L277.09 277.09L81.5448 472.635Z"
            fill="#D0D0D0"
            stroke="white"
            strokeWidth="20"
            mask="url(#path-3-inside-3_0_1)"
          />
        </>
      )}
    </g>
  );
};

const Second = ({
  submenu,
  dispatch,
}: {
  submenu: SubMenuInterface[];
  dispatch: any;
}) => {
  const show = useSelector((state: RootState) => state.menu.selectedItem);
  return (
    <g className={`${submenu.length >= 2 ? "flex" : "hidden"}`}>
      {submenu[1] && (
        <>
          <mask id="path-2-inside-2_0_1" fill="white">
            <path d="M81.5449 81.545C29.6832 133.407 0.547575 203.746 0.547449 277.09C0.54732 350.433 29.6828 420.773 81.5443 472.634L277.09 277.09L81.5449 81.545Z" />
          </mask>
          <path
            className={`hover:fill-[#00A1DD] transform hover:scale-110 origin-left ${
              show.submenu === submenu[1].submenu && "fill-[#3ac8fc]"
            }`}
            onClick={() => dispatch(MenuActions.selectsub(submenu[1]))}
            d="M81.5449 81.545C29.6832 133.407 0.547575 203.746 0.547449 277.09C0.54732 350.433 29.6828 420.773 81.5443 472.634L277.09 277.09L81.5449 81.545Z"
            fill="#D0D0D0"
            stroke="white"
            strokeWidth="20"
            mask="url(#path-2-inside-2_0_1)"
          />
        </>
      )}
    </g>
  );
};

const Third = ({
  submenu,
  dispatch,
}: {
  submenu: SubMenuInterface[];
  dispatch: any;
}) => {
  const show = useSelector((state: RootState) => state.menu.selectedItem);
  return (
    <g className={`${submenu.length >= 3 ? "flex" : "hidden"}`}>
      {submenu[2] && (
        <>
          <mask id="path-1-inside-1_0_1" fill="white">
            <path d="M472.635 81.545C420.773 29.6833 350.434 0.547723 277.09 0.547607C203.747 0.547487 133.407 29.6829 81.5455 81.5444L277.09 277.09L472.635 81.545Z" />
          </mask>
          <path
            className={`hover:fill-[#00A1DD] transform hover:scale-110 origin-top ${
              show.submenu === submenu[2].submenu && "fill-[#3ac8fc]"
            }`}
            onClick={() => dispatch(MenuActions.selectsub(submenu[2]))}
            d="M472.635 81.545C420.773 29.6833 350.434 0.547723 277.09 0.547607C203.747 0.547487 133.407 29.6829 81.5455 81.5444L277.09 277.09L472.635 81.545Z"
            fill="#D0D0D0"
            stroke="white"
            strokeWidth="20"
            mask="url(#path-1-inside-1_0_1)"
          />
        </>
      )}
    </g>
  );
};

const Fourth = ({
  submenu,
  dispatch,
}: {
  submenu: SubMenuInterface[];
  dispatch: any;
}) => {
  const show = useSelector((state: RootState) => state.menu.selectedItem);
  return (
    <g className={`${submenu.length === 4 ? "flex" : "hidden"}`}>
      {submenu[3] && (
        <>
          <mask id="path-4-inside-4_0_1" fill="white">
            <path d="M472.635 471.635C498.314 445.956 518.684 415.47 532.582 381.918C546.479 348.366 553.632 312.406 553.632 276.09C553.632 239.774 546.479 203.813 532.582 170.262C518.684 136.71 498.314 106.224 472.635 80.545L277.09 276.09L472.635 471.635Z" />
          </mask>
          <path
            className={`hover:fill-[#00A1DD]  transform hover:scale-110 origin-right ${
              show.submenu === submenu[3].submenu && "fill-[#3ac8fc]"
            }`}
            onClick={() => dispatch(MenuActions.selectsub(submenu[3]))}
            d="M472.635 471.635C498.314 445.956 518.684 415.47 532.582 381.918C546.479 348.366 553.632 312.406 553.632 276.09C553.632 239.774 546.479 203.813 532.582 170.262C518.684 136.71 498.314 106.224 472.635 80.545L277.09 276.09L472.635 471.635Z"
            fill="#D0D0D0"
            stroke="white"
            strokeWidth="20"
            mask="url(#path-4-inside-4_0_1)"
          />
        </>
      )}
    </g>
  );
};
