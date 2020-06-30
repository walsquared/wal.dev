import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: var(--content-width);
  margin: 10px 0 50px;
`

const Logo = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 900;
`

const LogoSpan = styled.span`
  font-weight: normal;
`

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`

type ThemeColor = 'red' | 'turquoise' | 'orange' | 'purple'
const NavButton = styled(NavLink)<{ color: ThemeColor }>`
  border-radius: 25px;

  text-decoration: none;
  font-size: 21px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0px 25px;
  margin-left: 25px;

  &:hover {
    color: ${(props) => `var(--${props.color})`};
  }
`

const NavBar = () => (
  <StyledNavBar>
    <Logo to='/'>
      wal<LogoSpan>squared</LogoSpan>
    </Logo>
    <ButtonDiv>
      <NavButton
        color='red'
        exact
        to='/'
        activeStyle={{
          color: 'var(--white)',
          fontWeight: 'bold',
          backgroundColor: 'var(--red)'
        }}
      >
        work
      </NavButton>
      <NavButton
        color='turquoise'
        exact
        to='/about'
        activeStyle={{
          color: 'var(--white)',
          fontWeight: 'bold',
          backgroundColor: 'var(--turquoise)'
        }}
      >
        about
      </NavButton>
      <NavButton
        color='orange'
        exact
        to='/resume'
        activeStyle={{
          color: 'var(--white)',
          fontWeight: 'bold',
          backgroundColor: 'var(--orange)'
        }}
      >
        resume
      </NavButton>
      <NavButton
        color='purple'
        exact
        to='/blog'
        activeStyle={{
          color: 'var(--white)',
          fontWeight: 'bold',
          backgroundColor: 'var(--purple)'
        }}
      >
        blog
      </NavButton>
    </ButtonDiv>
  </StyledNavBar>
)

export default NavBar
