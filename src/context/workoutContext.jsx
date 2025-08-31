// src/context/workoutContext.jsx
import React, { createContext, useContext, useState } from "react";

const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [user, setUser] = useState({ name: "", email: "" });

  const addWorkout = (workout) => {
    setWorkouts((prev) => [...prev, { ...workout, timestamp: new Date() }]);
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleNotifications = () => setNotifications((prev) => !prev);
  const logout = () => {
    setUser({ name: "", email: "" });
    setWorkouts([]);
  };

  return (
    <WorkoutContext.Provider
      value={{
        workouts,
        addWorkout,
        darkMode,
        toggleDarkMode,
        notifications,
        toggleNotifications,
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => useContext(WorkoutContext);
