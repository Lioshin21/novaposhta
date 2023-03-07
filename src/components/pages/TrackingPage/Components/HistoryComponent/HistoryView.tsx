import React from "react";

import { Grid, List, ListItem, ListItemText } from "@mui/material";
import ClearHistoryButton from "./ClearHistoryButton";

const HistoryView = () => {
  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      border={"1px solid red"}
      borderRadius={"10px"}
      padding={"10px"}
    >
      <ClearHistoryButton />
      <h3>Історія</h3>
      <List>
        <ListItem>
          <ListItemText primary="123" />
        </ListItem>
        <ListItem>
          <ListItemText primary="123" />
        </ListItem>
      </List>
    </Grid>
  );
};

export default HistoryView;
