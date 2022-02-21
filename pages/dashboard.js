import DashboardLayout from '../components/common/Layout/DashboardLayout'
import Dashboard from '../components/Dashboard'

export default function DashboardPage() {
  return <Dashboard />
}

DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
