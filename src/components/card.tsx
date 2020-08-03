import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const cardStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 5vw;
  padding: 5vw;

  border: 2px solid var(--black);

  background-position: center;
  background-size: cover;

  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: overlay;

  transition: 0.1s ease-in;

  h1 {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 2rem;
  }

  h2 {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
  }

  @media only screen and (min-width: 700px) {
    margin-bottom: 20px;
    padding: 33px 38px;

    background-color: #ffffff;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    h1 {
      font-size: 2.25rem;
    }

    h2 {
      font-size: 1.375rem;
      color: var(--grey);
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 510px;
  }
`

const LinkContainer = styled(Link)<{ bkg: string }>`
  ${cardStyle}

  @media only screen and (min-width: 700px) {
    background-image: ${(props) => `url(${props.bkg})`};
  }
`

const AnchorContainer = styled.a<{ bkg: string }>`
  ${cardStyle}

  @media only screen and (min-width: 700px) {
    background-image: ${(props) => `url(${props.bkg})`};
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ThemeDisplay = styled.div`
  overflow: visible;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

const ThemeDot = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;

  border: 2px solid var(--black);
  border-radius: 100%;
  margin-right: 20px;

  background-color: ${(props) => props.color};

  @media only screen and (min-width: 700px) {
    width: 25px;
    height: 25px;
    margin-right: 25px;
  }
`

interface CardProps {
  title: string
  subtitle: string
  themeColors: Array<string>
  preview: string
  linkProps: {
    link: string
    external: boolean
  }
}

const Card = ({ linkProps = { link: '/', external: false }, ...props }: CardProps) => {
  if (linkProps.external) {
    return (
      <AnchorContainer target='_blank' rel='noopener noreferrer external' href={linkProps.link} bkg={props.preview}>
        <Header>
          <ThemeDisplay>
            {props.themeColors.map((color, i) => (
              <ThemeDot key={i} color={color} />
            ))}
          </ThemeDisplay>
          <FontAwesomeIcon icon={faExternalLinkAlt} size='lg' />
        </Header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </AnchorContainer>
    )
  } else {
    return (
      <LinkContainer to={linkProps.link} bkg={props.preview}>
        <ThemeDisplay>
          {props.themeColors.map((color, i) => (
            <ThemeDot key={i} color={color} />
          ))}
        </ThemeDisplay>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </LinkContainer>
    )
  }
}

export default Card
