import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { useClickedOutside } from './hooks/useClickedOutside';

interface Image {
  src: string;
  description: string;
  title: string;
}

interface ImageContentModalProps {
  isShowing: boolean;
  setIsShowing: any;
  image: Image;
  className: any;
}

const ModalWrapper = styled.div`
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
`;

const StyledModal = styled.div`
  z-index: 1201;
  background: white;
  position: relative;
  border-radius: 3px;
  width: 80%;
  height: 80%;
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
  setIsShowing,
  isShowing,
  image,
}: ImageContentModalProps) => {
  const clickOutsideRef = useRef(null);
  useClickedOutside(clickOutsideRef, setIsShowing);

  const { title, description, src } = image;

  console.log(isShowing);

  if (isShowing) {
    return ReactDOM.createPortal(
      <ModalWrapper
        aria-modal
        aria-hidden
        tabIndex={-1}
        role='dialog'
        className={isShowing ? 'active' : ''}
      >
        <StyledModal
          ref={clickOutsideRef}
          className={isShowing ? 'active' : ''}
        >
          <div style={{ display: 'flex', height: '100%' }}>
            <StyledImage src={src} alt={title} />
            <Content>
              <h3 className='text'>{title}</h3>
              <p>{description}</p>
            </Content>
          </div>
        </StyledModal>
      </ModalWrapper>,
      document.body
    );
  } else return null;
};

export default ImageContentModal;
