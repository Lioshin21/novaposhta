import React from "react";

import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { showTTHInfo } from "../../../../redux/slicers/trackingSlicer";

const GetStatusButton = () => {
  const dispatch = useAppDispatch();
  const numberTTH = useAppSelector(state => state.tracking.numberTTH)

  return (
    <Button
      variant="contained"
      fullWidth={false}
      onClick={() =>
        dispatch(showTTHInfo({ Documents: [{ DocumentNumber: numberTTH}] }))
      }
    >
      Get status TTH
    </Button>
  );
};

export default GetStatusButton;
