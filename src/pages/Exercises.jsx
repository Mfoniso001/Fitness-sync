import BottomNav from "../components/BottomNav";

export default function Exercises() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-4">Exercises</h2>

        <div className="space-y-3">
          {["Running", "Push Ups", "Squats", "Cycling", "Plank", "Jumping Jacks"].map(
            (exercise) => (
              <div
                key={exercise}
                className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
              >
                <span>{exercise}</span>
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
