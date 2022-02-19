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

export const ForgotPassword_MUTATION = gql`
  mutation ForgotPassword($input: ForgotPasswordInput!) {
    ForgotPassword(input: $input) {
      success
      message
      token
    }
  }
`
const ForgotPassword = () => {
  const router = useRouter()

  // Form State
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const [forgotPassword] = useMutation(ForgotPassword_MUTATION)

  const handleForgotPassword = async (e) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
     
    }

    try {
      setLoading(true)
      setMessage('')
      const {
        data: { forgotPassword: result },
      } = await forgotPassword({
        variables: {
          input: {
            email: email
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

  return (
    <styles.Wrapper>
      {loading && <Loader />}

      <styles.FormContainer>
        <form onSubmit={handleForgotPassword}>
          <styles.Title h4>Forgot your password?</styles.Title>
          <Spacer y={10} />
          <styles.TitleText p>It's okay, we get you! What's your email address?</styles.TitleText>
          <Spacer y={40} />
          {message && <styles.ErrorMessage>{message}</styles.ErrorMessage>}
          <Input name="email" label="Email" value={email} onChange={setEmail} />

          <Spacer y={24} />

          <styles.ForgotPasswordButton disabled={disabled} htmlType="submit">
            Reset password
          </styles.ForgotPasswordButton>
          <Spacer y={24} />

          <styles.DontHaveAccountText p size="small">
            {"Oh wait! I remembered!"} 
          </styles.DontHaveAccountText>  
          <styles.DontHaveAccountText p size="small">
            {"Back to"} <LinkButton>Sign in</LinkButton>
          </styles.DontHaveAccountText>
        </form>
      </styles.FormContainer>
    </styles.Wrapper>
  )
}

export default ForgotPassword
