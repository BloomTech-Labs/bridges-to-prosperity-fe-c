import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
import {GraphPage} from '../Graph'
const StyledCard = styled(Card)`
  width: 90%;
  /* height: 27.5vh; */
  display: flex;
  flex-direction:column;
  margin: 10% 0 0 10%;
`;

const ImageBox = selectedBridge => {
  const props = selectedBridge.selectedBridge.properties
  const images = []
 
  return (
    <StyledCard>
     
      <GraphPage props={props} />

    </StyledCard>
  );
};

export default ImageBox;
