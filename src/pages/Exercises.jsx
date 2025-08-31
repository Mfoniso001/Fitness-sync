// src/pages/Exercises.jsx
import { useState, useEffect } from "react";
import { useWorkout } from "../context/workoutContext";

export default function Exercises() {
  const { addWorkout } = useWorkout();
  const [exerciseList, setExerciseList] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  // Fetch exercises from WGER API
  useEffect(() => {
    async function fetchExercises() {
      try {
        const res = await fetch("https://wger.de/api/v2/exercise/?language=2&limit=20");
        const data = await res.json();
        setExerciseList(data.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchExercises();
  }, []);

  const handleLogWorkout = () => {
    if (!selectedExercise || !sets || !reps) return;
    addWorkout({
      name: selectedExercise.name,
      sets,
      reps,
      weight,
    });
    setSelectedExercise("");
    setSets("");
    setReps("");
    setWeight("");
    alert("Workout logged!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-4">Log an Exercise</h2>

        <label className="block mb-2">Select Exercise:</label>
        <select
          value={selectedExercise.name || ""}
          onChange={(e) => {
            const exercise = exerciseList.find((ex) => ex.id === parseInt(e.target.value));
            setSelectedExercise(exercise || "");
          }}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="">-- Choose an exercise --</option>
          {exerciseList.map((ex) => (
            <option key={ex.id} value={ex.id}>
              {ex.name || "Unnamed Exercise"}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="number"
            placeholder="Sets"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Weight (optional)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="p-2 border rounded"
          />
        </div>

        <button
          onClick={handleLogWorkout}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Log Workout
        </button>
      </div>
    </div>
  );
}
