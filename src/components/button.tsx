import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const genericButton = css`
  border: 2px solid var(--grey);
  background-color: var(--bkg);
  color: var(--grey);

  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;

  user-select: none;
`

const DisabledButton = styled.div`
  ${genericButton}
`

const enabledButton = css`
  ${genericButton}

  color: var(--text);
  border-color: var(--text);

  transition: 0.1s ease-in;
`

const StyledButton = styled.button<{ color: string }>`
  ${enabledButton}

  @media only screen and (min-width: 700px) {
    &:hover {
      background-color: ${(props) => props.color};
      color: ${(props) => (props.color === 'var(--black)' ? 'var(--white)' : 'var(--black)')};
      cursor: pointer;
    }
  }
`

const StyledLink = styled(Link)<{ color: string }>`
  ${enabledButton}

  @media only screen and (min-width: 700px) {
    &:hover {
      background-color: ${(props) => props.color};
      color: ${(props) => (props.color === 'var(--black)' ? 'var(--white)' : 'var(--black)')};
    }
  }
`

const StyledAnchor = styled.a<{ color: string }>`
  ${enabledButton}

  @media only screen and (min-width: 700px) {
    &:hover {
      background-color: ${(props) => props.color};
      color: ${(props) => (props.color === 'var(--black)' ? 'var(--white)' : 'var(--black)')};
    }
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  margin-top: -2px;
  margin-right: -5px;
`

interface ButtonProps {
  className?: string
  color: string
  download?: boolean
  external?: boolean
  disabled?: boolean
  label?: string
  link?: string
  action?: () => void
}

const Button = (props: ButtonProps) => {
  if (props.disabled) {
    return <DisabledButton>{props.label}</DisabledButton>
  } else if (!props.link) {
    return (
      <StyledButton className={props.className} color={props.color} onClick={props.action}>
        {props.label}
      </StyledButton>
    )
  } else if (props.external || props.download) {
    return (
      <StyledAnchor
        className={props.className}
        target='_blank'
        rel='noopener noreferrer external'
        href={props.link}
        color={props.color}
        download={props.download}
      >
        {props.label}
        <StyledIcon icon={props.download ? faDownload : faExternalLinkAlt} size='1x' />
      </StyledAnchor>
    )
  }
  return (
    <StyledLink className={props.className} to={props.link} color={props.color}>
      {props.label}
    </StyledLink>
  )
}

export default Button
