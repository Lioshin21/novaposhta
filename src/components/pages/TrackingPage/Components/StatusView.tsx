import React from "react";
import { Grid } from "@mui/material";

const StatusView = () => {
  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      border={"1px solid red"}
      borderRadius={"10px"}
      padding={"10px"}
    >
      <h3>Статус відправлення: Одержано</h3>
      <span>
        <b>Відправлено:</b>
      </span>
      <span>Відділення № 1</span>
      <span>
        <b>Отримано:</b>
      </span>
      <span>Відділення № 1</span>
    </Grid>
  );
};

export default StatusView;
