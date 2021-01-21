import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;

const ImagePattern = ({ pattern }: any) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const { featured_media } = pattern;
    const url =
      process.env.REACT_APP_ENV === 'development'
        ? `/wp-json/wp/v2/media/${featured_media}`
        : `/virkning/wp/wp-json/wp/v2/media/${featured_media}`;

    axios
      .get(url)
      .then((res) => setImageUrl(res.data.media_details.sizes.full.source_url))
      .catch((err) => console.log(err));
  }, [pattern]);

  return <Image src={imageUrl} alt='pattern' />;
};

export default ImagePattern;
