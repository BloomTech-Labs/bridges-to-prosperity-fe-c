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
  return (
    <StyledCard>
      {selectedBridge.selectedBridge ? (
        <p>{selectedBridge.selectedBridge.properties.bridge_image}</p>
      ) : (
        <p>no selected bridge</p>
      )}
    </StyledCard>
  );
};

export default ImageBox;
