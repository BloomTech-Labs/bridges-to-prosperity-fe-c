import React from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';

import { GraphPage } from '../Graph';
const StyledCard = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = selectedBridge => {
  const images = [];

  return (
    <StyledCard elevation={15} style={{ backgroundColor: '#D6D1CA' }}>
      {selectedBridge.selectedBridge ? (
        <div>
          <ImageDiv>
            {selectedBridge.selectedBridge.properties.after_img ? (
              <img src={selectedBridge.selectedBridge.properties.after_img} />
            ) : (
              <div></div>
            )}
            {selectedBridge.selectedBridge.properties.before_img ? (
              <img src={selectedBridge.selectedBridge.properties.before_img} />
            ) : (
              <div></div>
            )}
          </ImageDiv>
          <GraphPage props={selectedBridge.selectedBridge.properties} />
        </div>
      ) : (
        <div></div>
      )}
    </StyledCard>
  );
};

export default ImageBox;
// testing
