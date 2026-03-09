import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import generateClassCode from "../utils/generateClassCode";

export default function CreateClass() {
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [createdClass, setCreatedClass] = useState(null);

  const handleCreateClass = (e) => {
    e.preventDefault();

    const newClass = {
      id: Date.now(),
      name: className,
      subject,
      code: generateClassCode(),
      students: [],
    };

    const existingClasses =
      JSON.parse(localStorage.getItem("classes")) || [];

    existingClasses.push(newClass);
    localStorage.setItem("classes", JSON.stringify(existingClasses));

    setCreatedClass(newClass);
    setClassName("");
    setSubject("");
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Create Class</h1>

      <form
        onSubmit={handleCreateClass}
        className="bg-white p-6 rounded-xl shadow-md max-w-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700"
        >
          Create Class
        </button>
      </form>

      {createdClass && (
        <div className="mt-6 bg-green-50 border border-green-200 p-5 rounded-xl max-w-lg">
          <h2 className="text-xl font-semibold mb-2">Class Created Successfully</h2>
          <p><strong>Name:</strong> {createdClass.name}</p>
          <p><strong>Subject:</strong> {createdClass.subject}</p>
          <p>
            <strong>Join Code:</strong>{" "}
            <span className="text-indigo-600 font-bold tracking-widest">
              {createdClass.code}
            </span>
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}