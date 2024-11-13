import Overview from "@/components/pages/Overview";
import PrivateRoute from "@/components/PrivateRoute";

export default function DashboardPage() {
  return (
    <PrivateRoute>
      <Overview />
    </PrivateRoute>
  );
}
