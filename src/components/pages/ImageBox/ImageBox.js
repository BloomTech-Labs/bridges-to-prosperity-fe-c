import React, { useEffect } from 'react';
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

const ImageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = selectedBridge => {
  //   console.log(selectedBridge.selectedBridge.properties.after_img, 'HERE');

  // const props = selectedBridge.selectedBridge.properties;
  // const beforeImg = selectedBridge.selectedBridge.properties.before_img;
  // const afterImg = selectedBridge.selectedBridge.properties.after_img;
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
// testing
