import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImagePattern from './ImagePattern';

const Wrapper = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImageBox = styled(Link)`
  border: 5px solid #fff;
  border-radius: 3px;
  padding: 1rem;
  margin: 1rem;
  width: 400px;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
`;

const Patterns = () => {
  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    axios
      .get('/wp-json/wp/v2/patterns')
      .then((res) => {
        setPatterns(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(patterns);

  return (
    <Wrapper>
      {patterns.map((pattern: any) => {
        return (
          <ImageBox
            to={{ pathname: `pattern/${pattern.id}`, state: { pattern } }}
          >
            <ImagePattern pattern={pattern} />
            <Title>{pattern.title.rendered}</Title>
          </ImageBox>
        );
      })}
    </Wrapper>
  );
};

export default Patterns;
