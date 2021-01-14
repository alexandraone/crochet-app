import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Image from './Image';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const ImageList = () => {
  const [patterns, setPatterns] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const history = useHistory();

  const onImageClick = (pattern: any) => {
    history.push({
      pathname: `/virkning/pattern/${pattern.id}`,
      state: { pattern },
    });
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

  if (!isLoaded) {
    return <div>loading patterns...</div>;
  }

  return (
    <Container>
      {patterns.map((pattern, index) => {
        return (
          index <= 3 && (
            <Image key={index} pattern={pattern} onImageClick={onImageClick} />
          )
        );
      })}
    </Container>
  );
};

export default ImageList;
