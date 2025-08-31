import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="bg-white shadow-md p-4 rounded-lg space-y-4">
        <div className="flex justify-between items-center">
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={() => handleToggle("notifications")}
          />
        </div>

        <div className="flex justify-between items-center">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={() => handleToggle("darkMode")}
          />
        </div>

        <button
          onClick={handleSave}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
