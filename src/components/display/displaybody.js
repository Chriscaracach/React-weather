import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  width: 25%;
`;

const Displaybody = ({ img, condition, temp, feelslike }) => {
  return (
    <>
      <Flex>
        <Icon src={img}></Icon>
        <h1>{condition}</h1>
        <FlexRow>
          <Flex>
            <h1>{temp}°</h1>
            <p>Temperatura</p>
          </Flex>
          <Flex>
            <h1>{feelslike}° ST</h1>
            <p>Sensación térmica</p>
          </Flex>
        </FlexRow>
      </Flex>
    </>
  );
};

export default Displaybody;
