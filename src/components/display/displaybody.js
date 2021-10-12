import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2rem;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  width: 40%;
`;

const Displaybody = ({ img, condition, temp, feelslike }) => {
  return (
    <>
      <Flex>
        <Icon src={img}></Icon>
        <Title>{condition}</Title>
        <FlexRow>
          <p>Temperatura : </p>
          <h1>{temp}°</h1>
        </FlexRow>
        <FlexRow>
          <p>Sensación térmica : </p>
          <h1>{feelslike}°</h1>
        </FlexRow>
      </Flex>
    </>
  );
};

export default Displaybody;
