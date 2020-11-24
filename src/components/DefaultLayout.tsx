import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 98%;
  margin: 0 auto;
  margin-top: 100px;
  min-height: calc(100vh - 100px - 80px);
`;

const DefaultLayout = ({ children }: any) => <Container>{children}</Container>;

export default DefaultLayout;
