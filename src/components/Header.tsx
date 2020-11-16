import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  color: black;
  height: 100px;
  width: 100%;
  transition: background 0.5s ease-in;
  z-index: 2;

  &.active {
    background: rgba(0, 0, 0, 0.9);
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 30px;

  & :first-of-type {
    flex-grow: 1;
  }
`;

const About = styled.div`
  margin: 0 10px;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const listenScrollEvent = () => {
    console.log(window.scrollY);
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <StyledHeader className={scrolled ? 'header active' : 'header'}>
      <Container>
        <div>DIY - Virkning</div>
        <About>Om mig</About>
        <div>Mönster</div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
