import React from "react";
import logo from "../img/wind.svg";
import styled from "styled-components";

const Logo = styled.img`
  width: 40px;
`;
const Texto = styled.p`
  font-size: 1.2rem;
`;

const DisplayHeader = () => {
  return (
    <>
      <Logo src={logo}></Logo>
      <Texto>Ciudad</Texto>
      <Texto>País asd as asd asd </Texto>
    </>
  );
};

export default DisplayHeader;
