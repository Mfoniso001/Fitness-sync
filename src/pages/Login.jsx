// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useWorkout } from "../context/workoutContext";

export default function Login() {
  const { setUser } = useWorkout();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name: "User", email: form.email });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="mb-4 p-2 w-full border rounded" required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="mb-4 p-2 w-full border rounded" required />

        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 mb-4">Login</button>

        <div className="flex justify-between mb-4">
          <button type="button" className="bg-red-500 text-white px-4 py-2 rounded w-full mr-2">Google</button>
          <button type="button" className="bg-blue-800 text-white px-4 py-2 rounded w-full ml-2">Facebook</button>
        </div>
        <Link to="/" className="text-sm text-blue-600 hover:underline block text-center">Don't have an account? Sign Up</Link>
      </form>
    </div>
  );
}
