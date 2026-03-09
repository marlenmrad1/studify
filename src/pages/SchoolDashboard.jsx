export default function SchoolDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        School Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Homework</h2>
          <p className="text-gray-500">Check daily homework.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Subjects</h2>
          <p className="text-gray-500">View subjects and materials.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Progress</h2>
          <p className="text-gray-500">Track your progress.</p>
        </div>
      </div>
    </div>
  );
}