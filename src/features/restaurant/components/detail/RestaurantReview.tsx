import { Star } from "lucide-react";
import type { Restaurant } from "../../types/Restaurant.";
import StarRating from "../Rating";
import { useState } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";

interface RestaurantData {
  restaurant: Restaurant;
}

const RestaurantReview = ({ restaurant }: RestaurantData) => {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description",
  );

  return (
    <div className="bg-linear-to-br from-white to-gray-50 border-4 border-gray-900 rounded-2xl overflow-hidden shadow-xl">
      <div className="flex gap-8 border-b-4 border-gray-900 px-6 bg-white">
        <button
          onClick={() => setActiveTab("description")}
          className={`py-4 font-bold border-b-4 transition-all ${
            activeTab === "description"
              ? "border-gray-900 text-gray-900"
              : "border-transparent text-gray-400 hover:text-gray-700"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`py-4 font-bold border-b-4 transition-all ${
            activeTab === "reviews"
              ? "border-gray-900 text-gray-900"
              : "border-transparent text-gray-400 hover:text-gray-700"
          }`}
        >
          Reviews ({restaurant.review?.length || 0})
        </button>
      </div>

      <div className="p-8">
        {activeTab === "description" ? (
          <div>
            <h3 className="text-3xl font-black text-gray-900 mb-6">
              Restaurant Description
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {restaurant.description}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {restaurant.review && restaurant.review.length > 0 ? (
                <div className="space-y-6">
                  {restaurant.review.map((review) => {
                    const starValue =
                      Math.round((review.rating / 100) * 10) / 2;
                    return (
                      <div
                        key={review.id}
                        className="bg-white border-4 border-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="flex  gap-3 items-center  mb-4">
                          <Avatar>
                            <AvatarImage
                              src={review.avatar}
                              className="grayscale"
                            />
                          </Avatar>
                          <div>
                            <p className="font-black text-gray-900 text-xl mb-2">
                              {review.name || "Anonymous"}
                            </p>
                            <StarRating value={starValue} />
                          </div>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {review.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Star
                    size={64}
                    className="mx-auto text-gray-300 mb-6"
                    strokeWidth={2}
                  />
                  <h3 className="text-2xl font-black text-gray-900 mb-3">
                    No Reviews Yet
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Be the first to review this restaurant!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantReview;
