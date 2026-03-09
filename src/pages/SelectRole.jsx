import { useNavigate } from "react-router-dom";

export default function SelectRole() {
  const navigate = useNavigate();

  const handleRole = (role) => {
    // save role
    localStorage.setItem("userRole", role);

    // navigate
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px] text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">
          Choose your role
        </h2>

        <div className="space-y-4">
          <button
            onClick={() => handleRole("teacher")}
            className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600"
          >
            Teacher
          </button>

          <button
            onClick={() => handleRole("university")}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
          >
            University Student
          </button>

          <button
            onClick={() => handleRole("school")}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
          >
            School Student
          </button>
        </div>
      </div>
    </div>
  );
}