import React from 'react';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPatternsQuery } from '../queries/GetPatternsQuery';
import ImagePattern from './ImagePattern';

const Wrapper = styled.div`
  margin-top: 6rem;
  display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 20vw);
  gap: 1rem;
  padding: 1rem;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
`;

interface StyledLinkProps {
  imgNumber: number;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  // Bild 1
  grid-row: ${(p) => p.imgNumber === 0 && '1 / span 3'};
  grid-column: ${(p) => p.imgNumber === 0 && '1 / span 3'};

  // Bild 2
  grid-row: ${(p) => p.imgNumber === 2 && '1 / span 2'};
  grid-column: ${(p) => p.imgNumber === 2 && '4 / span 3'};

  // Bild 3
  grid-row: ${(p) => p.imgNumber === 3 && '1 / span 1'};
  grid-column: ${(p) => p.imgNumber === 3 && '7 / span 2'};

  // Bild 4
  grid-row: ${(p) => p.imgNumber === 5 && '2 / span 2'};
  grid-column: ${(p) => p.imgNumber === 5 && '7 / span 2'};

  // Bild 5
  grid-row: ${(p) => p.imgNumber === 1 && '3 / span 1'};
  grid-column: ${(p) => p.imgNumber === 1 && '4 / span 2'};


`;

const Portfolio = () => {
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
          <StyledLink
            key={index}
            imgNumber={index}
            to={{
              pathname: `/virkning/pattern/${pattern.node.slug}`,
              state: { pattern },
            }}
          >
            <ImagePattern pattern={pattern} />
            <Title>{pattern.title}</Title>
          </StyledLink>
        );
      })}
    </Wrapper>
  );
};

export default Portfolio;
