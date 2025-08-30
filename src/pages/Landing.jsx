import { useNavigate } from "react-router-dom";

export default function App() {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Landing Section */}
        <header className="bg-blue-600 text-white p-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Fitness Sync</h1>
          <p className="text-lg max-w-xl mx-auto">
            Track your workouts, monitor your progress, and stay motivated—all in one place.
          </p>
        </header>
  
        {/* Signup Section */}
        <section className="flex-grow flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
            <form>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 mb-3 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-3 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }