import React from 'react';
import styled from 'styled-components';
import { devices } from '../../helpers/devices';
import IMG_0219 from '../../static/images/IMG_0219.jpg';

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  padding: 6rem;
  padding-left: 9rem;
  transform: skewX(-12deg);
  display: flex;

  @media ${devices.tablet} {
    transform: skewX(0);
    width: auto;
    box-shadow: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    max-width: 80%;
    height: 100vh;
    background-color: #dfd5d6;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  object-fit: cover;
  transform: skewX(12deg);
  margin-right: 3rem;

  @media ${devices.tablet} {
    transform: skewX(0);
    margin: 3rem auto;
  }

  @media ${devices.mobileS} {
    width: 15rem;
    height: 15rem;
  }
`;

const TextBox = styled.div`
  transform: skewX(12deg);

  @media ${devices.tablet} {
    transform: skewX(0);
  }
`;

const Heading = styled.h1`
  letter-spacing: 1.5px;
  margin-bottom: 1rem;

  @media ${devices.mobileL} {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
`;

const Wrapper = styled.div`
  padding: 10rem 0;
  max-width: 120rem;
  margin: 0 auto;
  background-color: #dfd5d6;
  height: 100vh;

  @media ${devices.tablet} {
    background-color: #dfd5d6;
    height: auto;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Image src={IMG_0219} alt='me' />
        <TextBox>
          <Heading>Bakgrund</Heading>
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
