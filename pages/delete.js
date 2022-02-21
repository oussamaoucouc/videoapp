import DashboardLayout from '../components/common/Layout/DashboardLayout'
import DeleteVideo from '../components/Dashboard/DeleteVideo'

export default function DeleteVideoPage() {
  return <DeleteVideo/>
}

DeleteVideoPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
