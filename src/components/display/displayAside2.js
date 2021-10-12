import React from "react";
import styled from "styled-components";

const Texto = styled.p`
  font-size: 1rem;
  margin-top: 10%;
`;
const DisplayAside2 = ({ precipitaciones }) => {
  return (
    <div>
      <Texto>Precipitaciones : {precipitaciones}mm</Texto>
    </div>
  );
};

export default DisplayAside2;
