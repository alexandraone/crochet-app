import {
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { devices } from '../helpers/devices';

const StyledFooter = styled.footer`
  width: 100%;
  background: #000;
  font-family: 'Arial';
`;

const FooterContent = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  @media ${devices.tablet} {
    padding: 1rem 0.5rem;
  }

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

const SocialIconLink = styled.a`
  margin: 10px;
`;

const Text = styled.p`
  color: #fff;
  @media ${devices.mobileL} {
    padding-bottom: 1rem;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  @media ${devices.tablet} {
    font-size: 1.5rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Text>Copyright &copy; 2021 Alexandra Onegård</Text>
        <div>
          <SocialIconLink
            href='https://www.linkedin.com/in/alexandra-onegård-974431154'
            target='_blank'
          >
            <StyledFontAwesomeIcon icon={faLinkedin} color='white' />
          </SocialIconLink>
          <SocialIconLink
            href='https://www.instagram.com/alexandraone/'
            target='_blank'
          >
            <StyledFontAwesomeIcon icon={faInstagramSquare} color='white' />
          </SocialIconLink>
          <SocialIconLink
            href='mailto:alexandra.onegard@gmail.com'
            target='_blank'
          >
            <StyledFontAwesomeIcon icon={faEnvelope} color='white' />
          </SocialIconLink>
        </div>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
