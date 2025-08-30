export default function WorkoutHistory({ workouts }) {
    if (!workouts.length)
      return <p className="p-4 text-gray-500">No workouts logged yet.</p>;
  
    return (
      <div className="space-y-4 p-4">
        <h2 className="font-bold mb-2">Workout History</h2>
        {workouts.map((w) => (
          <div
            key={w.id}
            className="p-4 border rounded shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{w.exercise}</p>
              <p>
                Sets: {w.sets} | Reps: {w.reps} | Weight: {w.weight || 0} kg
              </p>
              <p className="text-sm text-gray-500">
                {new Date(w.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  