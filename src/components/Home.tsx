import React, { FC } from 'react';
import styled from 'styled-components';
import ImageList from './ImageList';

const Container = styled.div`
  width: 98%;
  margin: 0 auto;
  margin-top: 100px;
`;

const Home: FC = () => {
  return (
    <Container>
      <ImageList />
    </Container>
  );
};

export default Home;
