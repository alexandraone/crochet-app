import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useClickedOutside } from './hooks/useClickedOutside';

interface ImageProps {
  image: {
    src: string;
    id: number;
    description: string;
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

  &.active {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    opacity: 1;
  }

  &.active img {
    position: absolute;
    top: 50px;
    left: 100px;
    right: 100px;
    bottom: 50px;
    width: calc(100% - 200px);
    height: calc(100% - 100px);
  }
`;

interface ContentProps {
  clicked: boolean;
}

const Content = styled.div<ContentProps>`
  opacity: ${({ clicked }) => (clicked ? '1' : '0')};
  visibility: ${({ clicked }) => (clicked ? 'visible' : 'hidden')};
  color: #fff;
  position: absolute;
  top: 50px;
  bottom: 50px;
  right: 100px;
  left: 800px;
  background: rgba(0, 0, 0, 0.9);
  padding: 20px;
`;

const Image: FC<ImageProps> = ({ image }) => {
  const [clickedId, setClickedId] = useState(-1);
  const [clicked, setClicked] = useState(false);
  const { id, src, description } = image;

  const clickOutsideRef = useRef(null);
  useClickedOutside(clickOutsideRef, setClicked);

  useEffect(() => {
    if (clicked) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [clicked]);

  return (
    <Box>
      <ImageBox
        onClick={() => {
          setClickedId(id);
          setClicked(true);
        }}
        className={clicked && id === clickedId ? 'active' : ''}
      >
        <div ref={clicked ? clickOutsideRef : null}>
          <StyledImage src={src} alt={description} key={id} />
          <Content clicked={clicked}>
            <h3 className='text'>HEJ</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam, eos. Nulla, nobis. Eos ut quos ab, magni rem sit
              laboriosam enim, consequatur ipsam non suscipit blanditiis earum
              velit incidunt fugiat.
            </p>
          </Content>
        </div>
      </ImageBox>
    </Box>
  );
};

export default Image;
