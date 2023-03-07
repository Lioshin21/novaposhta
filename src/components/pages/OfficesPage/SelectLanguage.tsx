import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { changeLanguage } from "../../../redux/slicers/officesSlicer";

const SelectLanguage = () => {
  const currentLanguage = useAppSelector(state => state.offices.language)
  const dispatch = useAppDispatch()

  return (
    <FormControl fullWidth={false}>
      <InputLabel id="demo-simple-select-label">Мова</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentLanguage}
        label="Age"
      >
        <MenuItem value={'UA'} onClick={()=> dispatch(changeLanguage('UA'))}>UA</MenuItem>
        <MenuItem value={'RU'} onClick={()=> dispatch(changeLanguage('RU'))}>RU</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectLanguage;
