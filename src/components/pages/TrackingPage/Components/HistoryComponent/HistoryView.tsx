import React, { useEffect } from "react";

// Components
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import ClearHistoryButton from "./ClearHistoryButton";

// Redux
import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
import {
  setHistory,
  showTTHInfo,
} from "../../../../../redux/slicers/trackingSlicer";

const HistoryView = () => {
  const dispatch = useAppDispatch();
  const historyList = useAppSelector((state) => state.tracking.historyList);

  const handleListItemButton = (numberTTH: string) => {
    dispatch(showTTHInfo({ Documents: [{ DocumentNumber: numberTTH }] }));
  };

  useEffect(() => {
    const localStorageHistory: Array<string> = window.localStorage.getItem('history') !== null ? JSON.parse(window.localStorage.getItem('history') || '{}') : []
    dispatch(setHistory(localStorageHistory))
  }, [])

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      border={"1px solid red"}
      borderRadius={"10px"}
      padding={"10px"}
      overflow={"auto"}
      maxHeight={"400px"}
    >
      {historyList.length > 0 && <ClearHistoryButton />}
      <h3>Історія</h3>
      <List>
        {historyList.length > 0 && historyList.map((numberTTH: string) => (
          <ListItem key={numberTTH}>
            <ListItemButton
              component="a"
              href="#"
              onClick={() => handleListItemButton(numberTTH)}
            >
              <ListItemText primary={numberTTH} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HistoryView;
