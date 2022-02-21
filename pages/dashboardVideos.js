import DashboardLayout from '../components/common/Layout/DashboardLayout'
import DashboardVideos from '../components/Dashboard/DashboardVideos'

export default function DashboardVideosPage() {
  return <DashboardVideos />
}

DashboardVideosPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
