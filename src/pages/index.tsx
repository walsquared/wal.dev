import React from 'react'
import styled from 'styled-components'

import { Button, ContactPrompt, Layout, SEO } from 'components'
import Card from 'components/card'

import cuHacking from 'images/cuHacking-preview.jpg'
import cuHacking2020 from 'images/cuHacking-2020-preview.jpg'
import ribbon from 'images/ribbon-preview.svg'
import savingCindi from 'images/saving-cindi-preview.jpg'

const Introduction = styled.div`
  display: flex;
  flex-direction: column;

  width: var(--mobile-width);
  margin-bottom: 100px;

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    max-width: var(--desktop-width);
  }
`

const NameText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: var(--red);
  color: var(--white);

  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 300;

  margin: 16px 0;
  padding: 5vw;

  span {
    font-size: 4rem;
    font-weight: 900;
  }

  p {
    margin: 0;
    color: var(--black);

    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: normal;
  }

  @media only screen and (min-width: 700px) {
    margin: 0;
    padding: 35px 40px;

    font-size: 3rem;

    span {
      font-size: 8rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    flex-shrink: 0;
    font-size: 4rem;

    span {
      font-size: 9rem;
    }
  }
`

const IntroText = styled.p`
  strong {
    color: var(--red);
    font-weight: normal;
  }

  @media only screen and (min-width: 700px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1200px) {
    padding-left: 40px;
    font-size: 2rem;
    margin: 0;
  }
`

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: var(--mobile-width);

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const Header = styled.h1`
  align-self: flex-start;

  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;

  @media only screen and (min-width: 700px) {
    font-size: 2rem;
  }
`

const CardList = styled.div`
  display: flex;
  flex-direction: column;

  width: var(--mobile-width);

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: var(--desktop-width);
  }
`

const WorkPage = () => (
  <Layout>
    <SEO title='Work' description={`Get a snapshot of Wal Wal's most recent endeavours.`} />
    <Introduction>
      <NameText>
        Hi, I'm
        <br />
        <span>Wal Wal.</span>
        <p>Nice of you to drop by! 👋🏿 </p>
      </NameText>
      <IntroText>
        A <strong>fullstack developer</strong> who loves collaborating with others to create solutions that solve
        real-world and everyday problems.✊🏿
        <br />
        <br />
        Currently looking for more opportunities! 💼
      </IntroText>
    </Introduction>
    <WorkContainer>
      <Header>Recent Works</Header>
      <CardList>
        <Card
          title='Pushing student developers beyond the CS curriculum'
          subtitle='Director of Development | cuHacking'
          themeColors={['#00D0FE', '#7C39BF', '#280749']}
          preview={cuHacking}
          linkProps={{
            link: '/',
            external: false
          }}
        />
        <Card
          title='Modernizing the “hackathon”'
          subtitle='Director of Development | cuHacking 2020'
          themeColors={['#7C39BF', '#280749']}
          preview={cuHacking2020}
          linkProps={{
            link: '/',
            external: false
          }}
        />
        <Card
          title='Automating the automator'
          subtitle='Software Developer (Intern) | Ribbon'
          themeColors={['#FF007F', '#C0059E', '#7E00B9', '#4B4B4B']}
          preview={ribbon}
          linkProps={{
            link: '/',
            external: false
          }}
        />
        <Card
          title='Saving Cindi’s Website'
          subtitle='Website Designer & Developer'
          themeColors={['#00C9E4', '#D804A9']}
          preview={savingCindi}
          linkProps={{
            link: 'https://savingcindi.com',
            external: true
          }}
        />
      </CardList>
    </WorkContainer>
    <ContactPrompt theme='red'>
      <h1>Don’t be shy, send me a message!</h1>
      <p>I’m always open to meeting new people. Let’s talk about anything.</p>
      <Button color='var(--red)' label='More About Me' link='/about' />
    </ContactPrompt>
  </Layout>
)

export default WorkPage
