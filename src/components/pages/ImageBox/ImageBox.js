import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
// import RenderGraphPage from './RenderGraphPage';

import { GraphPage } from '../Graph';
const StyledCard = styled(Card)`
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
    <StyledCard>
      {selectedBridge.selectedBridge ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
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
          <div>
            <GraphPage props={selectedBridge.selectedBridge.properties} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </StyledCard>
  );
};

export default ImageBox;
// testing
