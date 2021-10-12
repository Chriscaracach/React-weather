import React from "react";
import styled from "styled-components";

const Texto = styled.p`
  font-size: 1rem;
  margin-bottom: 2%;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const DisplayAside1 = ({ humedad, nubosidad }) => {
  return (
    <div>
      <Texto>Humedad : %{humedad}</Texto>
      <Texto>Nubosidad : %{nubosidad}</Texto>
    </div>
  );
};

export default DisplayAside1;
