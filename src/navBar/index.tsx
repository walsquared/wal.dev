import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { ThemeColor } from 'types'
import { ReactComponent as CloseIcon } from './close-button.svg'
import { ReactComponent as MenuIcon } from './menu-button.svg'

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  width: var(--mobile-width);
  max-width: var(--desktop-width);
  margin: 10px 0 50px;
`

const Logo = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 900;
`

const LogoSpan = styled.span`
  font-weight: normal;
`

const ButtonDiv = styled.div`
  display: none;

  @media only screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`

const NavButton = styled(NavLink)<{ color: ThemeColor }>`
  @media only screen and (min-width: 700px) {
    text-decoration: none;
    font-size: 1.3rem;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    padding: 0px 25px;
    margin-left: 1vw;
    border-radius: 25px;

    transition: 0.1s ease-in;

    &:hover {
      color: ${(props) => `var(--${props.color})`};
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 25px;
  }
`

const MenuButton = styled.button`
  border: none;
  background: none;
  padding: 5px 0 0 0;

  width: 35px;
  height: 50px;

  &:active {
    opacity: 0.5;
  }

  @media only screen and (min-width: 700px) {
    display: none;
  }
`

const StyledMobileMenu = styled.div<{ isOpen: boolean; color: ThemeColor }>`
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => `var(--${props.color})`};
  color: var(--white);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${(props) => (props.isOpen ? '100vh' : '0')};

  transition: height 0.5s cubic-bezier(0.39, 0.75, 0.1, 0.98);

  @media only screen and (min-width: 700px) {
    display: none;
  }
`

const MenuButtonDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: var(--mobile-width);
`

const MenuNavButton = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 4rem;

  margin: 5px 0;
`

interface MenuProps {
  isOpen: boolean
  color: ThemeColor
  close(): void
}

const MobileMenu = (props: MenuProps) => {
  return (
    <StyledMobileMenu isOpen={props.isOpen} color={props.color}>
      <StyledNavBar>
        <Logo to='/' onClick={props.close}>
          wal<LogoSpan>squared</LogoSpan>
        </Logo>
        <MenuButton type='button' onClick={props.close}>
          <CloseIcon />
        </MenuButton>
      </StyledNavBar>
      <MenuButtonDiv>
        <MenuNavButton onClick={props.close} to='/'>
          work
        </MenuNavButton>
        <MenuNavButton onClick={props.close} to='/about'>
          about
        </MenuNavButton>
        <MenuNavButton onClick={props.close} to='/resume'>
          resume
        </MenuNavButton>
        <MenuNavButton onClick={props.close} to='/blog'>
          blog
        </MenuNavButton>
      </MenuButtonDiv>
    </StyledMobileMenu>
  )
}

const NavBar = () => {
  const [menuOpen, toggleMenu] = useState(false)
  const [menuColor, changeColor] = useState<ThemeColor>('red')

  const route: Array<string> = useLocation().pathname.split('/')

  const colorMap = (route: string): ThemeColor => {
    switch (route) {
      case 'about':
        return 'turquoise'
      case 'resume':
        return 'orange'
      case 'blog':
        return 'purple'
      default:
        return 'red'
    }
  }

  return (
    <StyledNavBar>
      <MobileMenu isOpen={menuOpen} close={() => toggleMenu(false)} color={menuColor} />
      <Logo to='/'>
        wal<LogoSpan>squared</LogoSpan>
      </Logo>
      <MenuButton
        type='button'
        onClick={() => {
          toggleMenu(true)
          changeColor(colorMap(route[1]))
        }}
      >
        <MenuIcon />
      </MenuButton>
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
}

export default NavBar
