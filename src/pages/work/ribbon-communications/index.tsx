import React from 'react'
import styled from 'styled-components'

import { Button } from 'components'
import Layout from 'components/layout'
import SEO from 'components/seo'

import coverUrl from './ribbon-cover.svg'

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
      title='Ribbon Communications'
      description='At Ribbon Communications I was placed on the Kandy Platform; a means of using Ribbon’s infrastructure on the web. I spent my time working on a tool for my team that allowed for automatic creation of online environments, which we used to test asynchronous scenarios created by the Kandy SDK.'
    />
    <CoverImage />
    <Page>
      <AttributesPane color='#FF007F'>
        <Attribute>
          <h2>Timeline</h2>
          <p>April 2019 - April 2020</p>
        </Attribute>
        <Attribute>
          <h2>Role</h2>
          <p>Software Developer (Intern)</p>
        </Attribute>
        <Attribute>
          <h2>Technologies</h2>
          <p>JavaScript, Express.js, WebSocket</p>
        </Attribute>

        <StyledButton color='#FF007F' disabled whiteTextHover label='Read Case Study' />
      </AttributesPane>
      <Description>
        <h1>Interning at Ribbon Communications</h1>
        <p>
          At Ribbon Communications I was placed on the Kandy Platform; a means of using Ribbon’s infrastructure on the
          web. I spent my time working on a tool for my team that allowed for automatic creation of online environments,
          which we used to test asynchronous scenarios created by the Kandy SDK.
          <br />
          <br />
          Check back here to read to find a link to my case study, where I’ll be reflecting on my experience on the SDK
          team.
        </p>
      </Description>
    </Page>
  </Layout>
)

export default Showcase
