import React from "react";
// Components
import SelectLang from "./SelectLanguage";
import InputCity from "./InputCity";
import ButtonSearch from "./ButtonSearch";
import { styled } from "@mui/material";
import OfficesList from "./OfficesList/OfficesList";

const OfficesPage = () => {

  const OfficesPageWrapper = styled('section')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    padding: 15,
  })

  const Title = styled('h1')({
    display: 'block',
    textAlign: 'center',
    color: 'red',
  })

  const Wrapper = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  })

  return (
    <OfficesPageWrapper>
      <Title>Список відділень</Title>
      <Wrapper>
        <InputCity />
        <SelectLang />
        <ButtonSearch />
      </Wrapper>
      <OfficesList />
    </OfficesPageWrapper>
  );
};

export default OfficesPage;
