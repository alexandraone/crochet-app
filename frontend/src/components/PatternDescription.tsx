import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

const Pattern = () => {
  const [imageUrl, setImageUrl] = useState('');

  interface LocationParams {
    pattern: any;
  }

  const location = useLocation<LocationParams>();
  const pattern = location.state.pattern;

  useEffect(() => {
    const { featured_media } = pattern;
    const url =
      process.env.REACT_APP_ENV === 'development'
        ? `wp-json/wp/v2/media/${featured_media}`
        : `virkning/wp/wp-json/wp/v2/media/${featured_media}`;

    axios
      .get(url)
      .then((res) => setImageUrl(res.data.media_details.sizes.full.source_url))
      .catch((err) => console.log(err));
  }, [pattern]);

  interface MatchParams {
    id: string;
  }

  const description = pattern?.content?.rendered;

  return (
    <Wrapper>
      <Image src={imageUrl} alt='crochet' />
      <Heading className='text'>{pattern?.title?.rendered}</Heading>
      <Overlay />
      <Content>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <MadeBy>
          Mönstret kommer från: <b>{pattern?.acf?.made_by}</b>
        </MadeBy>
      </Content>
    </Wrapper>
  );
};

export default Pattern;
