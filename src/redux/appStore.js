import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import favoriteSlice from "./favoriteSlice";

const appStore = configureStore({
  reducer: {
    movie: movieReducer,
    favorite: favoriteSlice,
  },
});
export default appStore;
