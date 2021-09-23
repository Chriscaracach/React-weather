import React from "react";
import logo from "./img/wind.svg";
import styled from "styled-components";

const Grid = styled.div`
  margin: 0 auto;
  margin-top: 3%;
  width: 80%;
  height: 80%;
  display: inline-grid;
  grid-gap: 10px;
  border: 1px solid black;
`;
const Logo = styled.img`
  height: 40px;
`;

const Display = () => {
  return (
    <div>
      <Grid>
        <Logo src={logo} alt=""></Logo>
      </Grid>
    </div>
  );
};

export default Display;
