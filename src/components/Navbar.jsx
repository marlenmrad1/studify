import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const role = localStorage.getItem("userRole");

  return (
    <div className="w-full bg-white shadow-sm p-4 flex justify-between items-center">

      {/* Page title */}
      <h2 className="text-xl font-semibold text-gray-700">
        Dashboard
      </h2>

      {/* User info */}
      <div className="flex items-center gap-3 text-gray-600">
        <FaUserCircle size={24} />
        <span className="capitalize">{role}</span>
      </div>

    </div>
  );
}