import React from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import Gallery from '../Gallery/GalleryComp';
import { GraphPage } from '../Graph';

const StyledCard = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3%;
  align-items: center;
`;

const ImageBox = selectedBridge => {
  // if statement required in the case there is nothing selected (first render)
  if (selectedBridge.selectedBridge) {
    const images = [];
    if (selectedBridge.selectedBridge.properties.before_img) {
      images.push({
        src: selectedBridge.selectedBridge.properties.before_img,
      });
    }
    if (selectedBridge.selectedBridge.properties.after_img) {
      images.push({
        src: selectedBridge.selectedBridge.properties.after_img,
      });
    }
    // Returns Material-UI Gallery component with images provided.
    return (
      <StyledCard elevation={15}>
        <Gallery photos={images} />
        {selectedBridge.selectedBridge ? (
          <GraphPage props={selectedBridge.selectedBridge.properties} />
        ) : (
          <div></div>
        )}
      </StyledCard>
    );
  } else {
    return <div></div>;
  }
};

export default ImageBox;
