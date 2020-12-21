import React, { FC } from 'react';
import styled from 'styled-components';
import DefaultLayout from './DefaultLayout';
import Hero from './Hero';
import ImageList from './ImageList';

const ImageListWrapper = styled.div`
  padding: 12rem 0;
`;

const Heading = styled.h1`
  font-family: 'BioRhyme', serif;
  font-size: 2rem;
  padding-bottom: 4rem;
`;

const Home: FC = () => {
  return (
    <>
      <Hero />
      <DefaultLayout backgroundDark>
        <ImageListWrapper>
          <Heading>Mina virkningar</Heading>
          <ImageList />
        </ImageListWrapper>
      </DefaultLayout>
    </>
  );
};

export default Home;
