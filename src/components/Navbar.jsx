// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useWorkout } from "../context/workoutContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useWorkout();

  return (
    <nav className={`px-6 py-4 flex items-center justify-between relative ${darkMode ? "bg-gray-800 text-gray-100" : "bg-blue-600 text-white"}`}>
      <h1 className="text-lg font-bold">Fitness Sync</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/exercises">Exercises</Link>
        <Link to="/history">History</Link>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={`absolute top-16 right-6 rounded-lg shadow-lg p-4 flex flex-col gap-4 md:hidden ${darkMode ? "bg-gray-700" : "bg-blue-700"}`}>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
          <Link to="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
          <Link to="/exercises" onClick={() => setIsOpen(false)}>Exercises</Link>
          <Link to="/history" onClick={() => setIsOpen(false)}>History</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
