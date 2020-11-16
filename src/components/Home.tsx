import React, { FC } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';
import Header from './Header';
import ImageList from './ImageList';

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const Home: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Container>
        <ImageList />
      </Container>
    </div>
  );
};

export default Home;
