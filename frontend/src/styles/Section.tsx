import React from 'react';
import styled from 'styled-components';
import { devices } from '../helpers/devices';

interface ContainerProps {
  fullWidth?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '80%')};
  margin: 0 auto;

  @media ${devices.mobileL} {
    width: 100%;
  }
`;

interface WrapperProps {
  backgroundDark?: boolean;
}

const Wrapper = styled.section<WrapperProps>`
  background-color: ${({ backgroundDark }) =>
    backgroundDark ? '#e6e6e6' : '#fff'};
`;

interface SectionProps {
  fullWidth?: boolean;
  children: any;
  backgroundDark?: boolean;
}

const Section = ({ fullWidth, children, backgroundDark }: SectionProps) => {
  return (
    <Wrapper backgroundDark={backgroundDark}>
      <Container fullWidth={fullWidth}>{children}</Container>
    </Wrapper>
  );
};

export default Section;
