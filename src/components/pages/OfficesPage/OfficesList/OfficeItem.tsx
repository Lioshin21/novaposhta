import React from "react";

// Components
import { styled, Typography } from "@mui/material";
import SelectForm from "./WorkingTime";

interface OfficeItemProps {
  officeName: string;
  workingTime: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
  maxWeight: string;
}

const OfficeItem: React.FC<OfficeItemProps> = ({
  officeName,
  workingTime,
  maxWeight,
}) => {
  return (
    <OfficeListWrapper sx={{ display: {  mobile: "none" } }}>
      <OfficeTitle>{officeName}</OfficeTitle>
      <AboutWrapper>
        <Typography>Working time</Typography>
        <SelectForm Schedule={workingTime} />
      </AboutWrapper>
      <AboutWrapper>
        <Typography>Max weight</Typography>
        <Typography>{maxWeight} kg</Typography>
      </AboutWrapper>
    </OfficeListWrapper>
  );
};

const OfficeListWrapper = styled("article")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexBasis: "30%",
  justifyContent: "space-between",
  gap: 15,
  boxSizing: "border-box",
  border: "3px solid red",
  borderRadius: 10,
  padding: 15,
  ":hover": {
    color: "white",
    backgroundColor: "red",
    border: "3px dotted white",
  },
  [theme.breakpoints.down("lg")]: {
    flexBasis: "40%",
  },
  [theme.breakpoints.down("sm")]: {
    flexBasis: "100%",
  },
}));

const OfficeTitle = styled("a")({
  margin: 0,
  fontSize: 20,
  cursor: "pointer",
  width: "fit-content",
});

const AboutWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: 30,
  fontWeight: "bold",
});

export default OfficeItem;
