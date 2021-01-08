import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

export interface ImageProps {
  onImageClick: (isShowing: boolean, image: string, pattern: any) => void;
  pattern: any;
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

const Image: FC<ImageProps> = ({ pattern, onImageClick }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const { featured_media } = pattern;
    axios
      .get(`/wp-json/wp/v2/media/${featured_media}`)
      .then((res) => setImageUrl(res.data.media_details.sizes.full.source_url))
      .catch((err) => console.log(err));
  }, [pattern]);

  return (
    <Box>
      <ImageBox>
        <StyledImage
          src={imageUrl}
          alt='alt'
          key='123'
          onClick={() => onImageClick(true, imageUrl, pattern)}
        />
      </ImageBox>
    </Box>
  );
};

export default Image;
