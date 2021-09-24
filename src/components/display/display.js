import React from "react";

import styled from "styled-components";
import DisplayBody from "./displaybody";
import DisplayHeader from "./displayHeader";

const Grid = styled.div`
  background-color: #eaebe0;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 3%;
  padding: 1%;
  width: 80%;
  height: 80%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 49% auto;
  grid-template-rows: 20% 30% 20% 30%;
  justify-content: space-evenly;
  align-content: space-around;
`;
const GridCard = styled.div`
  border: 2px solid #c9e4c5;
  border-radius: 10px;
  background-color: #b5cda3;
  color: #222;
`;
const GridHeader1 = styled(GridCard)`
  padding: 10px;
`;
const GridBody = styled(GridCard)`
  grid-column: 2;
  grid-row: 1 / span 2;
  padding: 10px;
`;
const GridHeader2 = styled(GridCard)`
  padding: 10px;
`;
const GridAside1 = styled(GridCard)`
  padding: 10px;
`;
const GridAside2 = styled(GridCard)`
  padding: 10px;
`;
const Display = ({ data }) => {
  return (
    <div>
      <Grid>
        <GridHeader1>
          <DisplayHeader></DisplayHeader>
        </GridHeader1>
        <GridBody>
          <p>hola</p>
        </GridBody>
        <GridHeader2>
          <p>gsdvas</p>
        </GridHeader2>
        <GridAside1>
          <p>vbadbasc</p>
        </GridAside1>
        <GridAside2>
          <p>badvasc</p>
        </GridAside2>
      </Grid>
    </div>
  );
};

export default Display;
