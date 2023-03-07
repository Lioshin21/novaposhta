import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { linkObjectType } from "../types/types";

type HeaderProps = {
  arrayOfLinks: linkObjectType[]
}

const Header: React.FC<HeaderProps> = ({arrayOfLinks})  => {
  const currentLocation: string = useLocation().pathname;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {arrayOfLinks.map((el: linkObjectType) => {
        if (el.path === currentLocation) {
          return (
            <Typography color="text.primary" key={el.path}>
              {el.title}
            </Typography>
          );
        }
        return (
          <Link underline="hover" color="inherit" href={el.path} key={el.path}>
            {el.title}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Header;
