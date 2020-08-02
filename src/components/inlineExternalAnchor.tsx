import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const StyledAnchor = styled.a`
  white-space: nowrap;
  text-decoration: underline;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 0.25rem;
`

interface LinkProps {
  children: React.ReactNode
  link: string
  style?: any
}

const ExternalLink = (props: LinkProps) => (
  <StyledAnchor style={props.style} target='_blank' rel='noopener noreferrer external' href={props.link} {...props}>
    {props.children}
    <StyledIcon icon={faExternalLinkAlt} size='1x' />
  </StyledAnchor>
)

export default ExternalLink
