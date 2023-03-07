import { getNumberTTH } from './../../api/api';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MethodPropertiesTypes } from "../../api/api";
import { InfoTTHObjectType } from "../../types/types";


interface OfficesStateType {
  numberTTH: string,
  isFetching: boolean,
  infoTTH: InfoTTHObjectType | string,
}

const initialState: OfficesStateType = {
  numberTTH: '',
  isFetching: false,
  infoTTH: 'Введіть TTH для відображення інформації',
};

export const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    setNumberTTH: (state, action: PayloadAction<string> ) => {
      state.numberTTH = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(showTTHInfo.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(
      showTTHInfo.fulfilled,
      (state, action: PayloadAction<InfoTTHObjectType | string>) => {
        state.isFetching = false;
        state.infoTTH = action.payload;
        console.log(state.infoTTH)
      }
    );
  },
});

export const showTTHInfo = createAsyncThunk(
  "tracking/showTTHInfo",
  async (data: MethodPropertiesTypes) => {
    const infoTTH: InfoTTHObjectType | string = await getNumberTTH({
      ...data,
    }).then((response) => response);
    console.log(infoTTH)
    return infoTTH;
  }
);


export const { setNumberTTH } =
  trackingSlice.actions;

export default trackingSlice.reducer;
