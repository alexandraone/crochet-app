import React from 'react';
import styled from 'styled-components';
import ForestBgVideo from '../static/forest_bg_video.webm';
import IMG_0219 from '../static/images/IMG_0219.jpg';

const Container = styled.div`
  position: relative;
  width: 65%;
  margin: 0 auto;
  padding: 4rem;
  padding-left: 9rem;
  padding-bottom: 10rem;
  background-color: rgba(255, 255, 255, 0.9);
`;

const Figure = styled.figure`
  width: 20rem;
  height: 20rem;
  float: left;
  -webkit-shape-outside: circle(50% at 50% 50%);
  shape-outside: circle(50% at 50% 50%);
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
`;

const Image = styled.img`
  height: 100%;
  transform: translateX(-18rem);
`;

const TextBox = styled.div`
  margin: 40px 0 0 60px;
`;

const Heading = styled.h1`
  letter-spacing: 1.5px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p``;

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
  opacity: 0.25;
  overflow: hidden;
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const About = () => {
  return (
    <Wrapper>
      <BgVideo>
        <Video autoPlay muted loop>
          <source src={ForestBgVideo} type='video/webm' />
        </Video>
      </BgVideo>
      <Container>
        <Figure>
          <Image src={IMG_0219} alt='me' />
        </Figure>
        <TextBox>
          <Heading>BAKGRUND</Heading>
          <Paragraph>
            Jag har alltid tyckt om att pyssla och göra saker själv men har
            aldrig riktigt hittat något inom det att ha som en riktig hobby. Men
            i jakt på en ny hobby kom jag över ett mönster för att virka ett
            pannband som panduro delade på sin instagram. Jag bestämde mig för
            att köpa hem garn och virknålen som krävdes för det mönstret. Jag
            fann det både roligt och rogivande för själen och det slutade med
            att jag virkade klart hela pannbandet på två dagar. Efter det har
            det bara fortsatt!
          </Paragraph>
        </TextBox>
      </Container>
      {/* <Container>
        <TextBox>
          <Heading>ÖVRIGT</Heading>
          <Paragraph>
            När jag inte virkar på fritiden så jobbar jag som webbutvecklare.
            Jag tänkte därför: Varför inte kombinera mina två passioner genom
            att göra en hemsida om mina virkning.
          </Paragraph>
        </TextBox>
        <Image src={IMG_0219} alt='me' />
      </Container> */}
    </Wrapper>
  );
};

export default About;
