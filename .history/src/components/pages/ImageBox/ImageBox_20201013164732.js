import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 100%;
  height: 27.5vh;
  display: flex;
  margin: 10% 0 0 10%;
`;

const ImageBox = selectedBridge => {
  console.log(selectedBridge)
  const properties = selectedBridge.properties
  return (
    <StyledCard>
      {!selectedBridge ? 
        <p>select Map</p>
        :
        <p>party Map</p>
        }

    </StyledCard>
  );
};

export default ImageBox;
