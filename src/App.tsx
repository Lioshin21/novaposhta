import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Header from "./components/Header";
import { linkObjectType } from "./types/types";

const HeaderWrapper = styled("header")(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
  marginBottom: 20,
}));

function App() {

  const arrayOfLinks: Array<linkObjectType> = [
    { path: "/", title: "Перевірити статус відправлення" },
    { path: "/offices", title: "Список відділень" },
  ];

  return (
    <>
      <HeaderWrapper>
        <Header arrayOfLinks={arrayOfLinks}/>
      </HeaderWrapper>
      <Outlet />
    </>
  );
}

export default App;
