import React from 'react';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from './Image';
import { getThreePatterns } from './queries/GetPatternsQuery';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5rem;
`;

const ImageList = () => {
  const { data, error, loading } = useQuery(getThreePatterns);

  if (loading) {
    return <div>loading patterns...</div>;
  }

  if (error) {
    return <div>Error with fetching patterns...</div>;
  }

  return (
    <Container>
      {data.patterns.edges.map((pattern: any, index: number) => {
        return (
          <Link
            key={index}
            to={{
              pathname: `/virkning/pattern/${pattern.node.slug}`,
              state: { pattern },
            }}
          >
            <Image key={index} pattern={pattern} />
          </Link>
        );
      })}
    </Container>
  );
};

export default ImageList;
