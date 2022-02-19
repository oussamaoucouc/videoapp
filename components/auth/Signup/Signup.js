import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LinkButton from '../../ui/LinkButton'
import Spacer from '../../ui/Spacer'
import Input from '../../ui/Input'
import Loader from '../../ui/Loader'
import { setAuthToken } from '../../../utils/auth'

import * as styles from './styles'

import { gql, useMutation } from '@apollo/client'
import { validate } from 'email-validator'

export const SIGNUP_MUTATION = gql`
  mutation signup($input: SignupInput!) {
    signup(input: $input) {
      success
      message
      token
    }
  }
`
const Signup = () => {
  const router = useRouter()

  // Form State
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const [signup] = useMutation(SIGNUP_MUTATION)

  const handleSignup = async (e) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      const {
        data: { signup: result },
      } = await signup({
        variables: {
          input: {
            name: name,
            email: email,
            password: password,
          },
        },
      })
      if (result.success) {
        setAuthToken(result.token)

        router.replace('/')
      }
      setLoading(false)
      throw result
    } catch (e) {
      console.log(e)
      setMessage(e.message)
      setLoading(false)
      setDisabled(false)
    }
  }

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <styles.Wrapper>
      {loading && <Loader />}

      <styles.FormContainer>
        <form onSubmit={handleSignup}>
          <styles.Title h4>Sign up to start uploading</styles.Title>

          <Spacer y={24} />
          {message && <styles.ErrorMessage>{message}</styles.ErrorMessage>}
          <Input name="name" label="Name" value={name} onChange={setName} />

          <Input name="email" label="Email" value={email} onChange={setEmail} />

          <Input
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={setPassword}
          />

          <LinkButton>Forgot your password?</LinkButton>

          <Spacer y={24} />

          <styles.SignupButton disabled={disabled} htmlType="submit">
            Sign up 
          </styles.SignupButton>
          <Spacer y={24} />

          <styles.DontHaveAccountText p size="small">
            {"Don't have an account?"} <LinkButton>Sign up</LinkButton>
          </styles.DontHaveAccountText>
        </form>
      </styles.FormContainer>
    </styles.Wrapper>
  )
}

export default Signup
