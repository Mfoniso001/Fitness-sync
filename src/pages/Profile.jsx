// src/pages/Profile.jsx
import React, { useState } from "react";
import { useWorkout } from "../context/workoutContext";

export default function Profile() {
  const { user, setUser, darkMode } = useWorkout();
  const [form, setForm] = useState({ name: user.name, email: user.email });
  const [profilePic, setProfilePic] = useState(user.profilePic || null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    setUser({ ...user, ...form, profilePic });
    alert("Profile updated!");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`min-h-screen p-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Profile Picture</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {profilePic && (
          <img src={profilePic} alt="Profile" className="mt-4 w-32 h-32 rounded-full object-cover border-2 border-gray-300" />
        )}
      </div>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 mb-4 w-full rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 mb-4 w-full rounded"
      />

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
}
