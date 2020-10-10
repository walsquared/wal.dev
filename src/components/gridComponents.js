import styled, { css } from 'styled-components'

export const gridItemStyle = css`
  padding: 15px 20px;
  margin-bottom: 20px;

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    font-family: var(--title-font);
  }

  h1 {
    font-size: 2rem;
  }

  h2,
  h3 {
    font-size: 1.5rem;
  }

  h3 {
    font-style: italic;
  }

  h4 {
    color: var(--green);
  }

  strong {
    font-weight: bold;
    background-color: var(--green);
  }

  em {
    font-style: normal;
    color: var(--green);
  }

  p {
    margin: 0;
    margin-top: 15px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 35px 40px;

    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.5em;
    }

    h4 {
      font-size: 1em;
    }

    p {
      font-size: 1.5em;
    }
  }
`

export const BasicGridItem = styled.div`
  ${gridItemStyle}
`

export const SimpleTile = styled(BasicGridItem)`
  border: 2px solid var(--black);
`

export const ColoredTile = styled(BasicGridItem)`
  background-color: var(--green);
  color: var(--white);
  font-family: var(--title-font);
  font-size: 2rem;

  p {
    font-size: 1rem;
    color: var(--black);
    font-family: var(--body-font);
  }

  @media only screen and (min-width: 1200px) {
    font-size: 3rem;
  }
`
