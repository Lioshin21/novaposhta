import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface OfficesStateType {
  numberTTH: string,
}

const initialState: OfficesStateType = {
  numberTTH: '',
};

export const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    setNumberTTH: (state, action: PayloadAction<string> ) => {
      state.numberTTH = action.payload
      console.log(state.numberTTH)
    }
  },
});

export const { setNumberTTH } =
  trackingSlice.actions;

export default trackingSlice.reducer;
