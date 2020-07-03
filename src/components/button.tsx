import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

type ThemeColor = 'red' | 'turquoise' | 'orange' | 'purple'
interface ButtonProps {
  color: ThemeColor
  external?: boolean
  label: string
  link: string
}

const StyledButton = styled(Link)<{ theme: ThemeColor }>`
  background-color: ${(props) => `var(--${props.theme})`};
  color: var(--white) !important;

  border-color: ${(props) => `var(--${props.theme})`};
  border-width: 1px;
  border-style: solid;
  border-radius: 25px;

  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 2px 25px 0;

  transition: 0.1s ease-in;

  &:hover {
    background-color: var(--bkg);
    color: ${(props) => `var(--${props.theme})`} !important;
  }
`

const StyledAnchor = styled.a<{ theme: ThemeColor }>`
  background-color: ${(props) => `var(--${props.theme})`};
  color: var(--white) !important;

  border-color: ${(props) => `var(--${props.theme})`};
  border-width: 1px;
  border-style: solid;
  border-radius: 25px;

  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 2px 25px 0;

  transition: 0.1s ease-in;

  &:hover {
    background-color: var(--bkg);
    color: ${(props) => `var(--${props.theme})`} !important;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  margin-top: -2px;
  margin-right: -5px;
`

const Button = ({ color = 'turquoise', label, link = '/', external = false }: ButtonProps) => {
  if (external) {
    return (
      <StyledAnchor target='_blank' rel='noopener noreferrer external' href={link} theme={color}>
        {label.toUpperCase()}
        <StyledIcon icon={faExternalLinkAlt} size='1x' />
      </StyledAnchor>
    )
  }
  return (
    <StyledButton to={link} theme={color}>
      {label.toUpperCase()}
    </StyledButton>
  )
}

export default Button
