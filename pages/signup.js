import AuthLayout from '../components/common/Layout/AuthLayout'
import Signup from '../components/auth/Signup'

export default function SignupPage() {
  return <Signup />
}

SignupPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
