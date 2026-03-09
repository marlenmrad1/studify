import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const role = localStorage.getItem("userRole");

  const logout = () => {
    localStorage.removeItem("userRole");
    window.location.href = "/";
  };

  return (
    <div className="w-64 bg-indigo-700 text-white min-h-screen flex flex-col p-6">

      {/* Logo */}
      <h2 className="text-2xl font-bold mb-8">Studify</h2>

      {/* Teacher Sidebar */}
      {role === "teacher" && (
        <nav className="flex flex-col gap-3">

          <NavLink
            to="/teacher"
            className={({ isActive }) =>
              `p-3 rounded-lg ${
                isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/create-class"
            className={({ isActive }) =>
              `p-3 rounded-lg ${
                isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
              }`
            }
          >
            Create Class
          </NavLink>

          <NavLink
            to="/assignments"
            className={({ isActive }) =>
              `p-3 rounded-lg ${
                isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
              }`
            }
          >
            Assignments
          </NavLink>

          <NavLink
            to="/students"
            className={({ isActive }) =>
              `p-3 rounded-lg ${
                isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
              }`
            }
          >
            Students
          </NavLink>

          <NavLink
            to="/announcements"
            className={({ isActive }) =>
              `p-3 rounded-lg ${
                isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
              }`
            }
          >
            Announcements
          </NavLink>

        </nav>
      )}

      {/* Student Sidebar */}
      {role === "school" && (
        <nav className="flex flex-col gap-3">

          <NavLink
            to="/school"
            className={({ isActive }) =>
              `p-3 rounded-lg ${
                isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/join-class"
            className={({ isActive }) =>
              `p-3 rounded-lg ${
                isActive ? "bg-indigo-500" : "hover:bg-indigo-600"
              }`
            }
          >
            Join Class
          </NavLink>

        </nav>
      )}

      {/* Logout button */}
      <div className="mt-auto pt-6">
        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 p-3 rounded-lg"
        >
          Logout
        </button>
      </div>

    </div>
  );
}