import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import ExternalLink from './inlineExternalAnchor'

const Container = styled.div`
  width: var(--mobile-width);

  margin-bottom: 50px;

  @media only screen and (min-width: 1200px) {
    margin-bottom: 100px;
    max-width: var(--desktop-width);
  }
`

const Prompt = styled.p`
  @media only screen and (min-width: 700px) {
    max-width: 600px;
    font-size: 1.25rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`

const Tiles = styled.div`
  overflow: visible;
  column-count: 1;

  @media only screen and (min-width: 700px) {
    column-count: 2;
    column-gap: 20px;
  }

  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
`

const Tile = styled.div`
  padding: 5vw;
  margin-bottom: 5vw;

  border: 2px solid var(--black);

  h3 {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    font-style: italic;
  }

  h3 strong {
    font-weight: bold;
    background-color: var(--green);
  }

  p {
    margin: 33px 0 0 0;
  }

  p strong {
    font-weight: normal;
    font-style: italic;
  }

  @media only screen and (min-width: 700px) {
    display: inline-block;
    margin-bottom: 20px;
    padding: 33px 38px;
    width: calc(45vw - 90px); /** idk why this works, it should be 45vw - 20px - 100px */
  }

  @media only screen and (min-width: 1200px) {
    margin-bottom: 0;
    width: unset;

    display: flex;
    flex-direction: column;
  }
`

const TileToG = styled(Tile)`
  @media only screen and (min-width: 1200px) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
`

const TileKota = styled(Tile)`
  @media only screen and (min-width: 1200px) {
    grid-column: 2 / 4;
    grid-row: 1 / 2;
  }
`

const TileDefund = styled(Tile)`
  @media only screen and (min-width: 1200px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`

const TileMeasured = styled(Tile)`
  @media only screen and (min-width: 1200px) {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }
`

const TileSong = styled(Tile)`
  @media only screen and (min-width: 1200px) {
    grid-column: 3 / 4;
    grid-row: 2 / 7;
  }
`

const TilePrestige = styled(Tile)`
  @media only screen and (min-width: 1200px) {
    grid-column: 1 / 2;
    grid-row: 4 / 9;
  }
`

const TileMeme = styled(Tile)`
  @media only screen and (min-width: 1200px) {
    grid-column: 2 / 3;
    grid-row: 4 / 8;
  }
`

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

const SpotifyFrame = () => (
  <SpotifyDiv>
    <iframe
      src='https://open.spotify.com/embed/track/3nGhp4FuIaitNYn4s7XHaX'
      width='100%'
      height='100%'
      frameBorder={0}
      allow='encrypted-media'
    />
  </SpotifyDiv>
)

const MoodBoard = () => {
  const images = useStaticQuery(graphql`
    query {
      anime: file(relativePath: { eq: "greatest-anime-betrayal.png" }) {
        childImageSharp {
          fluid {
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
    }
  `)

  return (
    <Container>
      <Prompt>If I were to summarize what’s been on my mind, it would look something like...</Prompt>
      <Tiles>
        <TileToG>
          <Img fluid={images.anime.childImageSharp.fluid} />
          <p>
            This scene from <strong>Tower of God</strong> is the greatest anime betrayal of all time. Prove me wrong.
          </p>
        </TileToG>
        <TileKota>
          <h3>
            “If I say I love you then that's where it ends
            <br />
            You don't gotta have a title just to be my friend
            <br />
            You can have it all, I won't ask you for a damn thing
            <br />
            Welcome to my table, <strong>it don't matter what you can't bring</strong>”
          </h3>
          <ExternalLink
            link='https://open.spotify.com/track/5av7NCtwaAsID0TJylcSD4?si=iPQBu256RkmQaO-tUmSyMQ'
            style={{ display: 'inline-block', textAlign: 'right', marginTop: '10px' }}
          >
            <cite>Solar Return by Kota the Friend</cite>
          </ExternalLink>
        </TileKota>
        <TileDefund>
          <h3>Defund the Police</h3>
          <p>
            Check out these flyers about{' '}
            <ExternalLink link='https://drive.google.com/drive/folders/1HUpCPvOwUJElxtUP4mCysAY9GyZrSmUk?usp=sharing'>
              <cite>alternatives to policing</cite>
            </ExternalLink>{' '}
            to see what this might look like.
          </p>
        </TileDefund>
        <TilePrestige>
          <h3>
            “But at campus career centers, students are struggling with the dual, and sometimes dueling, desires for{' '}
            <strong>prestige and purpose</strong>."
          </h3>
          <p>
            <ExternalLink link='https://nyti.ms/2NerVLW'>
              <cite>‘Techlash’ Hits College Campuses</cite>
            </ExternalLink>{' '}
            is a short article that describes an attitude developing on campuses that I’ve sympathized with a lot. If
            you’re a student like me who will soon have to depart into the “real world”, I highly suggest giving it a
            quick read.
          </p>
        </TilePrestige>
        <TileMeasured>
          <h3>
            <strong>“What isn’t measured, isn’t managed.”</strong>
          </h3>
          <p>
            This quote has been said by many and has shown itself in different forms, however the person I heard it from
            was Bukola on her YouTube channel,{' '}
            <ExternalLink link='https://www.youtube.com/channel/UC-bFgwL_kFKLZA60AiB-CCQ'>
              <cite>The Come Up</cite>
            </ExternalLink>
            . She talks about some stuff that I personally find helpful on my professional journey.
          </p>
        </TileMeasured>
        <TileSong>
          <SpotifyFrame />
          <p>
            The song I currently have on repeat. I’m constantly searching for new music, so if there’s something you
            think I’d like send it my way.
          </p>
          <p>
            <ExternalLink link='https://open.spotify.com/user/pl1vqeducjzg0mwrciopnvlmo?si=zLempIPaTkayR4MkjojB2g'>
              Check out my Spotify
            </ExternalLink>
          </p>
        </TileSong>
        <TileMeme>
          <Img fluid={images.cake.childImageSharp.fluid} />

          <p>
            <ExternalLink link='https://twitter.com/tasty/status/1280966608933003264'>context</ExternalLink>
          </p>
        </TileMeme>
      </Tiles>
    </Container>
  )
}

export default MoodBoard
