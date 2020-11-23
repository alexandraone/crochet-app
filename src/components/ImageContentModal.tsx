import React, { Dispatch, SetStateAction, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useClickedOutside } from './hooks/useClickedOutside';

export interface ImageType {
  src: string;
  description: string;
  title: string;
}

interface ImageContentModalProps {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  image: ImageType;
}

interface ModalOverlayProps {
  open: boolean;
}

const ModalOverlay = styled.div<ModalOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  width: 100%;
  height: 100%;
  color: black;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ open }) =>
    `transition: ${
      open
        ? 'opacity 0.4s ease-in-out 0.4s, transform 0.4s ease-in-out;'
        : 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out 0.4s;'
    }`}
  ${({ open }) => `
  opacity: ${open ? '1' : '0'};
  transform: ${open ? 'translateX(0)' : 'translateX(-1700px)'};
  
  `};
`;

const StyledModal = styled.div`
  z-index: 1201;
  background: white;
  position: relative;
  border-radius: 3px;
  width: 80%;
  height: 80%;
  cursor: default;
`;

const Content = styled.div`
  color: #111;
  background: #fff;
  padding: 20px;
  flex-grow: 1;
  text-align: center;
`;

const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: auto;
`;

const ImageContentModal = ({
  setIsOpen,
  open,
  image,
}: ImageContentModalProps) => {
  const clickOutsideRef = useRef<HTMLDivElement>(null);
  useClickedOutside(clickOutsideRef, setIsOpen);

  const { title, description, src } = image;

  return ReactDOM.createPortal(
    <ModalOverlay
      aria-modal
      aria-hidden
      tabIndex={-1}
      role='dialog'
      open={open}
    >
      <StyledModal ref={clickOutsideRef}>
        <div style={{ display: 'flex', height: '100%' }}>
          <StyledImage src={src} alt={title} />
          <Content>
            <h3 className='text'>{title}</h3>
            <p>{description}</p>
          </Content>
        </div>
      </StyledModal>
    </ModalOverlay>,
    document.body
  );
};

export default ImageContentModal;
