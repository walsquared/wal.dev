import React, { useState } from 'react'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { ThemeColor } from 'src/types'
import CloseIcon from './closeButton'
import MenuIcon from './menuButton'

const StyledNavBar = styled.header`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  width: var(--mobile-width);
  padding: 10px calc(calc(100% - var(--mobile-width)) / 2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  @media only screen and (min-width: 700px) {
    background-color: unset;
    box-shadow: unset;
    width: var(--mobile-width);
    padding: 0;
    margin: 25px 0;
    position: relative;
    top: unset;
    left: unset;
  }

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const Logo = styled(Link)`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 900;
`

const LogoSpan = styled.span`
  font-weight: normal;
`

const ButtonDiv = styled.nav`
  display: none;

  @media only screen and (min-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`

const NavButton = styled(Link)<{ color: ThemeColor }>`
  @media only screen and (min-width: 700px) {
    font-family: 'Inter', sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
    text-decoration: none;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    margin-left: 35px;

    transition: 0.1s ease-in;

    &:hover {
      color: ${(props) => `var(--${props.color})`} !important;
    }
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

const MobileNavBar = styled(StyledNavBar)`
  position: relative;

  margin: 0;
  padding: 10px 0 50px;

  background-color: unset;
  box-shadow: unset;
`

const MenuButtonDiv = styled.nav`
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
      <MobileNavBar>
        <Logo to='/' onClick={props.close}>
          wal<LogoSpan>wal</LogoSpan>
        </Logo>
        <MenuButton type='button' onClick={props.close}>
          <CloseIcon />
        </MenuButton>
      </MobileNavBar>
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

  const pathname: Array<string> = useLocation().pathname.split('/')

  const colorMap = (route: string): ThemeColor => {
    switch (route) {
      case 'about':
        return 'green'
      case 'resume':
        return 'yellow'
      case 'blog':
        return 'blue'
      default:
        return 'red'
    }
  }

  return (
    <StyledNavBar>
      <MobileMenu isOpen={menuOpen} close={() => toggleMenu(false)} color={menuColor} />
      <Logo to='/'>
        wal<LogoSpan>wal</LogoSpan>
      </Logo>
      <MenuButton
        type='button'
        onClick={() => {
          toggleMenu(true)
          changeColor(colorMap(pathname[1]))
        }}
      >
        <MenuIcon />
      </MenuButton>
      <ButtonDiv>
        <NavButton
          color='red'
          to='/'
          getProps={({ isCurrent, location }) => {
            return {
              style: {
                color: isCurrent || location.pathname.split('/')[1] === 'work' ? 'var(--red)' : 'var(--text)'
              }
            }
          }}
        >
          work
        </NavButton>
        <NavButton
          color='green'
          to='/about'
          activeStyle={{
            color: 'var(--green)'
          }}
        >
          about
        </NavButton>
        <NavButton
          color='yellow'
          to='/resume'
          activeStyle={{
            color: 'var(--yellow)'
          }}
        >
          resume
        </NavButton>
        <NavButton
          color='blue'
          to='/blog'
          partiallyActive={true}
          activeStyle={{
            color: 'var(--blue)'
          }}
        >
          blog
        </NavButton>
      </ButtonDiv>
    </StyledNavBar>
  )
}

export default NavBar
