// src/pages/History.jsx
export default function History({ workouts }) {
    if (!workouts.length) return <p>No workouts logged yet.</p>;
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Workout History</h1>
        {workouts.map((w, idx) => (
          <div key={idx} className="mb-2 p-2 border rounded">
            <p className="font-semibold">{new Date(w.date).toLocaleString()}</p>
            {w.exercises.map((ex, i) => (
              <p key={i}>{ex.name} – {ex.sets} sets x {ex.reps} reps @ {ex.weight}kg</p>
            ))}
          </div>
        ))}
      </div>
    );
  }
  