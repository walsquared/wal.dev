import React from 'react'
import styled from 'styled-components'

import Layout from 'components/layout'
import SEO from 'components/seo'

import coverUrl from './cuHacking-cover.svg'

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

const Showcase = () => (
  <Layout>
    <SEO
      title='cuHacking'
      description='Last year, my team succeeded in improving the hackathon experience by creating a suite of connected services for hackers and organizers to use during the event. This year we’re aiming higher, extrapolating our tools for use outside of the event setting and expanding functionality on the tools already proven successful.'
    />
    <CoverImage />
    <Page>
      <AttributesPane color='#7C39BF'>
        <Attribute>
          <h2>Timeline</h2>
          <p>
            January 2020 - <em>Present</em>
          </p>
        </Attribute>
        <Attribute>
          <h2>Role</h2>
          <p>Project Manager</p>
        </Attribute>
        <Attribute>
          <h2>Skills</h2>
          <p>Software Design (Architecture), Work Delegation, Decision Making</p>
        </Attribute>
      </AttributesPane>
      <Description>
        <h1>Developing for the Community at cuHacking</h1>
        <p>
          Last year, my team succeeded in improving the hackathon experience by creating a suite of connected services
          for hackers and organizers to use during the event. This year we’re aiming higher, extrapolating our tools for
          use outside of the event setting and expanding functionality on the tools already proven successful.
        </p>
      </Description>
    </Page>
  </Layout>
)

export default Showcase
