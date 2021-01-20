import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

export interface ImageProps {
  onImageClick: (pattern: any) => void;
  pattern: any;
}

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Box = styled.div`
  position: relative;
  margin: 1rem;
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: transform 0.3s;
  width: 400px;

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }
`;

const ImageBox = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.7);
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

const Image: FC<ImageProps> = ({ pattern, onImageClick }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const { featured_media } = pattern;
    const url =
      process.env.REACT_APP_ENV === 'development'
        ? `wp-json/wp/v2/media/${featured_media}`
        : `virkning/wp/wp-json/wp/v2/media/${featured_media}`;

    axios
      .get(url)
      .then((res) => setImageUrl(res.data.media_details.sizes.full.source_url))
      .catch((err) => console.log(err));
  }, [pattern]);

  return (
    <Box>
      <ImageBox>
        <StyledImage src={imageUrl} alt='alt' />
      </ImageBox>
      <Overlay onClick={() => onImageClick(pattern)}>
        <Description>{pattern?.title?.rendered}</Description>
      </Overlay>
    </Box>
  );
};

export default Image;
