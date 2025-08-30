import BottomNav from "../components/BottomNav";

export default function Profile() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1 p-6">
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gray-300"></div>
          <h2 className="text-xl font-bold mt-2">Mfoniso</h2>
        </div>

        <div className="space-y-3">
          {["Running", "Push Ups", "Squats", "Cycling"].map((workout) => (
            <div
              key={workout}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <span>{workout}</span>
              <span className="text-gray-400">&gt;</span>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
