import formatPrice from "../../../../lib/formatPrice";
import type { Restaurant } from "../../types/Restaurant.";

interface RestaurantData {
  restaurant: Restaurant;
}

const RestaurantDetail = ({ restaurant }: RestaurantData) => {
  return (
    <>
      <div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3 border-4 border-gray-900">
          <img
            src={restaurant.picture}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
          {restaurant.name}
        </h1>

        {/* Rating placeholder */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-yellow-400">
                ★
              </span>
            ))}
          </div>
          <span className="text-gray-600 font-medium">4.8 (120 reviews)</span>
        </div>

        {/* Price */}
        <div className="mb-8 bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
          <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-2">
            Starting From
          </p>
          <span className="text-6xl font-black text-white">
            {formatPrice(restaurant.price)}
          </span>
          <p className="text-gray-400 text-sm mt-2">per person</p>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">About</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {restaurant.description}
          </p>
        </div>

        {/* CTA Button */}
        <button className="mt-8 w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
          Reserve Table
        </button>
      </div>
    </>
  );
};

export default RestaurantDetail;
