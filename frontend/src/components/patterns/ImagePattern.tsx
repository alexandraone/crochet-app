import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ImagePattern = ({ pattern }: any) => {
  const imageUrl = pattern?.node.featuredImage.node?.sourceUrl;

  return (
    <Image src={imageUrl} alt={pattern?.node.featuredImage.node?.altText} />
  );
};

export default ImagePattern;
