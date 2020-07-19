import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

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

const StyledButton = styled(Link)<{ color: string }>`
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
  external?: boolean
  disabled?: boolean
  label?: string
  link?: string
}

const Button = ({ className, color, label, link = '/', external = false, disabled }: ButtonProps) => {
  if (disabled) {
    return <DisabledButton>{label}</DisabledButton>
  } else if (external) {
    return (
      <StyledAnchor className={className} target='_blank' rel='noopener noreferrer external' href={link} color={color}>
        {label}
        <StyledIcon icon={faExternalLinkAlt} size='1x' />
      </StyledAnchor>
    )
  }
  return (
    <StyledButton className={className} to={link} color={color}>
      {label}
    </StyledButton>
  )
}

export default Button
