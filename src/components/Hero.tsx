import React from 'react';
import styled from 'styled-components';
import ForestBgVideo from '../static/crochet-video.mp4';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  padding: 15rem 0;
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

const Hero = () => {
  return (
    <Wrapper>
      <BgVideo>
        <Video autoPlay muted loop>
          <source src={ForestBgVideo} type='video/webm' />
        </Video>
      </BgVideo>
    </Wrapper>
  );
};

export default Hero;
