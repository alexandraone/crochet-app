import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../helpers/devices';

interface SideMenuProps {
  show: boolean;
}

const StyledSideMenu = styled.aside<SideMenuProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 40%;
  z-index: 1210;

  transition: transform 0.3s ease-out;
  ${({ show }) =>
    show ? 'transform: translateX(0)' : 'transform: translateX(100%)'};

  a:first-child {
    margin-top: 100px;
  }

  .sidemenu_link {
    color: #fff;
    margin: 30px 0 0 30px;
    cursor: pointer;
  }

  @media ${devices.mobileL} {
    width: 100%;
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
    <StyledSideMenu show={showMenu}>
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
        to='/about'
        className='sidemenu_link'
        onClick={() => setShowMenu(false)}
      >
        Om mig
      </Link>
      <Link
        to='/contact'
        className='sidemenu_link'
        onClick={() => setShowMenu(false)}
      >
        Kontakta mig
      </Link>
    </StyledSideMenu>
  );
};

export default SideMenu;
