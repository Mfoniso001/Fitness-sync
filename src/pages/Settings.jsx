// src/components/Settings.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow mb-4 hover:bg-blue-600 transition"
      >
        Toggle Dark Mode
      </button>

      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default Settings;
