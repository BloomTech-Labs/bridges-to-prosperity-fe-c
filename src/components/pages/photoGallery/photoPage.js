import React, { useState, useCallback, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { ModalGateway } from 'react-images';
import {} from 'react-photo-gallery';
import { Modal, Card } from '@material-ui/core';
import photos from './photo';
import axios from 'axios';

// import Gallery from '../Gallery/GalleryComp';

const GalleryPhotos = props => {
  //   const beforeImg = selectedBridge.selectedBridge.properties.before_img;
  //   const { photos } = props;
  const [CurrentImage, setCurrentImage] = useState(photos);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photoState, setPhotoState] = useState(false);

  useEffect(() => {
    axios
      .get('https://labs27-c-bridges-api.herokuapp.com/bridges/0/imgs')
      .then(response => setPhotoState(response.data))
      .catch(error => {
        console.error(error);
      });
  }, []);

  const photos = [];

  console.log(photoState, 'PHOTOSTATE');

  const openLightbox = e => {
    setCurrentImage(e.target);
    console.log(e.target);
    setViewerIsOpen(true);
  };
  //   const openLightbox = useCallback((event, { photo, index }) => {
  //     setCurrentImage(index);
  //     console.log(index);
  //     setViewerIsOpen(true);
  //   }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
    </div>
  );
};
export default GalleryPhotos;
