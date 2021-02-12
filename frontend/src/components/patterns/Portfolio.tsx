import React from 'react';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPatternsQuery } from '../queries/GetPatternsQuery';
import ImagePattern from './ImagePattern';

const Wrapper = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImageBox = styled(Link)`
  border: 5px solid #d3d3d3;
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
  const { data, error, loading } = useQuery(getPatternsQuery);

  if (loading) {
    return <div>loading patterns...</div>;
  }

  if (error) {
    return <div>Error with fetching patterns...</div>;
  }

  return (
    <Wrapper>
      {data.patterns.edges.map((pattern: any, index: number) => {
        return (
          <ImageBox
            key={index}
            to={{
              pathname: `/virkning/pattern/${pattern.node.slug}`,
              state: { pattern },
            }}
          >
            <ImagePattern pattern={pattern} />
            <Title>{pattern.title}</Title>
          </ImageBox>
        );
      })}
    </Wrapper>
  );
};

export default Patterns;
