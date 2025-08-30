import BottomNav from "../components/BottomNav";

export default function Settings() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-4">Settings</h2>

        <div className="space-y-3">
          {["Account", "Notifications", "Privacy", "Help & Support", "Log Out"].map(
            (item) => (
              <div
                key={item}
                className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
              >
                <span>{item}</span>
                <span className="text-gray-400">&gt;</span>
              </div>
            )
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
