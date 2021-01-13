import React, { Dispatch, SetStateAction, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { devices } from '../helpers/devices';
import { useClickedOutside } from './hooks/useClickedOutside';

export interface ImageType {
  src: string;
  description: string;
  title: string;
  madeBy: string;
}

interface ImageContentModalProps {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  pattern: any;
  selectedImage: string;
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
  position: relative;
  border-radius: 3px;
  width: 80%;
  height: 80%;
  cursor: default;

  @media ${devices.mobileL} {
    width: 100%;
    height: 60%;
  }
`;

const Content = styled.div`
  color: #111;
  padding: 2rem 4rem;
  flex-grow: 1;
  position: relative;

  @media ${devices.tablet} {
    padding: 1rem;
  }
`;

const Description = styled.p`
  padding-top: 5rem;
  margin-bottom: 2rem;

  max-width: 50%;
`;

const MadeBy = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;

  @media ${devices.mobileL} {
    margin-bottom: 0;
  }
`;

interface ModalBoxProps {
  image: string;
}
const ModalBox = styled.div<ModalBoxProps>`
  background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 60%,
      rgba(255, 255, 255, 0.3) 60%
    ),
    ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: right 0 top 50%;
`;

const ImageContentModal = ({
  setIsOpen,
  open,
  pattern,
  selectedImage,
}: ImageContentModalProps) => {
  const clickOutsideRef = useRef<HTMLDivElement>(null);
  useClickedOutside(clickOutsideRef, setIsOpen);

  const description = pattern?.content?.rendered;

  return ReactDOM.createPortal(
    <ModalOverlay
      aria-modal
      aria-hidden
      tabIndex={-1}
      role='dialog'
      open={open}
    >
      <StyledModal ref={clickOutsideRef}>
        <ModalBox
          style={{ display: 'flex', height: '100%' }}
          image={selectedImage}
        >
          <Content>
            <h3 className='text'>{pattern?.title?.rendered}</h3>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
            <MadeBy>
              Mönstret kommer från: <b>{pattern?.acf?.made_by}</b>
            </MadeBy>
          </Content>
        </ModalBox>
      </StyledModal>
    </ModalOverlay>,
    document.body
  );
};

export default ImageContentModal;
