export default function UniversityDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        University Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">My Courses</h2>
          <p className="text-gray-500">Access enrolled courses.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Assignments</h2>
          <p className="text-gray-500">Submit and review assignments.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Grades</h2>
          <p className="text-gray-500">View academic performance.</p>
        </div>
      </div>
    </div>
  );
}