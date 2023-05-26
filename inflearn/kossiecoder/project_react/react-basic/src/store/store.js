import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./toastSlice";

export const store = configureStore({
  reducer: {
    // 사용할 이름 : 함수
    toast: toastReducer
  },
});
