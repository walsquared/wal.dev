import React from 'react'
import styled from 'styled-components'

import { Button } from 'components'
import { ButtonProps } from 'components/button'

interface CardProps {
  title: string
  subtitle: string
  description: string
  buttonProps: Omit<ButtonProps, 'color'>
  themeColors: Array<string>
  preview: string
}

const StyledCard = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: var(--mobile-width);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media only screen and (min-width: 700px) {
    max-width: 750px;
  }

  @media only screen and (min-width: 1200px) {
    flex-direction: row;

    width: 100%;

    max-width: var(--desktop-width);
    min-height: 400px;
  }
`

const Preview = styled.div<{ image: string }>`
  display: none;

  @media only screen and (min-width: 700px) {
    display: unset;

    width: 100%;
    height: 100vh;

    max-width: 750px;
    max-height: 300px;

    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media only screen and (min-width: 1200px) {
    overflow: hidden;

    width: 62.5%;
    height: unset;

    max-height: unset;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 40px;
  background-color: #ffffff;

  h1 {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 2rem;
  }

  h2 {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 1.1rem;
    color: var(--grey);
  }

  p {
    margin-bottom: 30px;
  }

  @media only screen and (min-width: 700px) {
    h1 {
      font-size: 2.625rem;
    }

    h2 {
      font-size: 1.375rem;
    }

    p {
      margin-bottom: 30px;
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 37.5%;
  }
`
const ThemeDisplay = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

const ThemeDot = styled.div<{ color: string }>`
  width: 25px;
  height: 25px;

  border-radius: 12.5px;
  margin-right: 25px;

  background-color: ${(props) => props.color};
`

const Card = ({ title, subtitle, description, buttonProps, themeColors, preview }: CardProps) => (
  <StyledCard>
    <Preview image={preview} />
    <Content>
      <ThemeDisplay>
        {themeColors.map((color) => (
          <ThemeDot color={color} />
        ))}
      </ThemeDisplay>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
      <Button color={themeColors[0]} {...buttonProps} />
    </Content>
  </StyledCard>
)

export default Card
