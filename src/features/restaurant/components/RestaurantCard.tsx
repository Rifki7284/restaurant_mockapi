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
interface Props {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: Props) => {
  const { name, description, picture, review, status, slug } = restaurant;
  const avgRating100 = calculateAverageRating(review);
  const rating = calculateRating(avgRating100);
  const navigate = useNavigate();
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={picture}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant={status ? "secondary" : "destructive"}>
            {status ? "Open" : "Closed"}
          </Badge>
        </CardAction>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex gap-3">
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
