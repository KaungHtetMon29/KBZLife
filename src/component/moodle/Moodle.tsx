import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { MenuActions } from "../../utils/redux/menu";

export default function Moodle() {
  const categories = useSelector((state: RootState) =>
    state.menu.menustate.map((e: { category: string }) => e.category)
  );
  return (
    <div className="absolute z-[999] w-72 h-72 bg-white p-8 rounded-full shadow-lg border-8 border-[#00A1DD] flex items-center justify-center flex-col gap-8">
      {categories.map((item, index) => (
        <Items item={item} />
      ))}
    </div>
  );
}

export function Items({ item }: { item: string }) {
  const dispatch = useDispatch();
  return (
    <div
      className="text-lg font-semibold"
      onClick={() => {
        dispatch(MenuActions.selectCat({ category: item }));
        dispatch(MenuActions.menuswitch());
      }}
    >
      <h1>{item}</h1>
    </div>
  );
}
