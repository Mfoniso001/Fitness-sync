// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [workouts, setWorkouts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    if (storedUser) {
      const storedWorkouts = JSON.parse(localStorage.getItem(`${storedUser.email}-workouts`)) || [];
      setWorkouts(storedWorkouts);
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {user ? (
        <div>
          <p className="mb-4">Welcome back, <strong>{user.name}</strong>!</p>
          {workouts.length === 0 ? (
            <p>No workouts logged yet. Go to the Exercises page to add your workouts.</p>
          ) : (
            <div className="space-y-4">
              {workouts.map((w, idx) => (
                <div key={idx} className="border p-4 rounded shadow">
                  <p><strong>Date:</strong> {w.date}</p>
                  {w.exercises.map((ex, i) => (
                    <p key={i}>{ex.name}: {ex.sets} sets x {ex.reps} reps @ {ex.weight} kg</p>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p>Please sign up or log in first.</p>
      )}
    </div>
  );
}
