import Reveal from '@/components/motion/Reveal'
import RestaurantCard from '@/components/restaurants/RestaurantCards'
import { CATEGORIES, getFeaturedRestaurants } from '@/data/restaurants'

export default function FeaturedRestaurants() {
  const featured = getFeaturedRestaurants()

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Featured tables
          </p>
          <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">
            Featured restaurants
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          A selection of restaurant profiles drawn directly from the research
          file.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((restaurant, index) => (
          <Reveal
            key={restaurant.slug}
            delay={index * 0.08}
            y={34}
            className="h-full"
          >
            <RestaurantCard
              restaurant={restaurant}
              accent={CATEGORIES[restaurant.category].accent}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
