import BottomNav from "../components/BottomNav";

export default function History() {
  const logs = [
    { date: "Aug 25", workout: "Running", calories: 320 },
    { date: "Aug 24", workout: "Push Ups", calories: 120 },
    { date: "Aug 23", workout: "Cycling", calories: 500 },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-4">Workout History</h2>

        <div className="space-y-3">
          {logs.map((log, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow flex justify-between"
            >
              <span>
                <span className="font-medium">{log.workout}</span> <br />
                <span className="text-sm text-gray-500">{log.date}</span>
              </span>
              <span className="text-sm font-semibold text-blue-600">
                {log.calories} kcal
              </span>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
