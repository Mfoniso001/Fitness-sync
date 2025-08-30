import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ProgressChart({ workouts }) {
  if (!workouts.length) return <p className="p-4 text-gray-500">No data to display.</p>;

  // Aggregate total weight per day
  const data = workouts.reduce((acc, w) => {
    const date = new Date(w.timestamp).toLocaleDateString();
    const weight = parseFloat(w.weight) || 0;
    const reps = parseInt(w.reps) || 0;
    const sets = parseInt(w.sets) || 0;
    const totalWeight = weight * reps * sets;

    const existing = acc.find((item) => item.date === date);
    if (existing) existing.totalWeight += totalWeight;
    else acc.push({ date, totalWeight });

    return acc;
  }, []);

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="font-bold mb-2">Progress Chart (Total Weight per Day)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="totalWeight" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
