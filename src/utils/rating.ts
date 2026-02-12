import type { Review } from "../features/restaurant/types/Review";

export const calculateAverageRating = (reviews: Review[]): number => {
  if (!reviews.length) return 0;

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return total / reviews.length; // hasil 0 - 100
};
