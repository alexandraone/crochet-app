import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from '../ui/Burger';
import Backdrop from './Backdrop';
import SideMenu from './SideMenu';

const StyledHeader = styled.header`
  font-family: 'BioRhyme', serif;
  font-size: 1.25rem;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  color: black;
  height: 100px;
  width: 100%;
  transition: all 0.5s ease-in-out;
  z-index: 1000;

  &.active {
    background: rgba(0, 0, 0, 0.8);
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;

  & a:first-of-type {
    flex-grow: 1;
  }
`;

const RightLinks = styled.div`
  & > * {
    margin: 0 1.5rem;
  }
`;

const MenuButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const backdropClickHandler = () => {
    setShowMenu(false);
  };

  return (
    <StyledHeader className={scrolled ? 'header active' : 'header'}>
      <Container>
        <Link to='/'>DIY - Virkning</Link>
        <RightLinks>
          <Link to='/about'>Om mig</Link>
          <Link to='/pattern'>Mönster</Link>
        </RightLinks>
        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          <Burger className={showMenu ? 'open' : ''} scrolled={scrolled} />
        </MenuButton>
      </Container>
      <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <Backdrop backdropClick={backdropClickHandler} />}
    </StyledHeader>
  );
};

export default Header;
