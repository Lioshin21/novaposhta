import React from "react";

// Components
import { styled } from "@mui/material";
import OfficeItem from "./OfficeItem";
import PaginationList from "./PaginationList";

// Redux
import { useAppSelector } from "../../../../redux/store";

// Types
import { WarehouseType } from "../../../../types/types";

const OfficesList = () => {
  const offices = useAppSelector((state) => state.offices.warehouses);

  return (
    <>
      {typeof offices === "string" ? (
        <span>{offices}</span>
      ) : (
        <>
          <OfficesListWrapper>
            {offices.map((office: WarehouseType) => {
              return (
                <OfficeItem
                  officeName={office.Description}
                  workingTime={office.Schedule}
                  maxWeight={
                    office.TotalMaxWeightAllowed === '0'
                      ? office.PlaceMaxWeightAllowed
                      : office.TotalMaxWeightAllowed
                  }
                  key={office.SiteKey}
                />
              );
            })}
          </OfficesListWrapper>
          <PaginationList />
        </>
      )}
    </>
  );
};

const OfficesListWrapper = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "15px",
});

export default OfficesList;
