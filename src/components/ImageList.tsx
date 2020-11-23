import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useModal from './hooks/useModal';
import Image from './Image';
import ImageContentModal, { ImageType } from './ImageContentModal';
import images from './images';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
`;

const ImageList = () => {
  const { isOpen, setIsOpen, toggle } = useModal();
  const [image, setImage] = useState({ src: '', description: '', title: '' });

  const onImageClick = (isShowing: boolean, image: ImageType) => {
    setIsOpen(isShowing);
    setImage(image);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [isOpen]);

  return (
    <Container>
      {images.map((image, index) => (
        <Image image={image} key={index} onImageClick={onImageClick} />
      ))}
      <ImageContentModal open={isOpen} setIsOpen={setIsOpen} image={image} />
    </Container>
  );
};

export default ImageList;
