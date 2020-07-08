import React from 'react'
import styled from 'styled-components'

import { Button, Divider, LazyImage } from 'components'
import resumeUrl from './resume-preview.jpg'
import resumeThumb from './resume-preview-thumbnail.jpg'

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

const ResumePreview = styled(LazyImage)`
  display: none;

  @media only screen and (min-width: 700px) {
    display: unset;

    width: var(--mobile-width);
    height: calc(var(--mobile-width) * 1.3);
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
    height: calc(var(--desktop-width) * 1.3);
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
    <ResumePreview alt='Resume Preview' src={resumeUrl} thumbnail={resumeThumb} />
  </>
)

export default ResumePage
