import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import useModal from './hooks/useModal';
import ImageContentModal from './ImageContentModal';

export interface ImageProps {
  image: {
    src: string;
    id: number;
    description: string;
    title: string;
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
`;

const ImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0.8;
`;

const Image: FC<ImageProps> = ({ image }) => {
  const [clicked, setClicked] = useState(false);
  const { id, src, description, title } = image;

  const { isShowing, setIsShowing, toggle } = useModal();

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [isShowing]);

  return (
    <Box>
      <ImageBox
        onClick={() => {
          setClicked(true);
          setIsShowing(true);
        }}
      >
        <StyledImage src={src} alt={title} key={id} />
        <ImageContentModal
          className={clicked ? 'active' : ''}
          isShowing={isShowing}
          setIsShowing={setIsShowing}
          image={image}
          clicked={clicked}
        />
      </ImageBox>
    </Box>
  );
};

export default Image;
