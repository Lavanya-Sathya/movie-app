import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favoriteList",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const id = action.payload?.id;
      const isExist = state.items.findIndex((item) => item?.id === id);

      if (isExist === -1) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItem, clearItems } = favoriteSlice.actions;
export default favoriteSlice.reducer;
