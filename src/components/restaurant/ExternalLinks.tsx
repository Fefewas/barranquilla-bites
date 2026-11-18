import RestaurantActions from '@/components/restaurant/RestaurantActions'
import type { Restaurant } from '@/data/restaurants'

export default function ExternalLinks({
  restaurant,
  accent = 'pulse',
}: {
  restaurant: Restaurant
  accent?: 'pulse' | 'ritual'
}) {
  const hasOfficialLinks = Boolean(restaurant.websiteUrl || restaurant.menuUrl)

  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <h2 className="font-display text-xl">Location &amp; links</h2>
      {restaurant.address && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {restaurant.address}
        </p>
      )}

      <RestaurantActions
        restaurant={restaurant}
        accent={accent}
        className="mt-5"
      />

      {!hasOfficialLinks && (
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          No official website or menu link is listed in the research file.
        </p>
      )}

      <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        External links open in a new tab. This site does not handle
        reservations.
      </p>
    </section>
  )
}
