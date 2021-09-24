import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.img`
  width: 50px;
`;

const Displaybody = () => {
  return (
    <>
      <Flex>
        <Icon></Icon>
      </Flex>
    </>
  );
};

export default Displaybody;
