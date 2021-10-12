import React from "react";
import styled from "styled-components";

const Texto = styled.p`
  font-size: 1rem;
  margin-top: 10%;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const DisplayHeader2 = ({ direccionViento, velocidadViento, visibilidad }) => {
  return (
    <div>
      <Title>Viento</Title>
      <Texto>Dirección : {direccionViento}</Texto>
      <Texto>Velocidad : {velocidadViento} km/h</Texto>
      <Texto>Visibilidad : {visibilidad}km</Texto>
    </div>
  );
};

export default DisplayHeader2;
