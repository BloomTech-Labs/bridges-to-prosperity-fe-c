import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
// import RenderGraphPage from './RenderGraphPage';

import { GraphPage } from '../Graph';
const StyledCard = styled(Card)`
  width: 90%;
  /* height: 27.5vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 10% 0 0 10%;
`;

const ImageBox = selectedBridge => {
  console.log(selectedBridge.selectedBridge.properties.after_img, 'HERE');

  const props = selectedBridge.selectedBridge.properties;
  const images = [];

  return (
    <StyledCard>
      <img
        src={selectedBridge.selectedBridge.properties.after_img}
        style={{ width: 400, height: 200, position: 'center' }}
      />
      <img src={selectedBridge.selectedBridge.properties.before_img} />
      <GraphPage props={props} />
    </StyledCard>
  );
};

export default ImageBox;
// testing
