import RestaurantActions from "@/components/restaurant/RestaurantActions";
import type { Restaurant } from "@/data/restaurants";

export default function ActionBar({
  restaurant,
  accent = "pulse",
}: {
  restaurant: Restaurant;
  accent?: "pulse" | "ritual";
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-4 py-3 backdrop-blur md:hidden">
      <RestaurantActions restaurant={restaurant} accent={accent} layout="bar" />
    </div>
  );
}