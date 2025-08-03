import { Link } from "react-router-dom";
export default function Home() {
  return (
    // Main container with a dark background
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 text-center">
      
      {/* Content wrapper */}
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-white mb-3">
          Welcome to Our NGO
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Making a difference, one step at a time.
        </p>
      </div>

      {/* Button container */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link to="/register">
          <button
            className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Register
          </button>
        </Link>
        <Link to="/admin">
          <button
            className="w-full sm:w-auto bg-gray-800 text-gray-200 font-semibold py-2 px-6 rounded-lg border border-gray-600 shadow-sm hover:bg-gray-700 hover:text-white transition-colors duration-300"
          >
            Admin Login
          </button>
        </Link>
      </div>
      
    </main>
  );
}