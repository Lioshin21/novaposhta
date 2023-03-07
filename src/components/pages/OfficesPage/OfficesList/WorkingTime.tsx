import React from "react";

// Components
import { FormControl, NativeSelect } from "@mui/material";

interface WorkingTimeProps {
  Schedule: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
}

const WorkingTime: React.FC<WorkingTimeProps> = ({ Schedule }) => {

  return (
    <FormControl>
      <NativeSelect
        defaultValue={0}
        inputProps={{
          name: "age",
          id: "uncontrolled-native",
        }}
      >
        {
        /*
        Stringify for create string from object. 
        .replace for delete unnecessary symbols in the string.
        .split create array from string. 
        */
        JSON.stringify(Schedule)
          .replace(/[^a-zа-яё0-9\s,:-]/gi, " ")
          .split(",")
          .map((el, index) => (
            <option value={index} key={index}>{el}</option>
          ))}
      </NativeSelect>
    </FormControl>
  );
};

export default WorkingTime;
