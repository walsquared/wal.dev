import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const StyledAnchor = styled.a`
  white-space: nowrap;
  color: black !important;

  @media only screen and (min-width: 700px) {
    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 0.4ch;
`

const InlineExternalAnchor = ({ children, href, ...props }) => (
  <StyledAnchor target='_blank' rel='noopener noreferrer external' href={href} {...props}>
    {children}
    <StyledIcon icon={faExternalLinkAlt} size='1x' />
  </StyledAnchor>
)

export default InlineExternalAnchor
