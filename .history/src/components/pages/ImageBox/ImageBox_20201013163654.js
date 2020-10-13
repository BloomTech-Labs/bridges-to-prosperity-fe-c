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
      {/* {selectedBridge.selectedBridge ? (

    </StyledCard>
  );
};

export default ImageBox;
