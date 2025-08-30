// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Exercises from "./pages/Exercises";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";

function App() {
  const [workouts, setWorkouts] = useState([]);

  return (
    <Router>
      <Navbar />
      <div className="p-6 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard workouts={workouts} />} />
          <Route path="/exercises" element={<Exercises workouts={workouts} setWorkouts={setWorkouts} />} />
          <Route path="/history" element={<History workouts={workouts} />} />
          <Route path="/profile" element={<Profile workouts={workouts} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
