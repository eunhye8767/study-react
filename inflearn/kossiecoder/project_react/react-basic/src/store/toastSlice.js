import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toasts: [],
};

export const toastSLice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    // 업데이트 해주는 함수
    
  },
});

export default toastSLice.reducer;
