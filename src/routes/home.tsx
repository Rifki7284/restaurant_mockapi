import { createFileRoute } from "@tanstack/react-router";
import RestaurantFlexBox from "../features/restaurant/components/RestaurantFlexbox";
import useRestaurant from "../hooks/useRestaurant";
import Navbar from "../components/layout/navbar";

const Home = () => {
  const { restaurants, loading, loadMore, hasMore } = useRestaurant();

  return (
    <>
      <Navbar />

      <div className="pt-32 p-10">
        {restaurants.length === 0 && !loading && <p>Data kosong</p>}
        <RestaurantFlexBox restaurant={restaurants} />
        <div className="flex justify-center mt-8">
          {loading && <p>Loading...</p>}

          {!loading && hasMore && (
            <button
              onClick={loadMore}
              className="px-6 py-2 rounded-lg bg-black text-white hover:opacity-80"
            >
              Load More
            </button>
          )}

          {!hasMore && (
            <p className="text-gray-500">Semua data sudah ditampilkan</p>
          )}
        </div>
      </div>
    </>
  );
};

export const Route = createFileRoute("/home")({
  component: Home,
});
