import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import images from './images';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  min-height: 100vh;
`;

const ImageList = () => {
  return (
    <Container>
      {images.map((image, index) => (
        <Image image={image} key={index} />
      ))}
    </Container>
  );
};

export default ImageList;
