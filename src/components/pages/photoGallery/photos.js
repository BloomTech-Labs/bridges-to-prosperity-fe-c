// ****This page is for the Photo Gallery and is nearly functional, but we ran out of time before we could complete it****

import React, { useState, useCallback, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { ModalGateway } from 'react-images';
import {} from 'react-photo-gallery';
import axios from 'axios';

const GalleryPhotos = props => {
  const [CurrentImage, setCurrentImage] = useState(photos);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photoState, setPhotoState] = useState(false);

  // this useEffect hook links to the a backend link that contains photos specifically meant for the gallery

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
