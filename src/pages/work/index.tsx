import React from 'react'
import styled from 'styled-components'

import { ContactForm, Divider, FadeAnimation } from 'components'
import { Socials } from 'footer'
import Card from './card'

import cuHacking from './cuHacking-preview.svg'
import cuHacking2020 from './cuHacking-2020-preview.svg'
import ribbon from './ribbon-preview.svg'
import savingCindi from './saving-cindi-preview.svg'

const CardList = styled.div`
  display: flex;
  flex-direction: column;

  width: var(--mobile-width);

  opacity: 0;
  animation: fadeIn 0.2s ease-out 0.2s forwards;
  will-change: opacity;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media only screen and (min-width: 700px) {
    align-items: center;
  }

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: var(--mobile-width);

  opacity: 0;
  animation: fadeIn 0.2s ease-out 0s forwards;
  will-change: opacity;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  width: 100%;
  height: 75vh;

  @media only screen and (min-width: 700px) {
    height: 700px;
    max-width: 800px;

    p {
      font-size: 1.25rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    height: 825px;
    p {
      font-size: 1.5rem;
    }
  }
`

const NameText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 300;

  margin: 16px 0;

  width: 100%;

  span {
    font-size: 4rem;
    font-weight: 900;
  }

  @media only screen and (min-width: 700px) {
    margin: 0;

    font-size: 3rem;

    span {
      font-size: 8rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    font-size: 4rem;

    span {
      font-size: 9rem;
    }
  }
`

const Highlight = styled.span`
  color: var(--red);
`

const StyledSocials = styled(Socials)`
  margin: 20px 0;
  color: 'red';

  @media only screen and (min-width: 700px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.2rem;
  }
`

const WorkPage = () => (
  <FadeAnimation>
    <ContactForm theme='red' />
    <IntroContainer>
      <Introduction>
        <NameText>
          Hi, I'm
          <br />
          <span>Wal Wal.</span>
        </NameText>
        <Divider theme='red' />
        <p>
          A <Highlight>fullstack developer</Highlight> who loves collaborating with others to create solutions that
          solve real-world and everyday problems.✊🏿 Currently looking for more opportunities! 💼
        </p>
        <p>Nice of you to drop by! 👋🏿 </p>
        <StyledSocials />
      </Introduction>
    </IntroContainer>
    <CardList>
      <Card
        title='cuHacking'
        subtitle='Director of Development'
        description='Leading a team of developers in creating some cool software.'
        buttonProps={{ disabled: true, label: 'Read More' }}
        themeColors={['#7C39BF', '#00D0FE', '#280749']}
        preview={cuHacking}
      />
      <Card
        title='cuHacking 2020'
        subtitle='Director of Development'
        description='Ottawa’s largest hackathon! Lead a team in creating apps which drastically improved hacker experience.'
        buttonProps={{ disabled: true, label: 'View Case Study' }}
        themeColors={['#7C39BF', '#280749']}
        preview={cuHacking2020}
      />
      <Card
        title='Ribbon'
        subtitle='Software Developer (Intern)'
        description='Worked on a tool allowed asynschronous, multi-agent tests to be run automatically through a reservation system.'
        buttonProps={{ disabled: true, label: 'Read More' }}
        themeColors={['#FF007F', '#C0059E', '#7E00B9', '#4B4B4B']}
        preview={ribbon}
      />
      <Card
        title='Saving Cindi'
        subtitle='Website Designer/Developer'
        description='A fantastic R&B and soul band based in Ottawa, Canada.'
        buttonProps={{ disabled: true, label: 'Read More' }}
        themeColors={['#00C9E4', '#D804A9']}
        preview={savingCindi}
      />
    </CardList>
  </FadeAnimation>
)

export default WorkPage
