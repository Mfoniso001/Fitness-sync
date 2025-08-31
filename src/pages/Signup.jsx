// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWorkout } from "../context/workoutContext";

export default function Signup() {
  const { darkMode } = useWorkout();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up with ${form.email}`);
    navigate("/dashboard");
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-black"}`}>
      <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className={`p-3 rounded border ${darkMode ? "bg-gray-700 text-gray-100 border-gray-600" : "bg-white text-black border-gray-300"}`}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={`p-3 rounded border ${darkMode ? "bg-gray-700 text-gray-100 border-gray-600" : "bg-white text-black border-gray-300"}`}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={`p-3 rounded border ${darkMode ? "bg-gray-700 text-gray-100 border-gray-600" : "bg-white text-black border-gray-300"}`}
            required
          />
          <button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center">OR</div>

        <div className="flex flex-col gap-3">
          <button className="p-3 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Sign Up with Google
          </button>
          <button className="p-3 bg-blue-800 text-white rounded hover:bg-blue-900 transition">
            Sign Up with Facebook
          </button>
          <button className="p-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Sign Up with Phone Number
          </button>
        </div>

        <p className="mt-6 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
