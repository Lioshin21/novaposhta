import { TextField } from "@mui/material";
import React from "react";
import { setNumberTTH } from "../../../../redux/slicers/trackingSlicer";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";

const InputTTH = () => {
  const dispatch = useAppDispatch();
  const numberTTH = useAppSelector((state) => state.tracking.numberTTH);
  return (
    <TextField
      id="outlined-basic"
      label="Введіть TTH"
      variant="outlined"
      type='number'
      value={numberTTH}
      fullWidth={false}
      onChange={(event) => dispatch(setNumberTTH(event.target.value))}
    />
  );
};

export default InputTTH;
