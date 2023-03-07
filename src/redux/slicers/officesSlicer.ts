import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getWarehouses, MethodPropertiesTypes } from "./../../api/api";
import { WarehouseType } from "../../types/types";

interface OfficesStateType {
  isFetching: boolean;
  language: string;
  cityName: string;
  warehouses: Array<WarehouseType> | string;
  currentPage: number;
  pages: number;
  limit: number;
}

const initialState: OfficesStateType = {
  isFetching: false,
  language: "UA",
  cityName: "",
  warehouses: "Немає доступних відділень",
  currentPage: 1,
  pages: 10,
  limit: 6,
};

export const officesSlice = createSlice({
  name: "offices",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    changeCityName: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(showWarehouses.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(
      showWarehouses.fulfilled,
      (state, action: PayloadAction<Array<WarehouseType> | string>) => {
        state.isFetching = false;
        state.warehouses = action.payload;
      }
    );
    builder.addCase(
      setPagesCount.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.pages = Math.ceil(action.payload / state.limit);
      }
    );
  },
});

export const showWarehouses = createAsyncThunk(
  "offices/showWarehouses",
  async (data: MethodPropertiesTypes) => {
    const warehousesArray: Array<WarehouseType> = await getWarehouses({
      ...data,
    }).then((response) => response);

    return warehousesArray;
  }
);

export const setPagesCount = createAsyncThunk(
  "offices/setPagesCount",
  async (data: MethodPropertiesTypes) => {
    const pagesCount: number = await getWarehouses({ ...data }).then(
      (response) => response.length
    );
    return pagesCount;
  }
);

export const { changeLanguage, changeCityName, setCurrentPage } =
  officesSlice.actions;

export default officesSlice.reducer;
