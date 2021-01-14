import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { devices } from '../helpers/devices';
import CrochetVideo from '../static/crochet-video.mp4';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  padding: 15rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.75;
  overflow: hidden;
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Heading = styled.h1`
  margin: 8rem;
  font-size: 4rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3.5px;

  @media ${devices.mobileL} {
    font-size: 3.5rem;
  }

  @media ${devices.mobileS} {
    font-size: 3rem;
  }
`;

const Button = styled(Link)`
  border: 5px solid #fff;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Arial';
  letter-spacing: 3.5px;
  text-transform: uppercase;

  @media ${devices.mobileM} {
    padding: 1rem 0;
    letter-spacing: 2.5px;
    width: 100%;
    text-align: center;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Heading>Virkning</Heading>
      <BgVideo>
        <Video autoPlay muted loop>
          <source src={CrochetVideo} type='video/mp4' />
        </Video>
      </BgVideo>
      <Button to='#mina-virkningar'>Se mina virkningar</Button>
    </Wrapper>
  );
};

export default Hero;
