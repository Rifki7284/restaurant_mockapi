import { createFileRoute } from "@tanstack/react-router";
import RestaurantFlexBox from "../features/restaurant/components/RestaurantFlexbox";
import useRestaurant from "../hooks/useRestaurant";
import Navbar from "../components/layout/navbar";
import { faker } from "@faker-js/faker";
import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Spinner } from "../components/ui/spinner";
import { Input } from "../components/ui/input";
import NotFound from "../features/restaurant/components/NoRestaurant";

// Faker countries
const countries = Array.from(
  new Set(Array.from({ length: 100 }).map(() => faker.location.country())),
).map((country) => ({
  label: country,
  value: country,
}));

const Home = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all"); // all, active, inactive
  const [priceFilter, setPriceFilter] = useState<number | "">(""); // min price input
  const { restaurants, loading, loadMore, hasMore } = useRestaurant(category);

  // Client-side filtering
  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((r) => {
      let statusMatch = true;
      let priceMatch = true;

      if (statusFilter !== "all") {
        statusMatch = statusFilter === "active" ? r.status : !r.status;
      }

      if (priceFilter !== "" && priceFilter !== null) {
        priceMatch = r.price >= Number(priceFilter);
      }

      return statusMatch && priceMatch;
    });
  }, [restaurants, statusFilter, priceFilter]);
  const shouldShowLoadMore =
    !loading && hasMore && filteredRestaurants.length > 0;
  return (
    <>
      <Navbar />

      <div className="pt-32 p-10">
        <div className="mx-auto flex w-full px-4 py-6 gap-4 items-center">
          <h1 className="font-bold text-xl">Filter by :</h1>

          {/* Country filter */}
          <Select
            value={category ?? "all"}
            onValueChange={(value) =>
              setCategory(value === "all" ? null : value)
            }
          >
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Country" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {countries.map((country) => (
                <SelectItem key={country.label} value={country.value}>
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Status filter */}
          <Select
            value={statusFilter}
            onValueChange={(value) => setStatusFilter(value)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Min Price"
            value={priceFilter}
            onChange={(e) => {
              const val = e.target.value;

              if (/^\d*$/.test(val)) setPriceFilter(Number(val));
            }}
            className="w-40"
          />
        </div>

        {loading && (
          <div className="w-full flex justify-center min-h-[50dvh] items-center ">
            <Spinner className="size-32" />
          </div>
        )}

        {!loading && filteredRestaurants.length === 0 ? (
          <NotFound />
        ) : (
          <RestaurantFlexBox restaurant={filteredRestaurants} />
        )}

        <div className="flex justify-center mt-8">
          {shouldShowLoadMore && (
            <button
              onClick={loadMore}
              className="px-6 py-2 rounded-lg bg-black text-white"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export const Route = createFileRoute("/home")({
  component: Home,
});
