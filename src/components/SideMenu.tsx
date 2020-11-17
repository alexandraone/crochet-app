import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 40%;

  a:first-child {
    margin-top: 100px;
  }

  .sidemenu_link {
    color: #fff;
    margin: 30px 0 0 30px;
    cursor: pointer;
  }
`;

const SideMenu = ({ showMenu }: { showMenu: boolean }) => {
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
      <Link to='/pattern' className='sidemenu_link'>
        Mönster
      </Link>
      <Link to='/portfolio' className='sidemenu_link'>
        Mina virkningar
      </Link>
      <Link to='/contact' className='sidemenu_link'>
        Kontakta mig
      </Link>
      <Link to='/about' className='sidemenu_link'>
        Om mig
      </Link>
    </Container>
  );
};

export default SideMenu;
