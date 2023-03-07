import React from "react";
import { Grid } from "@mui/material";
import { useAppSelector } from "../../../../redux/store";

const StatusView = () => {
  const infoTTH = useAppSelector((state) => state.tracking.infoTTH);

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      border={"1px solid red"}
      borderRadius={"10px"}
      padding={"10px"}
    >
      {typeof infoTTH === "string" ? (
        <h3>{infoTTH}</h3>
      ) : (
        <>
          <h3>Статус відправлення: {infoTTH.Status}</h3>
          <span>
            <b>Додаткова інформація: {infoTTH.AdditionalInformationEW}</b>
          </span>
          <span>
            <b>Відправлено:</b>
          </span>
          <span>{infoTTH.WarehouseSenderAddress}</span>
          <span>
            <b>Отримано:</b>
          </span>
          <span>{infoTTH.WarehouseRecipientAddress}</span>
        </>
      )}
    </Grid>
  );
};

export default StatusView;
