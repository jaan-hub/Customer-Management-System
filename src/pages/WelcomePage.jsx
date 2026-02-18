import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-10 text-center transform transition duration-500 hover:scale-105">
        
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          🌟 Welcome to Customer Management
        </h1>
        
        <p className="text-gray-600 mb-6">
          Managing customers is now simple and smooth with our system.
        </p>
        
        <ul className="space-y-3 text-gray-700 text-left">
          <li>
            <NavLink
              to="/add"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-100 hover:text-purple-600 transition cursor-pointer"
            >
              ➕ Add new customers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/view"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-100 hover:text-green-600 transition cursor-pointer"
            >
              👥 View all customers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search-by-id"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition cursor-pointer"
            >
              🔍 Search by ID or mobile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/delete"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-100 hover:text-red-600 transition cursor-pointer"
            >
              🗑️ Delete by ID
            </NavLink>
          </li>
        </ul>
        
        <div className="mt-8">
          <NavLink
            to="/view"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition inline-block"
          >
            Get Started 🚀
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;