import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface OfficesState {
  language: string,
}

const initialState: OfficesState = {
  language: 'UA',

}

export const officesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    },
  },
})

export const { changeLanguage } = officesSlice.actions

export default officesSlice.reducer