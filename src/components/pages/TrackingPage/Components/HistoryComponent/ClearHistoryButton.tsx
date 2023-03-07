import React from "react";

// Components
import { Button } from "@mui/material";

// Redux
import { useAppDispatch } from "../../../../../redux/store";
import { setHistory } from "../../../../../redux/slicers/trackingSlicer";

const ClearHistoryButton = () => {
  const dispatch = useAppDispatch()

  return (
    <Button variant="contained" fullWidth={false} onClick={() => dispatch(setHistory([]))}>
      Clear the history
    </Button>
  );
};

export default ClearHistoryButton;
