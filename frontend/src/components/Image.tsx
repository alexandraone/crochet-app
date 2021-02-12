import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Box = styled.div`
  position: relative;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: transform 0.3s;
  flex: 1 0 400px;

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
