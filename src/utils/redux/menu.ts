import { createSlice } from "@reduxjs/toolkit";
import { data } from "../Data";

const MenuState = { menustate: data.menus, selectedCat: {} };
const MenuSlice = createSlice({
  name: "menu",
  initialState: MenuState,
  reducers: {
    selectCat(state, action) {
      state.selectedCat = state.menustate.filter(
        (e) => e.category === action.payload
      )[0];
    },
  },
});
export const MenuActions = MenuSlice.actions;
export type MenuState = typeof MenuState;
export default MenuSlice;
