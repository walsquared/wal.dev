import React from 'react'
import styled from 'styled-components'

import { Button } from 'components'
import Layout from 'components/layout'
import SEO from 'components/seo'

import coverUrl from './saving-cindi-cover.jpg'

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
      title='Saving Cindi'
      description='A magnificent band from Ottawa, Canada. Focused on delivering powerful R&B, Soul, and Jazz, they’re a group to be on the lookout for! Last year their audience began to grow significantly, so naturally they wanted to claim a permanent space on the internet for their advertisment. Hence, I was tasked with making their website.'
    />
    <CoverImage />
    <Page>
      <AttributesPane color='#00C9E4'>
        <Attribute>
          <h2>Timeline</h2>
          <p>September 2019 - October 2019</p>
        </Attribute>
        <Attribute>
          <h2>Role</h2>
          <p>Software Developer (Intern)</p>
        </Attribute>
        <Attribute>
          <h2>Technologies</h2>
          <p>JavaScript, Express.js, WebSocket</p>
        </Attribute>
        <StyledButton color='#00C9E4' label='View Website' external link='https://savingcindi.com' />
      </AttributesPane>
      <Description>
        <h1>Making Saving Cindi’s Website</h1>
        <p>
          A magnificent band from Ottawa, Canada. Focused on delivering powerful R&B, Soul, and Jazz, they’re a group to
          be on the lookout for!
          <br />
          <br />
          Last year their audience began to grow significantly, so naturally, they wanted to claim a permanent space on
          the internet to establish their presence. Hence, I was tasked with making their website.
        </p>
      </Description>
    </Page>
  </Layout>
)

export default Showcase
