import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
// import RenderGraphPage from './RenderGraphPage';

const StyledCard = styled(Card)`
  width: 100%;
  height: 27.5vh;
  display: flex;
  margin: 10% 0 0 10%;
`;

const ImageBox = selectedBridge => {
  console.log(selectedBridge.selectedBridge.properties.after_img, 'HERE');
  return (
    <StyledCard>
      <img
        src={selectedBridge.selectedBridge.properties.after_img}
        // width="250"
        // height="200"
        style={{ width: 300, height: 200, position: 'center' }}
        // margin-left="100"
      />
      <img src={selectedBridge.selectedBridge.properties.before_img} />
      {/* {selectedBridge.selectedBridge ? (
        <p>{selectedBridge.selectedBridge.properties.after_img}</p>
      ) : (
        <p>no selected bridge</p>
      )} */}
    </StyledCard>
  );
};

export default ImageBox;
