import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favoriteList",
  initialState: {
    items: [],
  },
  reducers: {
    // add or remove the items
    addItem: (state, action) => {
      const id = action.payload?.id;
      // check if the item is present in the list or not
      const isExist = state.items.findIndex((item) => item?.id === id);

      // if item is not present add
      // else remove from the list
      if (isExist === -1) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    // Clear all items
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItem, clearItems } = favoriteSlice.actions;
export default favoriteSlice.reducer;
