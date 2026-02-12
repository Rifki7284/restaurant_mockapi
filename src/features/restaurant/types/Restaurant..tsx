import type { Review } from "./Review";

export interface Restaurant {
  id: string;
  name: string;
  picture: string;
  description: string;
  rating: number;
  createdAt: string;
  price: number;
  slug: string;
  status: boolean;
  categories: string;
  review: Review[];
}
