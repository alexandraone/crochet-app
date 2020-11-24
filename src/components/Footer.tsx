import {
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  background: #000;
`;

const FooterContent = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
`;

const SocialIconLink = styled.a`
  margin: 10px;
`;

const Text = styled.p`
  color: #fff;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Text>Copyright &copy; 2020 Alexandra Onegård</Text>
        <div>
          <SocialIconLink
            href='https://www.linkedin.com/in/alexandra-onegård-974431154'
            target='_blank'
          >
            <FontAwesomeIcon icon={faLinkedin} size='3x' color='white' />
          </SocialIconLink>
          <SocialIconLink
            href='https://www.instagram.com/alexandraone/'
            target='_blank'
          >
            <FontAwesomeIcon icon={faInstagramSquare} size='3x' color='white' />
          </SocialIconLink>
        </div>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
