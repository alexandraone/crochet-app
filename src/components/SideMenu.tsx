import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  width: 100%;
  height: 100%;
  color: black;
  background: rgba(0, 0, 0, 0.8);
`;

const StyledSideMenu = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 40%;
  z-index: 1210;

  a:first-child {
    margin-top: 100px;
  }

  .sidemenu_link {
    color: #fff;
    margin: 30px 0 0 30px;
    cursor: pointer;
  }
`;

const SideMenu = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: (item: boolean) => void;
}) => {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [showMenu]);

  return (
    <Container>
      <StyledSideMenu>
        <Link
          to='/pattern'
          className='sidemenu_link'
          onClick={() => setShowMenu(false)}
        >
          Mönster
        </Link>
        <Link
          to='/portfolio'
          className='sidemenu_link'
          onClick={() => setShowMenu(false)}
        >
          Mina virkningar
        </Link>
        <Link
          to='/contact'
          className='sidemenu_link'
          onClick={() => setShowMenu(false)}
        >
          Kontakta mig
        </Link>
        <Link
          to='/about'
          className='sidemenu_link'
          onClick={() => setShowMenu(false)}
        >
          Om mig
        </Link>
      </StyledSideMenu>
    </Container>
  );
};

export default SideMenu;
