import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function JoinClass() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleJoinClass = (e) => {
    e.preventDefault();

    const classes = JSON.parse(localStorage.getItem("classes")) || [];
    const foundClass = classes.find(
      (cls) => cls.code.toUpperCase() === code.toUpperCase()
    );

    if (!foundClass) {
      setMessage("Class code not found.");
      return;
    }

    const joinedClasses =
      JSON.parse(localStorage.getItem("joinedClasses")) || [];

    const alreadyJoined = joinedClasses.find((cls) => cls.code === foundClass.code);

    if (alreadyJoined) {
      setMessage("You already joined this class.");
      return;
    }

    joinedClasses.push(foundClass);
    localStorage.setItem("joinedClasses", JSON.stringify(joinedClasses));

    setMessage(`Successfully joined ${foundClass.name}`);
    setCode("");
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Join Class</h1>

      <form
        onSubmit={handleJoinClass}
        className="bg-white p-6 rounded-xl shadow-md max-w-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Enter 8-digit class code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border p-3 rounded-lg uppercase"
          maxLength={8}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          Join Class
        </button>
      </form>

      {message && (
        <div className="mt-4 p-4 bg-slate-100 rounded-lg max-w-lg">
          {message}
        </div>
      )}
    </DashboardLayout>
  );
}