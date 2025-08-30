// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Fitness Tracker</h1>
      <div className="space-x-4">
        <Link to="/">Landing</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/exercises">Exercises</Link>
        <Link to="/history">History</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
