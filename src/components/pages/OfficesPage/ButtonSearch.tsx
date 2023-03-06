import React from "react";

// Components
import { Button } from "@mui/material";

// Redux
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setCurrentPage, setPagesCount, showWarehouses } from "../../../redux/slicers/officesSlicer";

const ButtonSearch = () => {
  const dispatch = useAppDispatch()
  const currentLanguage = useAppSelector(state => state.offices.language)
  const currentCity = useAppSelector(state => state.offices.cityName)
  const limit = useAppSelector(state => state.offices.limit)

  const handleClick = () => {
    dispatch(setPagesCount({CityName: currentCity, Language: currentLanguage}))
    dispatch(showWarehouses({CityName: currentCity, Language: currentLanguage, Limit: limit, Page: 1}))
    dispatch(setCurrentPage(1))
  }

  return (
    <Button variant="contained" fullWidth={false} onClick={handleClick}>
      View Offices
    </Button>
  );
};

export default ButtonSearch;
