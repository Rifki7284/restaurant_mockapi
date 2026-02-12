import { useNavigate } from "@tanstack/react-router";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { calculateRating } from "../../../utils/calculaterating";
import { calculateAverageRating } from "../../../utils/rating";
import type { Restaurant } from "../types/Restaurant.";
import StarRating from "./Rating";
import formatPrice from "../../../lib/formatPrice";

interface Props {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: Props) => {
  const {
    name,
    description,
    picture,
    review,
    status,
    slug,
    price,
    categories,
  } = restaurant;

  const avgRating100 = calculateAverageRating(review);
  const rating = calculateRating(avgRating100);
  const navigate = useNavigate();

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden flex flex-col h-full">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={picture}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader className="flex-1 flex flex-col">
        <CardAction>
          <Badge variant={status ? "secondary" : "destructive"}>
            {status ? "Open" : "Closed"}
          </Badge>
        </CardAction>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
        <CardDescription>
          {categories} - Start from {formatPrice(price)}
        </CardDescription>
        <CardDescription className="line-clamp-2 flex-1">
          {description}
        </CardDescription>
        <div className="flex gap-3 mt-auto pt-2">
          <StarRating value={rating} />
          <p>{rating}</p>
        </div>
      </CardHeader>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() =>
            navigate({
              to: "/restaurant/$slug",
              params: { slug },
            })
          }
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
