import React from 'react';
import styled from 'styled-components';
import { devices } from '../../helpers/devices';

const Container = styled.div`
  text-align: center;
  margin: 10rem 3rem; ;
`;

const Heading = styled.h1`
  margin-bottom: 1rem;

  @media ${devices.mobileL} {
    font-size: 1.5rem;
  }
`;

const Content = styled.p`
  margin-bottom: 3rem;
  font-size: 1.2rem;
`;
const Paragraph = styled.p`
  font-size: 1.2rem;
`;

const ContactMe = () => {
  return (
    <Container>
      <Heading id='kontakta-mig'>
        Intresserad av att veta mer? Kontakta mig!
      </Heading>
      <Content>
        Om du är intresserad av att veta mer, eller har några frågor så är du
        självklart välkommen att kontakta mig.
      </Content>
      <a href='mailto:alexandra.onegard@gmail.com'>
        <Paragraph>-&nbsp;alexandra.onegard@gmail.com&nbsp;-</Paragraph>
      </a>
    </Container>
  );
};

export default ContactMe;
