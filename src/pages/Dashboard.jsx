import BottomNav from "../components/BottomNav";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        <h2 className="text-xl font-bold">Hi Mfoniso 👋</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm">Calories</p>
            <p className="text-2xl font-bold">1,863</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-sm">Workouts</p>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow col-span-2">
            <p className="text-sm">Streak</p>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>

        <button className="w-full bg-gray-200 py-3 rounded-xl font-semibold">
          Log Workout
        </button>
        <button className="w-full bg-gray-200 py-3 rounded-xl font-semibold">
          View Progress
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
