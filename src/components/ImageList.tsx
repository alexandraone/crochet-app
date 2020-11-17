import React from 'react';
import styled from 'styled-components';
import images from './images';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: white;
  flex-grow: 1;
`;

const Image = styled.img`
  max-height: 500px;
  width: auto;
  object-fit: cover;
  padding: 0.25rem;
  opacity: 0.6;
  flex-grow: 1;
`;

const ImageList = () => {
  console.log(images);
  return (
    <Container>
      {images.map(({ id, src, description }) => (
        <Image src={src} key={id} alt={description} />
      ))}
    </Container>
  );
};

export default ImageList;
