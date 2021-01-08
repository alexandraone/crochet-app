import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useModal from './hooks/useModal';
import Image from './Image';
import ImageContentModal from './ImageContentModal';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const ImageList = () => {
  const { isOpen, setIsOpen } = useModal();
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedPattern, setSelectedPattern] = useState('');

  const [patterns, setPatterns] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const onImageClick = (isShowing: boolean, imageUrl: string, pattern: any) => {
    setIsOpen(isShowing);
    setSelectedImage(imageUrl);
    setSelectedPattern(pattern);
  };

  useEffect(() => {
    axios
      .get('/wp-json/wp/v2/patterns')
      .then((res) => {
        setPatterns(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [isOpen]);

  if (!isLoaded) {
    return <div>loading patterns...</div>;
  }

  return (
    <Container>
      {patterns.map((pattern, index) => {
        //@ts-ignore
        return (
          <React.Fragment key={index}>
            <Image pattern={pattern} key={index} onImageClick={onImageClick} />
            <ImageContentModal
              open={isOpen}
              setIsOpen={setIsOpen}
              pattern={selectedPattern}
              selectedImage={selectedImage}
            />
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default ImageList;
