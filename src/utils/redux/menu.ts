import { createSlice } from "@reduxjs/toolkit";
import { data } from "../Data";

const MenuState = {
  menustate: data.menus,
  selectedCat: {},
  show: false,
  selectedItem: {},
  selectedSubItem: "",
};
const MenuSlice = createSlice({
  name: "menu",
  initialState: MenuState,
  reducers: {
    selectCat(state, action) {
      state.selectedCat = state.menustate.filter(
        (e) => e.category === action.payload.category
      )[0];
      state.selectedItem = {};
      state.selectedSubItem = "";
    },
    cancel(state) {
      state.selectedCat = {};
    },
    menuswitch(state) {
      state.show = !state.show;
    },
    selectsub(state, action) {
      state.selectedItem = action.payload;
    },
    selectsubitem(state, action) {
      state.selectedSubItem = action.payload;
    },
  },
});
export const MenuActions = MenuSlice.actions;
export type MenuState = typeof MenuState;
export default MenuSlice;
