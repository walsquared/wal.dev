import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { MainLayout } from 'layouts'
import { useInterval } from 'hooks'
import { SEO, gridItemStyle, SimpleTile, ColoredTile, InlineExternalAnchor } from 'components'

const ProfileTileBeta = styled(Img)`
  ${gridItemStyle}
  grid-column: 1;
  grid-row: 1 / 3;
`

const ProfileTile = ({ img }) => <ProfileTileBeta fluid={img.childImageSharp.fluid} alt='Smirking Wal Wal' />

const TitleTileBeta = styled(ColoredTile)`
  span {
    font-weight: 700;
    font-size: 1.2em;
  }

  @media only screen and (min-width: 1200px) {
    span {
      font-size: 2em;
    }
  }
`

const TitleTile = () => (
  <TitleTileBeta>
    Wal Wal
    <br />
    <span>Web Developer</span>
    <p>
      Before you ask - Yes, my first name is actually the same as my last.{' '}
      <span role='img' aria-label='haha'>
        😅
      </span>
    </p>
  </TitleTileBeta>
)

const StatusTileBeta = styled(SimpleTile)`
  font-size: 1.25em;

  grid-column: 2 / 4;
  grid-row: 2 / 4;
`

const StatusTile = () => (
  <StatusTileBeta>
    <h2>
      What am I up to right now?{' '}
      <span role='img' aria-label='bullseye!'>
        🎯
      </span>
    </h2>
    <p>
      Focused on finding interesting problems to solve through projects or potential startups. While I'm not ideating
      I'm learning to play piano or playing{' '}
      <InlineExternalAnchor href='https://youtu.be/Bz8l935Bv0Y'>
        <cite>Hades</cite>
      </InlineExternalAnchor>
      . Also testing the Open Source waters.{' '}
      <span role='img' aria-label="Don't mind me!">
        👀
      </span>
    </p>
  </StatusTileBeta>
)

const AdjectiveTileBeta = styled(SimpleTile)`
  font-size: 1.25em;

  grid-column: 1;
  grid-row: 3 / 6;
`

const AdjectiveTile = () => {
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

    const componentify = (word) => <em>{word}</em>
    const [index, select] = useState(0)
    useInterval(() => select((index + 1) % adjectives.length), 500)

    return componentify(adjectives[index])
  }

  return (
    <AdjectiveTileBeta>
      <h1>
        I am <br />
        <Adjective />.
      </h1>
      <p>
        A <em>fullstack developer</em> who loves collaborating with others to create solutions that solve real-world and
        everyday problems.{' '}
        <span role='img' aria-label='BLM!'>
          ✊🏿
        </span>
      </p>
    </AdjectiveTileBeta>
  )
}

const TemplateTileBeta = styled(SimpleTile)``

const TemplateTile = () => <TemplateTileBeta></TemplateTileBeta>

const KotaTileBeta = styled(SimpleTile)`
  p {
    text-align: right;
  }
`

const KotaTile = () => (
  <KotaTileBeta>
    <h3>
      “If I say I love you then that's where it ends
      <br />
      You don't gotta have a title just to be my friend
      <br />
      You can have it all, I won't ask you for a damn thing
      <br />
      Welcome to my table, <strong>it don't matter what you can't bring</strong>”
    </h3>
    <p>
      <InlineExternalAnchor href='https://open.spotify.com/track/5av7NCtwaAsID0TJylcSD4?si=iPQBu256RkmQaO-tUmSyMQ'>
        <cite>Solar Return by Kota the Friend</cite>
      </InlineExternalAnchor>
    </p>
  </KotaTileBeta>
)

const MemeTileBeta = styled(SimpleTile)``

const MemeTile = ({ img }) => (
  <MemeTileBeta>
    <Img fluid={img.childImageSharp.fluid} />

    <p>
      <InlineExternalAnchor href='https://twitter.com/tasty/status/1280966608933003264'>context</InlineExternalAnchor>
    </p>
  </MemeTileBeta>
)

const DefundTileBeta = styled(SimpleTile)``

const DefundTile = () => (
  <DefundTileBeta>
    <h3>Defund the Police</h3>
    <p>
      Check out these flyers on{' '}
      <InlineExternalAnchor href='https://drive.google.com/drive/folders/1HUpCPvOwUJElxtUP4mCysAY9GyZrSmUk?usp=sharing'>
        <cite>alternatives to policing</cite>
      </InlineExternalAnchor>{' '}
      to see what this might look like.
    </p>
  </DefundTileBeta>
)

const AnimeTileBeta = styled(SimpleTile)``

const AnimeTile = ({ img }) => (
  <AnimeTileBeta>
    <Img fluid={img.childImageSharp.fluid} />
    <p>
      This scene from <cite>Tower of God</cite> is the greatest anime betrayal of all time. Prove me wrong.
    </p>
  </AnimeTileBeta>
)

const PrestigeTileBeta = styled(SimpleTile)``

const PrestigeTile = () => (
  <PrestigeTileBeta>
    <h3>
      “But at campus career centers, students are struggling with the dual, and sometimes dueling, desires for{' '}
      <strong>prestige and purpose</strong>."
    </h3>
    <p>
      <InlineExternalAnchor link='https://nyti.ms/2NerVLW'>
        <cite>‘Techlash’ Hits College Campuses</cite>
      </InlineExternalAnchor>{' '}
      is a short article that describes an attitude developing on campuses that I’ve sympathized with a lot.
    </p>
    <p>
      If you’re a student like me who will soon have to depart into the “real world”, I highly suggest giving it a quick
      read.
    </p>
  </PrestigeTileBeta>
)

const SpotifyDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 126.6%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`

const SongTileBeta = styled(SimpleTile)``

const SongTile = () => (
  <SongTileBeta>
    <SpotifyDiv>
      <iframe
        title='Favourite Song'
        src='https://open.spotify.com/embed/track/3nGhp4FuIaitNYn4s7XHaX'
        width='100%'
        height='100%'
        frameBorder={0}
        allow='encrypted-media'
      />
    </SpotifyDiv>
    <p>
      The song I currently have on repeat. I’m constantly searching for new music, so if there’s something you think I’d
      like send it my way.
    </p>
    <p>
      <InlineExternalAnchor href='https://open.spotify.com/user/pl1vqeducjzg0mwrciopnvlmo?si=zLempIPaTkayR4MkjojB2g'>
        Check out my Spotify
      </InlineExternalAnchor>
    </p>
  </SongTileBeta>
)

const ComeUpTileBeta = styled(SimpleTile)``

const ComeUpTile = () => (
  <ComeUpTileBeta>
    {' '}
    <h3>
      <strong>“What isn’t measured, isn’t managed.”</strong>
    </h3>
    <p>
      This quote has been said by many and has shown itself in different forms, however the person I heard it from was
      Bukola on her YouTube channel,{' '}
      <InlineExternalAnchor href='https://www.youtube.com/channel/UC-bFgwL_kFKLZA60AiB-CCQ'>
        <cite>The Come Up</cite>
      </InlineExternalAnchor>
      . She talks about some stuff that I personally find helpful on my professional journey.
    </p>
  </ComeUpTileBeta>
)

const ExperienceTileBeta = styled(Link)`
  ${gridItemStyle}

  display: flex;
  flex-direction: column;
  border: 2px solid var(--black);

  h3 {
    font-style: normal;
  }

  p {
    color: var(--grey);
  }

  @media only screen and (min-width: 1200px) {
    background-color: #ffffff;
    background-position: center;
    background-size: cover;
    background-blend-mode: overlay;

    transition: 0.1s ease-in;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    background-image: ${(props) => `url(${props.bkg})`};
  }
`

const ExperienceTile = ({ title, role, link, bkg }) => (
  <ExperienceTileBeta to={link} bkg={bkg}>
    <h4>EXPERIENCE</h4>
    <h3>{title}</h3>
    <p>{role}</p>
  </ExperienceTileBeta>
)

const ConnectTileBeta = styled(SimpleTile)`
  font-size: 1.25em;
`

const ConnectTile = () => (
  <ConnectTileBeta>
    <h2>Don't be shy, let's connect!</h2>
    <p>I'm always open to meeting new people. Let's talk about anything.</p>
  </ConnectTileBeta>
)

const SocialButtonBeta = styled.a`
  ${gridItemStyle}

  display: flex;
  flex-direction: column;
  border: 2px solid var(--black);
`

const getIcon = (label) => {
  switch (label) {
    case 'Twitter':
      return faTwitter
    case 'GitHub':
      return faGithub
    case 'Email':
      return faEnvelope
    default:
      return faLinkedin
  }
}

const SocialButton = ({ label, href }) => (
  <SocialButtonBeta href={href} rel='noopener noreferrer external'>
    <h1>
      <FontAwesomeIcon icon={getIcon(label)} /> {label}
    </h1>
  </SocialButtonBeta>
)

export default ({ data }) => (
  <MainLayout>
    <SEO />
    <ProfileTile img={data.profile} />
    <TitleTile />
    <AdjectiveTile />
    <StatusTile />
    <KotaTile />
    <MemeTile img={data.cake} />
    <DefundTile />
    <AnimeTile img={data.anime} />
    <PrestigeTile />
    <SongTile />
    <ComeUpTile />
    <ExperienceTile
      title='Leading Student Developers at cuHacking'
      role='Director of Development | cuHacking 2020'
      link='/experiences/cuhacking-2020'
      bkg={data.cuHacking2020.childImageSharp.fluid.src}
    />
    <ExperienceTile
      title='Automating the Automator'
      role='Software Developer | Ribbon'
      link='/experiences/ribbon-communications'
      bkg={data.ribbon.publicURL}
    />
    <ExperienceTile
      title="Making Saving Cindi's Website"
      role='Website Designer & Developer'
      link='/experiences/saving-cindi'
      bkg={data.savingCindi.childImageSharp.fluid.src}
    />
    <ConnectTile />
    <SocialButton label='Twitter' href='https://twitter.com/walsquared' />
    <SocialButton label='GitHub' href='https://github.com/Walsker' />
    <SocialButton label='Email' href='mailto:hello@walwal.me' />
    <SocialButton label='LinkedIn' href='https://linkedin.com/in/wal-wal' />
  </MainLayout>
)

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "smirk-profile.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cake: file(relativePath: { eq: "cake.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    anime: file(relativePath: { eq: "greatest-anime-betrayal.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cuHacking2020: file(relativePath: { eq: "cuHacking-2020-preview.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ribbon: file(relativePath: { eq: "ribbon-preview.svg" }) {
      publicURL
    }
    savingCindi: file(relativePath: { eq: "saving-cindi-preview.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
