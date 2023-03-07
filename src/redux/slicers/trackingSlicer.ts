import { getNumberTTH } from "./../../api/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MethodPropertiesTypes } from "../../api/api";
import { InfoTTHObjectType } from "../../types/types";

interface OfficesStateType {
  numberTTH: string;
  isFetching: boolean;
  infoTTH: InfoTTHObjectType | string;
  historyList: Array<string>;
}

const initialState: OfficesStateType = {
  numberTTH: "",
  isFetching: false,
  infoTTH: "Введіть TTH для відображення інформації",
  historyList: [],
};

const setLocalStorageHistory = (history: Array<string>) =>
  window.localStorage.setItem("history", JSON.stringify(history));

export const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    setNumberTTH: (state, action: PayloadAction<string>) => {
      state.numberTTH = action.payload;
    },
    setHistory: (state, action: PayloadAction<string[]>) => {
      state.historyList = action.payload;
      setLocalStorageHistory(action.payload);
    },
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
        if (typeof action.payload !== "string") {
          const newNumber = action.payload.Number;
          const filterStoryList = state.historyList.filter(
            (element) => element !== newNumber
          );
          state.historyList = state.historyList.includes(action.payload.Number)
            ? [newNumber, ...filterStoryList]
            : [newNumber, ...state.historyList];
          setLocalStorageHistory(state.historyList);
        }
        state.numberTTH = "";
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

    return infoTTH;
  }
);

export const { setNumberTTH, setHistory } = trackingSlice.actions;

export default trackingSlice.reducer;
