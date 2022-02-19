import AuthLayout from '../components/common/Layout/AuthLayout'
import ResetPassword from '../components/auth/ResetPassword'

export default function ResetPasswordPage() {
  return <ResetPassword />
}

ResetPasswordPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
