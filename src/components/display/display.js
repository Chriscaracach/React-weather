import React, { useEffect } from "react";

import styled from "styled-components";
import DisplayBody from "./displaybody";
import DisplayHeader from "./displayHeader";
import DisplayHeader2 from "./displayHeader2";
import DisplayAside1 from "./displayAside1";
import DisplayAside2 from "./displayAside2";

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
const Display = ({ data, searchCity }) => {
  useEffect(() => {
    console.log(data.current);
  }, []);

  const datos = data;

  return (
    <div>
      <Grid>
        <GridHeader1>
          <DisplayHeader
            city={datos.location.name}
            country={datos.location.country}
            region={datos.location.region}
            date={datos.location.localtime}
          ></DisplayHeader>
        </GridHeader1>
        <GridBody>
          <DisplayBody
            img={datos.current.condition.icon}
            condition={datos.current.condition.text}
            temp={datos.current.temp_c}
            feelslike={datos.current.feelslike_c}
          ></DisplayBody>
        </GridBody>
        <GridHeader2>
          <DisplayHeader2
            direccionViento={datos.current.wind_dir}
            velocidadViento={datos.current.wind_kph}
            visibilidad={datos.current.vis_km}
          ></DisplayHeader2>
        </GridHeader2>
        <GridAside1>
          <DisplayAside1
            humedad={datos.current.humidity}
            nubosidad={datos.current.cloud}
          ></DisplayAside1>
        </GridAside1>
        <GridAside2>
          <DisplayAside2
            precipitaciones={datos.current.precip_mm}
          ></DisplayAside2>
        </GridAside2>
      </Grid>
    </div>
  );
};

export default Display;
