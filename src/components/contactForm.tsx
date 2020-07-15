import React from 'react'
import styled from 'styled-components'

import { ThemeColor } from '../types'

interface Props {
  theme: ThemeColor
}

const Form = styled.form<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5vw;
  width: var(--mobile-width);

  background-color: ${(props) => props.color};

  @media only screen and (min-width: 700px) {
    padding: 35px 40px;
    width: 300px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 35px 40px;
    width: 390px;
  }
`

const Field = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  width: 100%;

  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
`

const Input = styled.input`
  margin: 5px 0;
  padding: 0.5rem;

  border: 2px solid var(--black);
  background-color: #ffffff;

  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
`

const TextArea = styled.textarea`
  resize: none;
  margin-top: 5px;
  margin-bottom: -5px;
  padding: 0.5rem;

  border: 2px solid var(--black);
  background-color: #ffffff;

  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
`

const Button = styled.button<{ color: string }>`
  margin-top: 5vw;
  padding: 0.75rem 1rem;

  border: 2px solid var(--text);
  background-color: var(--bkg);
  color: var(--text);

  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;

  transition: 0.1s ease;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.color};
  }

  @media only screen and (min-width: 700px) {
    margin-top: 35px;
  }
`

const ContactForm = (props: Props) => (
  <Form color={`var(--${props.theme})`}>
    <Field>
      Name
      <Input required name='name' type='text' />
    </Field>
    <Field>
      Email
      <Input required name='email' type='email' />
    </Field>
    <Field>
      Message
      <TextArea rows={7} required></TextArea>
    </Field>
    <Button type='submit' color={`var(--${props.theme})`}>
      Send Message
    </Button>
  </Form>
)

export default ContactForm
