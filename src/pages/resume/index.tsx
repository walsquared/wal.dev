import React from 'react'
import styled from 'styled-components'

import { Button, Divider } from 'components'
import resumeUrl from './resume-preview.jpg'

const StyledDivider = styled(Divider)`
  display: none;

  @media only screen and (min-width: 700px) {
    display: unset;
    width: 400px;
  }

  @media only screen and (min-width: 1200px) {
    width: 500px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: var(--mobile-width);
  height: calc(100vh - 285px); /* 285px comes from the combined height of the navbar and footer */

  min-height: 300px;

  @media only screen and (min-width: 700px) {
    height: unset;
  }

  @media only screen and (min-width: 1200px) {
    width: var(--desktop-width);
  }
`

const Dialogue = styled.p`
  width: 90%;
  text-align: center;
  margin: 40px 0 0;

  @media only screen and (min-width: 700px) {
    font-size: 1.5rem;
  }
`

const StyledButton = styled(Button)`
  margin: 70px 0;
`

const ResumePreview = styled.img`
  display: none;

  @media only screen and (min-width: 700px) {
    display: unset;

    width: var(--mobile-width);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 5vw;
    margin: 20px 0;

    opacity: 0;
    animation: fadeIn 1s ease-out 0.5s forwards;
    will-change: opacity, transform;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }

      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    width: var(--desktop-width);
    border-radius: 50px;
  }
`

const ResumePage = () => (
  <>
    <StyledDivider theme='orange' />
    <Content>
      <Dialogue>Look no further! You’ve found the candidate you’re looking for.😏</Dialogue>
      <StyledButton color='var(--orange)' label='Download' link='/wal_resume.pdf' />
    </Content>
    <ResumePreview src={resumeUrl} />
  </>
)

export default ResumePage
