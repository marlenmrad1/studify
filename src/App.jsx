import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SelectRole from "./pages/SelectRole";
import TeacherDashboard from "./pages/TeacherDashboard";
import UniversityDashboard from "./pages/UniversityDashboard";
import SchoolDashboard from "./pages/SchoolDashboard";
import Assignments from "./pages/Assignments";
import Students from "./pages/Students";
import Announcements from "./pages/Announcements";
import CreateClass from "./pages/CreateClass";
import JoinClass from "./pages/JoinClass";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/select-role" element={<SelectRole />} />
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/university" element={<UniversityDashboard />} />
      <Route path="/school" element={<SchoolDashboard />} />
      <Route path="/assignments" element={<Assignments />} />
<Route path="/students" element={<Students />} />
<Route path="/announcements" element={<Announcements />} />
<Route path="/create-class" element={<CreateClass />} />
<Route path="/join-class" element={<JoinClass />} />
    </Routes>
  );
}

export default App;