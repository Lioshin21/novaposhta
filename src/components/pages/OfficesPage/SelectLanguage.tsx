import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const SelectLanguage = () => {
  return (
    <FormControl fullWidth={false}>
      <InputLabel id="demo-simple-select-label">Мова</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={0}
        label="Age"
        // onChange={handleChange}
      >
        <MenuItem value={0}>UA</MenuItem>
        <MenuItem value={1}>RU</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectLanguage;
