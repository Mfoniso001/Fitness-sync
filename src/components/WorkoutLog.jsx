// src/components/WorkoutLog.jsx
import React, { useState } from "react";

function WorkoutLog({ exercises }) {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [history, setHistory] = useState([]);

  const handleAddWorkout = (e) => {
    e.preventDefault();
    if (!selectedExercise || !sets || !reps || !weight) return;

    const newWorkout = {
      id: Date.now(),
      exercise: selectedExercise,
      sets,
      reps,
      weight,
      date: new Date().toLocaleString(),
    };

    setHistory([newWorkout, ...history]);

    // Clear form
    setSelectedExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <form onSubmit={handleAddWorkout} className="space-y-4">
        <div>
          <label htmlFor="exercise-select" className="block font-semibold mb-1">
            Choose Exercise
          </label>
          <select
            id="exercise-select"
            value={selectedExercise}
            onChange={(e) => setSelectedExercise(e.target.value)}
            className="border p-2 w-full"
            required
          >
            <option value="">-- Select Exercise --</option>
            {exercises.map((ex) => (
              <option key={ex.id} value={ex.name}>
                {ex.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sets" className="block font-semibold mb-1">
            Sets
          </label>
          <input
            type="number"
            id="sets"
            name="sets"
            placeholder="Sets"
            value={sets}
            onChange={(e) => setSets(Number(e.target.value))}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="reps" className="block font-semibold mb-1">
            Reps
          </label>
          <input
            type="number"
            id="reps"
            name="reps"
            placeholder="Reps"
            value={reps}
            onChange={(e) => setReps(Number(e.target.value))}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="weight" className="block font-semibold mb-1">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="border p-2 w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Workout
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Workout History</h3>
        {history.length === 0 ? (
          <p>No workouts logged yet.</p>
        ) : (
          <ul className="space-y-2">
            {history.map((w) => (
              <li key={w.id} className="border p-2 rounded">
                <p>
                  <strong>{w.exercise}</strong> - {w.sets} sets x {w.reps} reps @{" "}
                  {w.weight} kg
                </p>
                <p className="text-sm text-gray-500">{w.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WorkoutLog;
