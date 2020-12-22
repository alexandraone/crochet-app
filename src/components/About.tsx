import React from 'react';
import styled from 'styled-components';
import IMG_0219 from '../static/images/IMG_0219.jpg';

const Container = styled.div`
  position: relative;
  width: 65%;
  margin: 0 auto;
  padding: 4rem;
  padding-left: 9rem;
  padding-bottom: 10rem;
  background-color: #fff;
  border-radius: 5px;
  transform: skewX(-12deg);
  box-shadow: 0 1rem 6rem rgba(0, 0, 0, 0.5);
`;

const Figure = styled.figure`
  width: 20rem;
  height: 20rem;
  float: left;
  -webkit-shape-outside: circle(50% at 50% 50%);
  shape-outside: circle(50% at 50% 50%);
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: skewX(12deg);
`;

const Image = styled.img`
  height: 100%;
  transform: translateX(-18rem);
`;

const TextBox = styled.div`
  margin: 40px 0 0 60px;
  transform: skewX(12deg);
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

const About = () => {
  return (
    <Wrapper>
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
