import React from 'react'
import styled from 'styled-components'

import Paginator from './paginator'

const BlogText = styled.div`
  background-color: var(--blue);
  color: var(--white);

  margin: 0 0 100px;
  padding: 0 5vw;
  width: calc(var(--mobile-width) - 10vw);

  font-size: 1.2rem;
  text-align: center;

  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 2rem;

    span {
      color: var(--white);
      font-weight: 900;
    }
  }

  @media only screen and (min-width: 700px) {
    padding: 35px 40px;
    width: calc(var(--mobile-width) - 80px);
    max-width: 600px;

    h1 {
      margin: 0;
      font-size: 2.25rem;
    }

    p {
      margin: 20px 0 0 0;
    }
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.5rem;
    max-width: 800px;

    h1 {
      font-size: 3rem;
    }

    p {
      margin: 35px 0 0 0;
    }
  }
`

const BlogPage = () => {
  console.log(new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }).toUpperCase())
  return (
    <>
      <BlogText>
        <h1>A simple blog.</h1>
        <p>My thoughts, lessons, and experiences immortalized for your consumption. 📎</p>
      </BlogText>
      <Paginator />
    </>
  )
}

export default BlogPage
