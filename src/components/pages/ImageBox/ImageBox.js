import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  height: 27.5vh;
  display: flex;
  margin: 10% 0 0 10%;
`;

const ImageBox = selectedBridge => {
  return (
    <StyledCard>
      {selectedBridge.selectedBridge ? (
        <p>{selectedBridge.selectedBridge.properties.after_img}</p>
      ) : (
        <p>no selected bridge</p>
      )}
    </StyledCard>
  );
};

export default ImageBox;
