// src/pages/History.jsx
import React from "react";
import { useWorkout } from "../context/workoutContext";

export default function History() {
  const { workouts, darkMode } = useWorkout();

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
      <h2 className="text-2xl font-bold mb-4">Workout History</h2>
      {workouts.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200">
            <thead className={`bg-gray-100 ${darkMode ? "bg-gray-700" : ""}`}>
              <tr>
                <th className="px-4 py-2 border-b">Date</th>
                <th className="px-4 py-2 border-b">Exercise</th>
                <th className="px-4 py-2 border-b">Sets</th>
                <th className="px-4 py-2 border-b">Reps</th>
                <th className="px-4 py-2 border-b">Weight</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((w, i) => (
                <tr key={i}>
                  <td className="px-4 py-2 border-b">{new Date(w.timestamp).toLocaleDateString()}</td>
                  <td className="px-4 py-2 border-b">{w.name}</td>
                  <td className="px-4 py-2 border-b">{w.sets}</td>
                  <td className="px-4 py-2 border-b">{w.reps}</td>
                  <td className="px-4 py-2 border-b">{w.weight || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
