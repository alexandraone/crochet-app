import gql from 'graphql-tag';

export const getAllPatternsQuery = gql`
  {
    patterns {
      edges {
        node {
          title
          slug
          content
          pattern {
            madeBy
            lightpicture
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

export const getThreePatterns = gql`
  {
    patterns(first: 3) {
      edges {
        node {
          title
          slug
          content
          pattern {
            madeBy
            lightpicture
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
