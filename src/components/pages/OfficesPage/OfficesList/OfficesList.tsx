import React from "react";
import SelectForm from "./SelectForm";
import { styled, Typography } from "@mui/material";

const OfficesList = () => {
  const OfficeListWrapper = styled("article")({
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    gap: 15,
    width: "100%",
    boxSizing: "border-box",
    border: "3px solid red",
    borderRadius: 10,
    padding: 15,
    ":hover": {
      color: "white",
      backgroundColor: "red",
      border: "3px dotted white",
    },
  });

  const OfficeTitle = styled("a")({
    margin: 0,
    fontSize: 20,
    cursor: "pointer",
    width: 'fit-content',
  });

  const AboutWrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    gap: 30,
    fontWeight: "bold",
  });

  return (
    <OfficeListWrapper>
      <OfficeTitle>Office #1</OfficeTitle>
        <AboutWrapper>
          <Typography>Working time</Typography>
          <SelectForm />
        </AboutWrapper>
        <AboutWrapper>
          <Typography>Max weight</Typography>
          <Typography>1000 kg</Typography>
        </AboutWrapper>
    </OfficeListWrapper>
  );
};

export default OfficesList;
