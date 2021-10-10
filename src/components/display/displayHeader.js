import React, { useEffect } from "react";
import logo from "../img/wind.svg";
import styled from "styled-components";

const Logo = styled.img`
  width: 40px;
`;
const Texto = styled.p`
  font-size: 1rem;
  margin: 5px;
`;

const DisplayHeader = ({ city, country, region }) => {
  useEffect(() => {}, []);
  return (
    <>
      <Logo src={logo}></Logo>
      <Texto>{city}</Texto>
      <Texto>{region}</Texto>
      <Texto>{country}</Texto>
    </>
  );
};

export default DisplayHeader;
