import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toasts: [],
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    // 업데이트 해주는 함수
    addToast: (state, action) => {
      // state는 현 페이지 내 initialState 것을 뜻한다.
      state.toasts.push(action.payload);
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter(toast => {
        return toast.id !== action.payload
      })
    }
  },
});

export const { addToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
