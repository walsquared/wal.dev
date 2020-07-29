import React from 'react'
import styled from 'styled-components'

import { Button } from 'components'
import Layout from 'components/layout'
import SEO from 'components/seo'

import coverUrl from './cuHacking-2020-cover.jpg'

const CoverImage = styled.div`
  width: 100vw;
  height: 200px;
  border-top: 2px solid var(--black);
  border-bottom: 2px solid var(--black);
  background: center / cover no-repeat url(${coverUrl});

  @media only screen and (min-width: 700px) {
    margin-bottom: 35px;
    height: 300px;
  }
  @media only screen and (min-width: 1200px) {
    height: 400px;
  }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: var(--mobile-width);

  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const AttributesPane = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(var(--mobile-width) - 10vw);

  padding: 5vw 5vw 0;
  margin: 5vw 0;

  background-color: ${(props) => props.color};

  @media only screen and (min-width: 700px) {
    flex-shrink: 0;
    width: 200px;
    margin: 0 5vw 0 0;
    padding: 35px 40px 0;
  }

  @media only screen and (min-width: 1200px) {
    width: 320px;
    margin: 0 40px 0 0;
  }
`

const Attribute = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: var(--white);

  margin-bottom: 20px;

  h2 {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    margin: 0;
  }

  @media only screen and (min-width: 700px) {
    margin-bottom: 35px;
  }
`

const Description = styled.div`
  h1 {
    font-family: 'Inter', sans-serif;
  }

  @media only screen and (min-width: 700px) {
    p {
      font-size: 1.25rem;
    }
  }
`

const StyledButton = styled(Button)`
  margin-bottom: 5vw;

  @media only screen and (min-width: 700px) {
    margin-bottom: 35px;
  }
`

const Showcase = () => (
  <Layout>
    <SEO
      title='cuHacking 2020'
      description='As Director of Development, my role was to manage the technology which cuHacking uses. Originally this “technology” was just the event website, however, I grew it into something a lot bigger. Of course, wasn’t alone in this endeavour. I lead a team of five other skilled developers in making what ended up being the most ambitious undertaking for cuHacking to date.'
    />
    <CoverImage />
    <Page>
      <AttributesPane color='#000'>
        <Attribute>
          <h2>Timeline</h2>
          <p>April 2019 - January 2020</p>
        </Attribute>
        <Attribute>
          <h2>Role</h2>
          <p>Lead Developer</p>
        </Attribute>
        <Attribute>
          <h2>Technologies</h2>
          <p>Figma, React.js, Express.js, Firebase</p>
        </Attribute>
        <Attribute>
          <h2>Soft Skills</h2>
          <p>Project Management, Organization, Communication, Teamwork</p>
        </Attribute>
        <StyledButton color='#000' whiteTextHover label='Read Case Study' disabled />
      </AttributesPane>
      <Description>
        <h1>Leading Developers at cuHacking</h1>
        <p>
          As Director of Development, my role was to manage the technology which cuHacking uses. Originally this
          “technology” was just the event website, however, I grew it into something a lot bigger. Of course, wasn’t
          alone in this endeavour. I lead a team of five other skilled developers in making what ended up being the most
          ambitious undertaking for cuHacking to date.
          <br />
          <br />
          Check back here to read to find a link to my case study, where I’ll be analyzing the rollercoaster ride of a
          time I had last year.
        </p>
      </Description>
    </Page>
  </Layout>
)

export default Showcase
