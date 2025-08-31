import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Mfoniso Celestine",
    email: "Mfonisogeorge16@email.com",
    bio: "Fitness enthusiast 💪",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <div className="bg-white shadow-md p-4 rounded-lg">
        <label className="block mb-2 font-semibold">Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        ) : (
          <p>{profile.name}</p>
        )}

        <label className="block mt-4 mb-2 font-semibold">Email:</label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        ) : (
          <p>{profile.email}</p>
        )}

        <label className="block mt-4 mb-2 font-semibold">Bio:</label>
        {isEditing ? (
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        ) : (
          <p>{profile.bio}</p>
        )}

        <div className="mt-6 flex gap-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
