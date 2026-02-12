import type { Restaurant } from "../types/Restaurant.";
import RestaurantCard from "./RestaurantCard";

interface RestaurantData {
  restaurant: Restaurant[];
}
const RestaurantFlexBox = ({ restaurant }: RestaurantData) => {
  return (
    <div className={`flex gap-x-4 gap-y-6 flex-wrap`}>
      {restaurant.map((item) => {
        return <RestaurantCard restaurant={item} />;
      })}
    </div>
  );
};
export default RestaurantFlexBox;
