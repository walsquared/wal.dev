import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  label: string
  link: string
}

const StyledButton = styled.button`
  background-color: red;
`
const Button = ({ label, link }: ButtonProps) => <button>{label}</button>

export default Button
