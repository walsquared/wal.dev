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
  flex-direction: row;
  width: 100%;
  max-width: var(--content-width);
  max-height: 400px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 40px;

  h1 {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 42px;
  }

  h2 {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 22px;
    color: var(--grey);
  }

  p {
    margin-bottom: 30px;
  }
`

const Preview = styled.div<{ image: string }>`
  overflow: hidden;

  max-width: 750px;
  max-height: 400px;

  width: 62.5%;

  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
