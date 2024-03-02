import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./menu";
import { MenuInterface, SubMenuInterface } from "../Data";

export const store = configureStore({
  reducer: { menu: MenuSlice.reducer },
});
export type RootState = {
  menu: {
    selectedCat: MenuInterface;
    menustate: MenuInterface[];
    selectedSub: SubMenuInterface;
    selectedSubItem: string;
    show: boolean;
    selectedItem: SubMenuInterface;
  };
};
