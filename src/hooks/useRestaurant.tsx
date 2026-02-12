import { useEffect, useState } from "react";
import type { Restaurant } from "../features/restaurant/types/Restaurant.";

const LIMIT = 8;

const useRestaurant = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchRestaurant = async (pageNumber: number) => {
    try {
      setIsLoading(true);

      const res = await fetch(
        `${apiUrl}/restaurant?page=${pageNumber}&limit=${LIMIT}`,
      );
      const data: Restaurant[] = await res.json();

      // kalau data kosong → stop load more
      if (data.length < LIMIT) {
        setHasMore(false);
      }

      // append data lama + baru
      setRestaurants((prev) => [...prev, ...data]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  // fetch pertama
  useEffect(() => {
    fetchRestaurant(1);
  }, []);

  const loadMore = () => {
    if (isLoading || !hasMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchRestaurant(nextPage);
  };

  return {
    restaurants,
    loading: isLoading,
    loadMore,
    hasMore,
  };
};

export default useRestaurant;
