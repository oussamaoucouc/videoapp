import AuthLayout from '../components/common/Layout/AuthLayout'
import ForgotPassword from '../components/auth/ForgotPassword'

export default function ForgotPasswordPage() {
  return <ForgotPassword />
}

ForgotPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
