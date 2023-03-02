import React from "react";
import { FormControl, NativeSelect } from "@mui/material";
const SelectForm = () => {
  return (
    <FormControl>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: "age",
          id: "uncontrolled-native",
        }}
      >
        <option value={10}>Monday</option>
        <option value={20}>Tuesday</option>
        <option value={30}>Wednesday</option>
      </NativeSelect>
    </FormControl>
  );
};

export default SelectForm;
