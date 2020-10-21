import React, { useEffect } from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';
import Gallery from '../Gallery/GalleryComp';
import { GraphPage } from '../Graph';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3%;
  align-items: center;
`;

const ImageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = selectedBridge => {
//   console.log(selectedBridge.selectedBridge.properties.after_img, 'HERE');

  const props = selectedBridge.selectedBridge.properties;
  const beforeImg = selectedBridge.selectedBridge.properties.before_img;
  const afterImg = selectedBridge.selectedBridge.properties.after_img;

  const images = [];
  if (beforeImg) {
    images.push({
      src: beforeImg,
      height: 4,
      width: 7,
    });
  }
  if (afterImg) {
    images.push({
      src: afterImg,

      height: 4,
      width: 7,
    });
  }

  return (
    <StyledCard>
      <Gallery photos={images} />
      <GraphPage props={props} />
    </StyledCard>
  );
};

export default ImageBox;
// testing
