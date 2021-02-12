import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../helpers/devices';

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 6rem;
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 80vh;
`;

const Heading = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  text-align: center;
`;

const Content = styled.div`
  color: #111;
  padding: 4rem 4rem;
  flex-grow: 1;
  position: relative;
  text-align: center;

  @media ${devices.tablet} {
    padding: 1rem;
  }
`;

const Description = styled.p`
  padding-top: 5rem;
  margin-bottom: 2rem;
`;

const MadeBy = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;

  @media ${devices.mobileL} {
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  margin-top: 6rem;
`;

const PatternDescription = () => {
  interface LocationParams {
    pattern: any;
  }

  const location = useLocation<LocationParams>();
  const pattern = location.state.pattern;

  const description = pattern?.node.content;
  const imageUrl = pattern?.node.featuredImage.node.sourceUrl;
  const imageAltText = pattern?.node.featuredImage.node.altText;

  return (
    <Wrapper>
      <Image src={imageUrl} alt={imageAltText} />
      <Heading className='text'>{pattern?.node.title}</Heading>
      <Overlay />
      <Content>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <MadeBy>
          Mönstret kommer från: <b>{pattern?.node?.pattern?.madeBy}</b>
        </MadeBy>
      </Content>
    </Wrapper>
  );
};

export default PatternDescription;
