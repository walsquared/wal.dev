import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { ThemeColor } from 'src/types'
import LoadingSpinner from './loadingSpinner'

const containerStyle = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 5vw;
  width: calc(var(--mobile-width) - 10vw);
  min-height: 420px;

  @media only screen and (min-width: 700px) {
    padding: 35px 40px;
    width: 300px;
    min-height: 460px;
  }

  @media only screen and (min-width: 1200px) {
    width: 355px;
  }
`

const FormContainer = styled.form<{ color: string }>`
  ${containerStyle}
  align-items: flex-start;
  justify-content: space-between;

  background-color: ${(props) => props.color};
`

const RegularContainer = styled.form<{ color: string }>`
  ${containerStyle}
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.color};

  /* color: var(--white); */
  color: ${(props) => (props.color === 'var(--yellow)' ? `var(--black)` : `var(--white)`)};
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
const FormMessage = styled.p`
  text-align: center;
  font-size: 1.125rem;

  @media only screen and (min-width: 700px) {
    font-size: 1.4rem;
  }
`

interface Props {
  theme: ThemeColor
}

const Form = (props: Props) => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'submitted' | 'failed'>('idle')

  // See: https://usebasin.com/docs/features/ajax
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState('loading')

    const { currentTarget: form } = event

    let formData = new FormData(form)
    let xhr = new XMLHttpRequest()

    console.log('data:', formData)
    xhr.open('POST', form.action, true)

    xhr.onload = () => {
      if (xhr.status === 200) {
        setFormState('submitted')
        form.reset()
      } else {
        setFormState('failed')
      }
    }

    xhr.send(formData)
  }

  switch (formState) {
    case 'idle':
      return (
        <FormContainer
          color={`var(--${props.theme})`}
          action='https://usebasin.com/f/9d85adb927f2'
          method='POST'
          onSubmit={submitForm}
          id='blog-contact-form'
        >
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
            <TextArea required name='message' rows={7}></TextArea>
          </Field>
          <Button type='submit' color={`var(--${props.theme})`}>
            Send Message
          </Button>
        </FormContainer>
      )
    case 'loading':
      return (
        <RegularContainer color={`var(--${props.theme})`}>
          <LoadingSpinner color={props.theme === 'yellow' ? `var(--black)` : `var(--white)`} />
        </RegularContainer>
      )
    case 'submitted':
      return (
        <RegularContainer color={`var(--${props.theme})`}>
          <FormMessage>
            Thanks!
            <br />
            We'll be in touch. 🙂
          </FormMessage>
        </RegularContainer>
      )
    case 'failed':
      return (
        <RegularContainer color={`var(--${props.theme})`}>
          <FormMessage>
            Something went wrong. 😶
            <br />
            Please try again later.
          </FormMessage>
        </RegularContainer>
      )
  }
}

export default Form
