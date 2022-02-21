import DashboardLayout from '../components/common/Layout/DashboardLayout'
import DashboardDesc from '../components/Dashboard/DashboardDesc'

export default function DashboardDescPage() {
  return <DashboardDesc />
}

DashboardDescPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
