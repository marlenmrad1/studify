import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main section */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <Navbar />

        {/* Page content */}
        <div className="p-8 bg-gray-100 min-h-screen">
          {children}
        </div>

      </div>

    </div>
  );
}