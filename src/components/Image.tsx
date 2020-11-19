import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

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
    right: 600px;
    bottom: 50px;
    width: calc(100% - 700px);
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
   bottom: 0;
  right: 50px;
  left: 50px; */
  background: rgba(0, 0, 0, 0.8);
`;

const Image: FC<ImageProps> = ({ image }) => {
  const [clickedId, setClickedId] = useState(-1);
  const [clicked, setClicked] = useState(false);
  const { id, src, description } = image;

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
          setClicked(!clicked);
        }}
        className={clicked && id === clickedId ? 'active' : ''}
      >
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
      </ImageBox>
    </Box>
  );
};

export default Image;
