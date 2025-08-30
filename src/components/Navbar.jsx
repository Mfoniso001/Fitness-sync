// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">Fitness Sync</div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-blue-600">Landing</Link>
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/exercises" className="hover:text-blue-600">Exercises</Link>
        <Link to="/profile" className="hover:text-blue-600">Profile</Link>
        <Link to="/history" className="hover:text-blue-600">History</Link>
        <Link to="/settings" className="hover:text-blue-600">Settings</Link>
      </div>

      {/* Sign Up Button */}
      <div>
        <Link 
          to="/signup" 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
