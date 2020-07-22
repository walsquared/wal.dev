import React from 'react'
import styled from 'styled-components'

import { Button, ContactPrompt, Layout, SEO } from 'components'
import bulletSvg from './bullet.svg'

const SnarkyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: var(--mobile-width);
  margin: 0 5vw 50px;

  @media only screen and (min-width: 900px) {
    align-items: flex-start;
  }

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const SnarkyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw;

  background-color: var(--yellow);

  font-size: 1.2rem;
  text-align: center;

  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 2rem;

    margin: 0;
  }

  p {
    margin: 10px 0 5vw;
  }

  @media only screen and (min-width: 900px) {
    padding: 35px 40px;
    align-items: flex-start;
    text-align: left;

    p {
      margin-bottom: 35px;
    }
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.5rem;

    h1 {
      font-size: 3rem;
    }
  }
`

const Preview = styled.div`
  width: var(--mobile-width);
  columns: 1;

  @media only screen and (min-width: 900px) {
    columns: 2;
    column-gap: 20px;
  }

  @media only screen and (min-width: 900px) {
    max-width: var(--desktop-width);
  }
`

const Card = styled.div`
  border: 2px solid var(--black);
  padding: 5vw;
  margin-bottom: 5vw;

  display: inline-block;

  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 1.75rem;
    margin: 5px 0;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: normal;
    color: #888;
    margin: 0;
  }

  ul {
    list-style: url(${bulletSvg});
    padding-left: 1rem;
  }

  @media only screen and (min-width: 900px) {
    margin-bottom: 20px;
    padding: 33px 38px;
  }
`

const CardCuHacking = styled(Card)`
  @media only screen and (min-width: 900px) {
    grid-column: 1 / 2;
    grid-row: 1 / span 3;
  }
`

const CardCsr = styled(Card)`
  @media only screen and (min-width: 900px) {
    grid-column: 2 / 3;
    grid-row: 1 / span 2;
  }
`

const CardRibbon = styled(Card)`
  @media only screen and (min-width: 900px) {
    grid-column: 2 / 3;
    grid-row: 3 / span 3;
  }
`

const CardAlp = styled(Card)`
  @media only screen and (min-width: 900px) {
    grid-column: 1 / 2;
    grid-row: 4 / span 3;
  }
`

const Tag = styled.p`
  background: var(--yellow);
  margin: 0;
  width: max-content;

  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-style: italic;
  font-size: 0.9rem;
`

const ResumePage = () => (
  <Layout>
    <SEO
      title='Resume'
      description={`Look no further!😎 You may have just come to the last stop in your search for talent.`}
    />
    <SnarkyDiv>
      <SnarkyText>
        <h1>Look no further!😎</h1>
        <p>You may have just come to the last stop in your search for talent.</p>
        <Button color='var(--yellow)' label='Download My Resume' link='/wal_resume.pdf' />
      </SnarkyText>
    </SnarkyDiv>
    <Preview>
      <CardCuHacking>
        <Tag>Volunteer Experience</Tag>
        <h2>Director of Development</h2>
        <h3>cuHacking | April 2019 - Present</h3>
        <ul>
          <li>
            <strong>(2021 Season)</strong> Managing a large group of developers working to develop several applications
            for the benefit of all students at Carleton University
          </li>
          <li>
            <strong>(2020 Season)</strong> Coordinated a team of six developers to create a suite of online services
            used to augment the experience of 600+ hackers at cuHacking 2020
          </li>
          <li>
            <strong>(2020 Season)</strong> Designed a system of web applications capable of handling the hackathon's
            applications to effectively process 1200+ registered applicants
          </li>
        </ul>
      </CardCuHacking>
      <CardCsr>
        <Tag>Work Experience</Tag>
        <h2>Service Representative</h2>
        <h3>City of Ottawa | September 2019 - Present</h3>
        <ul>
          <li>
            <strong>Process</strong> registrations for programs and events at City of Ottawa facilities while providing
            friendly and knowledgeable customer service
          </li>
        </ul>
      </CardCsr>
      <CardRibbon>
        <Tag>Work Experience</Tag>
        <h2>Software Developer (Intern)</h2>
        <h3>Ribbon Communications (Kandy.io) | April 2019 - May 2020</h3>
        <ul>
          <li>
            <strong>Focused</strong> on developing a tool (name: Werkout) which was used to reproduce isolated online
            environments involving multiple web apps by acting as a resource manager
          </li>
          <li>
            <strong>Refactored</strong> a project which used Werkout to execute end-to-end tests on the Kandy SDK in the
            CI process eliminating the need for manual regression tests
          </li>
          <li>
            <strong>Educated</strong> the rest of the team on how to write new end-to-end tests effectively to
            capitalize on my improvements to the Werkout project
          </li>
        </ul>
      </CardRibbon>
      <CardAlp>
        <Tag>Work Experience</Tag>
        <h2>Advanced Leadership Instructor</h2>
        <h3>City of Ottawa | February 2018 - April 2019</h3>
        <ul>
          <li>
            <strong>Educated</strong> youth ages 16-21 on essential leadership skills such as teamwork, communication,
            and management styles which allowed them to integrate smoothly into the City of Ottawa workplace
          </li>
          <li>
            <strong>Established</strong> myself as a positive role model which any of the youth could reach out to for
            inquiries regarding school school, work, or personal life
          </li>
        </ul>
      </CardAlp>
    </Preview>
    <ContactPrompt theme='yellow'>
      <h1>Convinced? You don’t have to wait.</h1>
      <p>I’m currently looking for more opportunities!</p>
    </ContactPrompt>
  </Layout>
)

export default ResumePage
