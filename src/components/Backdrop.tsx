import React from 'react';
import styled from 'styled-components';

interface BackdropProps {
  backdropClick: () => void;
}

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Backdrop = ({ backdropClick }: BackdropProps) => {
  return <StyledBackdrop onClick={backdropClick} />;
};
export default Backdrop;
