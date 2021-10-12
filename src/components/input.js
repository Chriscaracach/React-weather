import React from "react";
import styled from "styled-components";

const ContainerCenter = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Select = styled.select`
  margin-top: 1%;
  width: 40%;
  height: 40px;
`;
const Label = styled.label`
  margin-top: 3%;
`;

const Input = ({ cities, handleCitySelect, citySelect }) => {
  let map = cities.map((item, i) => {
    return <option key={i}>{item.name}</option>;
  });

  return (
    <div>
      <ContainerCenter>
        <Label htmlFor="ciudades">Seleccioná una ciudad</Label>
        <Select
          id="ciudades"
          onChange={handleCitySelect}
          defaultValue={citySelect}
        >
          {map}
        </Select>
      </ContainerCenter>
    </div>
  );
};

export default Input;
