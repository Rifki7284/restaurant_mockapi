interface StarRatingProps {
  value: number; // 0 - 5 (float)
  maxStars?: number;
}

import { Star, StarHalf } from "lucide-react";

const StarRating = ({ value, maxStars = 5 }: StarRatingProps) => {
  const rating = Math.min(Math.max(value, 0), maxStars);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }).map((_, index) => {
        const current = index + 1;

        if (rating >= current) {
          return (
            <Star
              key={index}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          );
        }

        if (rating >= current - 0.5) {
          return (
            <StarHalf
              key={index}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          );
        }

        return <Star key={index} className="h-4 w-4 text-gray-300" />;
      })}
    </div>
  );
};

export default StarRating;
