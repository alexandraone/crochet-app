import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from './Image';

const Container = styled(Link)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const ImageList = () => {
  const getPatterns = gql`
    {
      patterns(first: 3) {
        edges {
          node {
            title
            slug
            content
            pattern {
              madeBy
            }
            featuredImage {
              node {
                altText
                description
                sourceUrl
                caption
              }
            }
          }
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(getPatterns);

  if (loading) {
    return <div>loading patterns...</div>;
  }

  if (error) {
    return <div>Error with fetching patterns...</div>;
  }

  return (
    <div>
      {data.patterns.edges.map((pattern: any, index: number) => {
        return (
          <Container
            key={index}
            to={{
              pathname: `/virkning/pattern/${pattern.node.slug}`,
              state: { pattern },
            }}
          >
            <Image key={index} pattern={pattern} />
          </Container>
        );
      })}
    </div>
  );
};

export default ImageList;
