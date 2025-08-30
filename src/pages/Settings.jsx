// src/pages/Settings.jsx
import { useState, useEffect } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    document.body.classList.toggle("dark", saved);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="flex items-center gap-2">
        <label htmlFor="darkMode" className="font-medium">Dark Mode</label>
        <input
          id="darkMode"
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="w-5 h-5"
        />
      </div>
    </div>
  );
}
