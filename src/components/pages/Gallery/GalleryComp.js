import React from 'react';
import Gallery from 'react-photo-gallery';

export default function GalleryComp(props) {
  const { photos } = props;

  console.log(photos);
  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
}
