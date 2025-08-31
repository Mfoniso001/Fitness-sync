// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { WorkoutProvider } from "./context/workoutContext";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WorkoutProvider>
      <Router>
        <App />
      </Router>
    </WorkoutProvider>
  </React.StrictMode>
);
