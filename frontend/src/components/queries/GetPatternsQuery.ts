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
