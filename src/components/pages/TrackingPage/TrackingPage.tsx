import React from "react";

import { Grid } from "@mui/material";
import GetStatusButton from "./Components/GetStatusButton";
import HistoryView from "./Components/HistoryComponent/HistoryView";
import InputTTH from "./Components/InputTTH";
import StatusView from "./Components/StatusView";

const TrackingPage = () => {
  return (
    <Grid display={"flex"} flexDirection={'column'} alignItems={'center'} gap={"30px"} padding={'10px'}>
      <Grid display={"flex"} justifyContent={"center"} gap={"30px"} flexWrap={'wrap'}>
        <InputTTH />
        <GetStatusButton />
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} gap={"30px"} flexWrap={'wrap'}>
        <StatusView />
        <HistoryView />
      </Grid>
    </Grid>
  );
};

export default TrackingPage;
