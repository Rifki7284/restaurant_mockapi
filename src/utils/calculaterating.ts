export const calculateRating = (rating: number): number => {
  return Number((rating / 20).toFixed(1)); // 0–100 → 0–5 (1 desimal)
};
