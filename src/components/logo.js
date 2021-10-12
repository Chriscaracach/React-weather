import React from "react";
import logo from "./img/wind.svg";
import styled from "styled-components";

const Img = styled.img`
  margin-top: 5%;
  height: 70px;
`;
const Title = styled.h1`
  color: #364f6b;
`;

const Logo = () => {
  return (
    <div>
      <Img src={logo}></Img>
      <Title>Weather</Title>
    </div>
  );
};

export default Logo;
