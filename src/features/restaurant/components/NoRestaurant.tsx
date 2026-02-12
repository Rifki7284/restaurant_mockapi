import { Link } from "@tanstack/react-router";
import { Home, Utensils } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[12rem] font-black text-gray-900 leading-none tracking-tighter">
            404
          </h1>
          <div className="flex justify-center gap-4 -mt-8">
            <div className="w-16 h-2 bg-gray-900 rounded-full"></div>
            <div className="w-16 h-2 bg-gray-900 rounded-full"></div>
            <div className="w-16 h-2 bg-gray-900 rounded-full"></div>
          </div>
        </div>

        {/* Icon */}
        <div className="mb-8">
          <div className="inline-block bg-linear-to-br from-gray-900 to-black border-4 border-gray-900 rounded-full p-8 shadow-2xl">
            <Utensils size={64} className="text-white" strokeWidth={2.5} />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
          Restaurant Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg mx-auto">
          Oops! The restaurant you're looking for seems to have closed or moved
          to a different location.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/home"
            className="group flex items-center gap-3 bg-linear-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 border-4 border-gray-900"
          >
            <Home size={24} strokeWidth={2.5} />
            Back to Home
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8 opacity-20">
          <div className="w-24 h-24 bg-gray-900 rounded-full"></div>
          <div className="w-16 h-16 bg-gray-900 rounded-full mt-8"></div>
          <div className="w-20 h-20 bg-gray-900 rounded-full mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
