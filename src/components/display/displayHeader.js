import React, { useEffect } from "react";
import logo from "../img/wind.svg";
import styled from "styled-components";

const Logo = styled.img`
  width: 59%;
  margin-top: 10%;
  margin-bottom: 20%;
`;
const Texto = styled.p`
  font-size: 1rem;
  margin-top: 10%;
`;

const DisplayHeader = ({ city, country, region, date }) => {
  useEffect(() => {}, []);
  return (
    <>
      <Logo src={logo}></Logo>
      <Texto>{city}</Texto>
      <Texto>{region}</Texto>
      <Texto>{country}</Texto>
      <Texto>{date}</Texto>
    </>
  );
};

export default DisplayHeader;
