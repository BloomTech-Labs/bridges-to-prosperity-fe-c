import React from 'react';
import Gallery from 'react-photo-gallery';

export default function GalleryComp(props) {
  const { photos } = props;

  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
}
