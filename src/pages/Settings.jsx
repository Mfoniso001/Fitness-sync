// src/pages/Settings.jsx
import React from "react";
import { useWorkout } from "../context/workoutContext";

export default function Settings() {
  const { darkMode, toggleDarkMode, logout } = useWorkout();

  return (
    <div className={`min-h-screen p-4 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-black"}`}>
      <div className={`max-w-3xl mx-auto rounded-lg shadow-md p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-2xl font-bold mb-4">Settings</h2>

        <div className="flex flex-col gap-4">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Toggle Dark Mode ({darkMode ? "On" : "Off"})
          </button>

          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>

          <button
            onClick={() => alert("Notifications enabled!")}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Enable Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
