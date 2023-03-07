import React, { useEffect } from "react";
import { Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { setCurrentPage, showWarehouses } from "../../../../redux/slicers/officesSlicer";

const PaginationList = () => {
  const cityName = useAppSelector((state) => state.offices.cityName);
  const language = useAppSelector((state) => state.offices.language);
  const limit = useAppSelector((state) => state.offices.limit);
  const currentPage = useAppSelector((state) => state.offices.currentPage);
  const pages = useAppSelector((state) => state.offices.pages)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showWarehouses({CityName: cityName, Language: language, Page: currentPage, Limit: limit}))
  }, [currentPage])

  return (
    <Pagination
      count={pages}
      page={currentPage}
      color="primary"
      onChange={(_, num) => dispatch(setCurrentPage(num))}
    />
  );
};

export default PaginationList;
