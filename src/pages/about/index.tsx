import React, { useState } from 'react'
import styled from 'styled-components'

import { Button, Divider, FadeAnimation, LazyImage } from 'components'
import { useInterval } from 'hooks'
import smirkProfileUrl from './smirk-profile.jpg'
import smirkProfileThumb from './smirk-profile-thumbnail.jpg'
import acQuestionUrl from './ac-question.jpg'
import acQuestionThumb from './ac-question-thumbnail.jpg'

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: var(--mobile-width);
  margin: 50px 0 20px;

  font-size: 1.2rem;
  text-align: center;

  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 2rem;

    span {
      color: var(--turquoise);
      font-weight: 900;
    }
  }

  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
  }

  /* opacity: 0;
  animation: fadeIn 0.2s ease-out 0s forwards;
  will-change: opacity;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  } */

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: right;

    h1 {
      font-size: 2.25rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
    font-size: 1.5rem;

    h1 {
      font-size: 3rem;
    }
  }
`

const AcDiv = styled(ProfileDiv)`
  flex-direction: column-reverse;

  text-align: left;
  font-size: 1rem;

  /* animation-delay: 0.2s; */

  @media only screen and (min-width: 700px) {
    margin: 20px 0;

    text-align: left;
    font-size: 1.2rem;

    h1 {
      font-size: 3rem;
    }
  }
`

const ProfileImage = styled(LazyImage)`
  flex-shrink: 0;

  width: 80vw;
  height: 80vw;

  border-radius: 40vw;

  @media only screen and (min-width: 700px) {
    width: 300px;
    height: 300px;

    border-radius: 150px;

    margin-right: 30px;
  }

  @media only screen and (min-width: 1200px) {
    width: 450px;
    height: 450px;

    border-radius: calc(450px / 2);

    margin-right: 50px;
  }
`

const AcImage = styled(ProfileImage)`
  @media only screen and (min-width: 700px) {
    width: 200px;
    height: 200px;

    border-radius: 100px;

    margin-left: 30px;
  }

  @media only screen and (min-width: 1200px) {
    width: 350px;
    height: 350px;

    border-radius: calc(350px / 2);

    margin-right: 50px;
  }
`

const Dialogue = styled.section`
  width: var(--mobile-width);

  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 700px) {
    h2 {
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const DividerContainer = styled.div`
  /* opacity: 0;
  animation: fadeIn 0.2s ease-out 0.1s forwards;
  will-change: opacity;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  } */

  @media only screen and (min-width: 700px) {
    width: var(--mobile-width);
    max-width: var(--desktop-width);

    display: flex;
  }
`

// const DividerContainer2 = styled(DividerContainer)`
//   animation-delay: 0.3s;
// `

// const DividerContainer3 = styled(DividerContainer2)`
//   animation-delay: 0.5s;
// `

// const DividerContainer4 = styled(DividerContainer3)`
//   animation-delay: 0.7s;
// `

const StyledButton = styled(Button)`
  margin: 20px 0 50px;
`

const Adjective = () => {
  const adjectives = [
    'Wal Wal',
    'Wal Wal',
    'Wal Wal',
    'Wal Wal',
    'passionate',
    'smart',
    'a bass vocalist',
    'creative',
    'hard-working',
    'a Leo',
    'friendly',
    'motivated'
  ]

  const componentify = (word: string) => <span>{word}</span>
  const [index, select] = useState(0)
  useInterval(() => select((index + 1) % adjectives.length), 500)

  return componentify(adjectives[index])
}

const AboutPage = () => (
  <FadeAnimation delay={0.2}>
    <ProfileDiv>
      <ProfileImage alt='Profile picture - smirk' src={smirkProfileUrl} thumbnail={smirkProfileThumb} />
      <section>
        <h1>
          I am <Adjective />.
        </h1>
        <p>
          Glad you would like to learn a little more about me! 😊 Before you ask - Yes, my first name is actually the
          same as my last. Also, it's pronounced "wool". 🐑
        </p>
      </section>
    </ProfileDiv>
    <DividerContainer>
      <Divider theme='turquoise' />
    </DividerContainer>
    <AcDiv>
      <section>
        <h2>🎯A little more about what I’m up to at the moment...</h2>
        <ul>
          {/* <li>I’ve started a blog!</li> */}
          <li>Making some cool stuff as Director of Development at cuHacking</li>
          <li>Putting too many hours into Animal Crossing</li>
          <li>Recently completed a full year at Ribbon Communications as an intern</li>
        </ul>
      </section>
      <AcImage alt='Animal Crossing' src={acQuestionUrl} thumbnail={acQuestionThumb} />
    </AcDiv>
    <DividerContainer>
      <Divider theme='turquoise' />
    </DividerContainer>
    <Dialogue>
      <h2>⌛ About my past </h2>
      <p>
        I'm a <strong>South Sudanese</strong> Canadian raised in Ottawa, and currently attending{' '}
        <strong>Carleton University</strong> for <strong>Computer Science</strong> along with minor studies in Music (I
        know, it's a weird pairing). In high school I was the kid who dipped their fingers into every club - I was the
        lead in multiple school musicals, I was first clarinet in the concert band, and I handled the lights and sound
        for assemblies and performances as part of the "tech crew". I was even on the student council once. 😅 Now at
        Carleton I've (mostly) focused my many passions into <strong>programming</strong>.
      </p>
    </Dialogue>
    <Dialogue>
      <h2>Hold on, how did programming enter the picture? 🤔</h2>
      <p>
        I was fortunate enough that my high school offered Computer Science courses, of which I took three. They were
        all game development focused, but they still opened that door for me which I didn't know existed. It wasn't
        until my first hackathon (Random Hacks of Kindness, great hackathon by the way) in first year of university that
        I started branching out past game development.{' '}
        <strong>
          This is where I began to realize the limitless potential one carries with the ability to code and collaborate.
        </strong>{' '}
        Fast forward to today, now I do a little bit of everything when it comes to the tech industry - frontend,
        backend, dev-ops-y stuff and even designing (funny how history repeats itself 🙈). Currently, I'm finding myself
        in a more "Project Manager" or, dare I say “CTO” type position with my current role at cuHacking.
      </p>
    </Dialogue>
    <DividerContainer>
      <Divider theme='turquoise' />
    </DividerContainer>
    <Dialogue>
      <p>
        Today, I'm in a constant search for new friends and collaborators. I've also discovered that my passion has{' '}
        <strong>
          more to do with the new and amazing things you get to make as a developer, rather than coding itself
        </strong>
        . Pair that and the love for collaboration and you get a character who is eager to make apps that are larger
        than life itself...who then has to scale them back down to something reasonable. 🤷🏿‍♂️
      </p>
    </Dialogue>
    <Dialogue>
      <p>
        Want to get in touch? The inbox is open so <strong>contact me below</strong>.
      </p>
    </Dialogue>
    <DividerContainer>
      <StyledButton color='var(--turquoise)' label='Email me' external link='mailto:wal@walsquared.ca' />
    </DividerContainer>
  </FadeAnimation>
)

export default AboutPage
