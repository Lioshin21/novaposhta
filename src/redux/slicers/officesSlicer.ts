import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface OfficesState {
  language: string,
  cityName: string,
}

const initialState: OfficesState = {
  language: 'UA',
  cityName: '',
}

export const officesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    },
    changeCityName: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload
    }
  },
})

export const { changeLanguage, changeCityName } = officesSlice.actions

export default officesSlice.reducer