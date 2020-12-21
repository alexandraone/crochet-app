import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  backgroundDark: boolean;
}

const Wrapper = styled.div<ContainerProps>`
  background-color: ${({ backgroundDark }) =>
    backgroundDark ? '#e6e6e6' : '#fff'};
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: calc(100vh - 100px - 80px);
`;

const DefaultLayout = ({ children, backgroundDark }: any) => (
  <Wrapper backgroundDark={backgroundDark}>
    <Container>{children}</Container>
  </Wrapper>
);

export default DefaultLayout;
