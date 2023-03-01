import React from "react";
import { Typography, Breadcrumbs, Link, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

const Header = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
  marginBottom: 20,
}));

function App() {
  return (
    <>
      <Header>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Tracking Page
          </Link>
          <Link underline="hover" color="inherit" href="/offices">
            Offices
          </Link>
        </Breadcrumbs>
      </Header>
      <Outlet />
    </>
  );
}

export default App;
