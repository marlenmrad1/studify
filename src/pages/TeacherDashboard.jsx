import { Navigate, Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

export default function TeacherDashboard() {
  const role = localStorage.getItem("userRole");

  if (role !== "teacher") {
    return <Navigate to="/select-role" />;
  }

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-purple-600 mb-6">
        Teacher Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <Link to="/assignments" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Create Assignment</h2>
          <p className="text-gray-500">Upload and manage assignments.</p>
        </Link>

        <Link to="/students" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">View Students</h2>
          <p className="text-gray-500">Track student performance.</p>
        </Link>

        <Link to="/announcements" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Announcements</h2>
          <p className="text-gray-500">Post updates for students.</p>
        </Link>

      </div>
    </DashboardLayout>
  );
}