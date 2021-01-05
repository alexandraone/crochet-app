import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  min-height: 100vh;
`;

const DefaultLayout = ({ children }: any) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default DefaultLayout;
