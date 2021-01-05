import React, { FC } from 'react';
import styled from 'styled-components';
import { ImageType } from './ImageContentModal';

export interface ImageProps {
  onImageClick: (isShowing: boolean, image: ImageType) => void;
  image: {
    src: string;
    id: number;
    description: string;
    title: string;
    madeBy: string;
  };
}

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Box = styled.div`
  position: relative;
  width: 400px;
  height: 580px;
  margin: 2px;
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  transition: transform 0.3s;

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }

  &:hover,
  &:active {
    transform: scale(1.05);
    z-index: 2;
  }
`;

const ImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0.8;
  cursor: pointer;
`;

const Image: FC<ImageProps> = ({ image, onImageClick }) => {
  const { id, src, title, madeBy } = image;

  return (
    <Box>
      <ImageBox>
        <StyledImage
          src={src}
          alt={title}
          key={id}
          onClick={() => onImageClick(true, image)}
        />
      </ImageBox>
    </Box>
  );
};

export default Image;
