import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const StyledFooter = styled.nav`
  display: flex;
  flex-direction: column-reverse;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  width: var(--mobile-width);
  max-width: var(--desktop-width);
  margin: 50px 0;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    margin: 10px 0 50px;
  }
`

const CopyrightText = styled.p`
  font-family: 'Inter', sans-serif;
`

const SocialDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 16em;
`
const StyledIcon = styled.a`
  transition: 0.1s ease-in;

  &:hover {
    opacity: 0.5;
  }
`

export const Socials = ({ className }: { className?: string }) => (
  <SocialDiv className={className}>
    <StyledIcon target='_blank' rel='noopener noreferrer external' href='https://github.com/Walsker'>
      <FontAwesomeIcon icon={faGithub} size='2x' />
    </StyledIcon>
    <StyledIcon target='_blank' rel='noopener noreferrer external' href='https://twitter.com/walsquared'>
      <FontAwesomeIcon icon={faTwitter} size='2x' />
    </StyledIcon>
    <StyledIcon target='_blank' rel='noopener noreferrer external' href='https://linkedin.com/in/wal-wal'>
      <FontAwesomeIcon icon={faLinkedin} size='2x' />
    </StyledIcon>
    <StyledIcon target='_blank' rel='noopener noreferrer external' href='mailto:wal@walsquared.ca'>
      <FontAwesomeIcon icon={faEnvelope} size='2x' />
    </StyledIcon>
  </SocialDiv>
)

const Footer = () => (
  <StyledFooter>
    <CopyrightText>© 2020 Wal Wal</CopyrightText>
    <Socials />
  </StyledFooter>
)

export default Footer
