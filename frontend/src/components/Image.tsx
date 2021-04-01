import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
const Box = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }
`;

const ImageBox = styled.div`
  position: relative;
  opacity: 0.8;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: 0.5s ease;
  background-color: rgba(230, 230, 230, 0.8);
  opacity: 0;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Description = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const Image = ({ pattern }: any) => {
  return (
    <Box>
      <ImageBox>
        <StyledImage
          src={pattern?.node.featuredImage.node?.sourceUrl}
          alt={pattern?.node.featuredImage.node?.altText}
        />
      </ImageBox>
      <Overlay>
        <Description>{pattern?.node.title}</Description>
      </Overlay>
    </Box>
  );
};

export default Image;
