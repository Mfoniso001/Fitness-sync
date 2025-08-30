// src/pages/Exercises.jsx
import React, { useState, useEffect } from "react";
import WorkoutLog from "../components/WorkoutLog";

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch exercises from WGER API on mount
  useEffect(() => {
    async function fetchExercises() {
      try {
        const res = await fetch(
          "https://wger.de/api/v2/exercise/?language=2&limit=50"
        );
        const data = await res.json();
        setExercises(data.results); // set fetched exercises
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exercises:", error);
        setLoading(false);
      }
    }
    fetchExercises();
  }, []);

  if (loading) {
    return <p className="p-6 text-center">Loading exercises...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Exercises</h1>
      {/* Pass exercises to WorkoutLog */}
      <WorkoutLog exercises={exercises} />
    </div>
  );
}

export default Exercises;

