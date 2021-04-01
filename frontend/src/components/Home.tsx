import React, { FC } from 'react';
import styled from 'styled-components';
import { devices } from '../helpers/devices';
import Section from '../styles/Section';
import Hero from './Hero';
import ImageList from './ImageList';

const ImageListWrapper = styled.div`
  padding: 12rem 0;
`;

const Heading = styled.h1`
  font-family: 'BioRhyme', serif;
  font-size: 2rem;
  padding-bottom: 4rem;

  @media ${devices.tablet} {
    text-align: center;
  }
`;

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Section backgroundDark>
        <ImageListWrapper id='mina-virkningar'>
          <Heading>Mina senaste virkningar</Heading>
          <ImageList />
        </ImageListWrapper>
      </Section>
    </>
  );
};

export default Home;
