import { createContext, useContext, useState } from "react";

// ✅ Create context (capitalized)
const WorkoutContext = createContext();

// ✅ Provider component (capitalized)
export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  // Function to add a workout
  const addWorkout = (workout) => {
    setWorkouts((prev) => [...prev, { ...workout, timestamp: new Date() }]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

// ✅ Custom hook for consuming context
export const useWorkout = () => useContext(WorkoutContext);
