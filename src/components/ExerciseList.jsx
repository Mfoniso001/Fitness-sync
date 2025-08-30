// src/pages/Exercises.jsx
import React, { useState, useEffect } from "react";

export default function Exercises({ workouts, setWorkouts }) {
  const [exercises, setExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchExercises = async () => {
      const res = await fetch("https://wger.de/api/v2/exercise/?language=2");
      const data = await res.json();
      setExercises(data.results);
    };
    fetchExercises();
  }, []);

  const addExercise = (ex) => {
    setSelectedExercises([...selectedExercises, { ...ex, sets: "", reps: "", weight: "" }]);
  };

  const handleChange = (index, field, value) => {
    const newEx = [...selectedExercises];
    newEx[index][field] = value;
    setSelectedExercises(newEx);
  };

  const saveWorkout = () => {
    setWorkouts([...workouts, { date: new Date(), exercises: selectedExercises }]);
    setSelectedExercises([]);
  };

  const filtered = exercises.filter((ex) => ex.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Log Exercises</h1>

      <input
        type="text"
        placeholder="Search exercises..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.slice(0, 10).map((ex) => (
        <div key={ex.id} className="p-2 border mb-1 flex justify-between items-center">
          <span>{ex.name}</span>
          <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => addExercise(ex)}>Add</button>
        </div>
      ))}

      {selectedExercises.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold mb-2">Your Workout</h2>
          {selectedExercises.map((ex, idx) => (
            <div key={idx} className="mb-2 p-2 border rounded flex gap-2 items-center">
              <p className="w-40">{ex.name}</p>
              <input type="number" placeholder="Sets" className="border p-1 w-16" value={ex.sets} onChange={(e) => handleChange(idx, "sets", e.target.value)} />
              <input type="number" placeholder="Reps" className="border p-1 w-16" value={ex.reps} onChange={(e) => handleChange(idx, "reps", e.target.value)} />
              <input type="number" placeholder="Weight" className="border p-1 w-16" value={ex.weight} onChange={(e) => handleChange(idx, "weight", e.target.value)} />
            </div>
          ))}
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded" onClick={saveWorkout}>Save Workout</button>
        </div>
      )}
    </div>
  );
}
