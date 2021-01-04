import React from 'react';
import styled from 'styled-components';
import IMG_0219 from '../static/images/IMG_0219.jpg';

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  padding: 6rem;
  padding-left: 9rem;
  transform: skewX(-12deg);
`;

const Figure = styled.figure`
  width: 15rem;
  height: 15rem;
  float: left;
  -webkit-shape-outside: circle(50% at 50% 50%);
  shape-outside: circle(50% at 50% 50%);
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  transform: translateX(-2rem) skewX(12deg);
`;

const Image = styled.img`
  height: 100%;
  transform: translateX(-15rem);
`;

const TextBox = styled.div`
  transform: skewX(12deg);
`;

const Heading = styled.h1`
  letter-spacing: 1.5px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p``;

const Wrapper = styled.div`
  padding: 10rem 0;
  max-width: 114rem;
  margin: 0 auto;
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
    </Wrapper>
  );
};

export default About;
