import { useEffect, useState } from "react";
import type { Restaurant } from "../features/restaurant/types/Restaurant.";

const useRestaurantDetail = (slug?: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!slug) return;

    const fetchRestaurant = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(`${apiUrl}/restaurant`);
        if (!res.ok) {
          setRestaurant(null);
          return;
        }

        const data: Restaurant[] = await res.json();

        const found = data.find((item) => item.slug === slug);
        setRestaurant(found ?? null);
      } catch (error) {
        console.error(error);
        setRestaurant(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurant();
  }, [slug, apiUrl]);

  return {
    restaurant,
    loading: isLoading,
  };
};

export default useRestaurantDetail;
