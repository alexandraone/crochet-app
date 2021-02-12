import gql from 'graphql-tag';

export const getPatternsQuery = gql`
  {
    patterns {
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
