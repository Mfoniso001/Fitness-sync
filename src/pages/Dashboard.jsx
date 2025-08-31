// src/pages/Dashboard.jsx
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Fitness Sync</h1>
        <p className="mb-6 text-gray-600">
          Track your workouts, monitor progress, and explore exercises.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/exercises"
            className="bg-blue-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-600 transition"
          >
            Browse Exercises
          </Link>
          <Link
            to="/history"
            className="bg-green-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-green-600 transition"
          >
            Workout History
          </Link>
          <Link
            to="/profile"
            className="bg-yellow-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-yellow-600 transition"
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className="bg-purple-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-purple-600 transition"
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
