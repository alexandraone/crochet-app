import React from 'react';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAllPatternsQuery } from '../queries/GetPatternsQuery';
import ImagePattern from './ImagePattern';

const Wrapper = styled.div`
  margin-top: 6rem;
  display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(9, 8vw);
  gap: 1rem;
  padding: 1rem;
`;

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
`;

interface StyledLinkProps {
  index: number;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  // Bild 1
  grid-row: ${(p) => p.index === 2 && '1 / span 4'};
  grid-column: ${(p) => p.index === 2 && '1 / span 2'};
  // Bild 2
  grid-row: ${(p) => p.index === 5 && '1 / span 4'};
  grid-column: ${(p) => p.index === 5 && '3 / span 2'};

  // Bild 3
  grid-row: ${(p) => p.index === 4 && '1 / span 4'};
  grid-column: ${(p) => p.index === 4 && '5 / span 4'};

  // Bild 4
  grid-row: ${(p) => p.index === 3 && '5 / span 3'};
  grid-column: ${(p) => p.index === 3 && '1 / span 3'};

  // Bild 5
  grid-row: ${(p) => p.index === 0 && '5 / span 3'};
  grid-column: ${(p) => p.index === 0 && '4 / span 2'};

  // Bild 6
  grid-row: ${(p) => p.index === 1 && '5 / span 5'};
  grid-column: ${(p) => p.index === 1 && '6 / span 3'};

  // Bild 7
  grid-row: ${(p) => p.index === 6 && '8 / span 2'};
  grid-column: ${(p) => p.index === 6 && '1 / span 3'};

  // Bild 8
  grid-row: ${(p) => p.index === 7 && '8 / span 2'};
  grid-column: ${(p) => p.index === 7 && '4 / span 2'};
`;

const Portfolio = () => {
  const { data, error, loading } = useQuery(getAllPatternsQuery);

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
            index={index}
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
