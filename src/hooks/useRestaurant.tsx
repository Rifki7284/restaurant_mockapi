import { useEffect, useState } from "react";
import type { Restaurant } from "../features/restaurant/types/Restaurant.";

const LIMIT = 8;

const useRestaurant = (category?: string | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchRestaurant = async (
    pageNumber: number,
    category?: string | null,
  ) => {
    try {
      setIsLoading(true);

      const params = new URLSearchParams({
        page: pageNumber.toString(),
        limit: LIMIT.toString(),
      });

      if (category) {
        params.append("categories", category);
      }

      const res = await fetch(`${apiUrl}/restaurant?${params.toString()}`);
      const json = await res.json();

      // 🔐 FIX UTAMA
      const data: Restaurant[] = Array.isArray(json) ? json : (json.data ?? []);

      if (data.length < LIMIT) setHasMore(false);

      setRestaurants((prev) => (pageNumber === 1 ? data : [...prev, ...data]));
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setRestaurants([]);
    setPage(1);
    setHasMore(true);
    fetchRestaurant(1, category);
  }, [category]);

  const loadMore = () => {
    if (isLoading || !hasMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchRestaurant(nextPage, category);
  };

  return {
    restaurants,
    loading: isLoading,
    loadMore,
    hasMore,
  };
};

export default useRestaurant;
