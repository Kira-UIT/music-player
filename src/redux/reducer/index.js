import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { musicSlice } from "./musicReducer";

// const rootReducer = () => {
//   return combineReducers({})
// }

const store = configureStore({
  reducer: {
    music: musicSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
