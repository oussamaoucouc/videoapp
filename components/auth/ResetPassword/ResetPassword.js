import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LinkButton from '../../ui/LinkButton'
import Spacer from '../../ui/Spacer'
import Input from '../../ui/Input'
import Loader from '../../ui/Loader'
import { setAuthToken } from '../../../utils/auth'

import * as styles from './styles'

import { gql, useMutation } from '@apollo/client'

export const RESETPASSWORD_MUTATION = gql`
  mutation resetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      success
      message
      token
    }
  }
`
const ResetPassword = () => {
  const router = useRouter()

  // Form State
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const [login] = useMutation(RESETPASSWORD_MUTATION)

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      const {
        data: { login: result },
      } = await login({
        variables: {
          input: {
            newPassword: password,
            comNewPassword: newPassword,
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
      setDisabled( newPassword.length < 7  || !validPassword)
    }
  }, [newPassword, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <styles.Wrapper>
      {loading && <Loader />}

      <styles.FormContainer>
        <form onSubmit={handleLogin}>
          <styles.Title h4>Reset your password</styles.Title>

          <Spacer y={40} />
          {message && <styles.ErrorMessage>{message}</styles.ErrorMessage>}
          
          <Input
            name="newPassword"
            type="password"
            label="New Password"
            value={password}
            onChange={setPassword}
          />

          <Input
            name="comNewPassword"
            type="password"
            label="Confirm New Password"
            value={password}
            onChange={setPassword}
          />


          <Spacer y={24} />

          <styles.ResetPasswordButton disabled={disabled} htmlType="submit">
            Submit
          </styles.ResetPasswordButton>
          <Spacer y={24} />

        </form>
      </styles.FormContainer>
    </styles.Wrapper>
  )
}

export default ResetPassword
