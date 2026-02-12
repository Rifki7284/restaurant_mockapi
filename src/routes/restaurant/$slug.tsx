import { createFileRoute } from "@tanstack/react-router";
import useRestaurantDetail from "../../hooks/useRestaurantDetail";
import RestaurantDetail from "../../features/restaurant/components/detail/RestaurantDetail";
import RestaurantReview from "../../features/restaurant/components/detail/RestaurantReview";
import NotFound from "../../features/restaurant/components/NoRestaurant";

export const Route = createFileRoute("/restaurant/$slug")({
  component: Detail,
});

function Detail() {
  const { slug } = Route.useParams();
  const { restaurant, loading } = useRestaurantDetail(slug);

  if (loading) {
    return (
      <div className="pt-32 p-10">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (restaurant == null) {
    return (
      <div className="pt-32 p-10">
        <NotFound />
      </div>
    );
  }
  return (
    <>
      <div className="pt-32 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <RestaurantDetail restaurant={restaurant} />
        </div>
        <RestaurantReview restaurant={restaurant} />
      </div>
    </>
  );
}
