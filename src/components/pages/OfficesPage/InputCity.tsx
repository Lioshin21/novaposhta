import React from "react";
import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { changeCityName } from "../../../redux/slicers/officesSlicer";

const InputCity = () => {
  const dispatch = useAppDispatch();
  const cityName = useAppSelector(state => state.offices.cityName)
  return (
    <TextField
      id="outlined-basic"
      label="Введіть назву міста"
      variant="outlined"
      value={cityName}
      fullWidth={false}
      onChange={(event) => dispatch(changeCityName(event.target.value))}
    />
  );
};

export default InputCity;
