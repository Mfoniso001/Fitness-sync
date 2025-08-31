import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between relative">
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
      <button
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-blue-700 rounded-lg shadow-lg p-4 flex flex-col gap-4 md:hidden">
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
