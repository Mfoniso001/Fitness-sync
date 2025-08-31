// src/context/WorkoutContext.jsx
import React, { createContext, useContext, useState } from "react";

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts((prev) => [...prev, { ...workout, timestamp: new Date() }]);
    alert(`Workout "${workout.name}" logged successfully!`);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => useContext(WorkoutContext);
